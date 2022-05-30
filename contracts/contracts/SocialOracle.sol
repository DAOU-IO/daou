//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * Social Oracle Contract process the data submitted by oracle node
 * and change the Soul Profile for member in DAOs.
 */

import "./SoulStruct.sol";
import "./SBT.sol";

contract SocialOracle {

    struct SocialData {
        // string code;
        // the social data of every members, don't consider async by know.
        mapping(address => int) scores;
        mapping(address => string) urls;
        mapping(address => string) names;
        address[] participants;
    }

    struct SocialDataInput {
        int[] scores;
        string[] urls;
        string[] names;
        address[] participants;
    }

    struct Dao {
        string name;
        address manager;
        address[] members;
        uint numberThreshold;
        int requiredScore;
        uint randomMemberNumber;
    }

    address public operator;
    string public name;
    bytes32 private zeroHash = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;
   
    mapping(address => Dao) daos;
    mapping(address => SocialData) daoState;
    mapping(address => address[]) randomMembers;
    mapping(address => bool) started;
    // who submit the social data
    mapping(address => mapping(address => SocialData)) vSocialData;
    mapping(address => mapping(address => SocialDataInput)) vSocialDataInput;
    mapping(address => SocialDataInput) outputs;
    address[] submitAddrs;

    constructor(string memory _name) {
        name = _name;
        operator = msg.sender;
    }

    // Register a dao in social oracle.
    function register(address _dao, Dao memory _daoInfo) external {
        require(keccak256(bytes(daos[_dao].name)) == zeroHash, "DAO already registered.");
        daos[_dao] = _daoInfo;
    }

    // getDaoInfo
    function getDaoInfo(address _dao) external view returns (Dao memory) {
        return daos[_dao];
    }

    function prepareOutput(address _dao) internal {
        for(uint i = 0; i < daoState[_dao].participants.length; i++){
            address addr = daoState[_dao].participants[i];
            outputs[_dao].scores.push(daoState[_dao].scores[addr]);
            outputs[_dao].names.push(daoState[_dao].names[addr]);
            outputs[_dao].urls.push(daoState[_dao].urls[addr]);
        }
    }

    // getDaoState
    function getDaoState(address _dao) external view returns (SocialDataInput memory) {
        return outputs[_dao];
        // return daoState[_dao].scores[_member];
    }

    // Add members to a dao.
    function addMembers(address _dao, address[] memory _newMembers) external {
        require(msg.sender == daos[_dao].manager, "Only manager have rights to add members");
        address[] storage members = daos[_dao].members;
        for (uint i = 0; i < _newMembers.length; i++) {
            members.push(_newMembers[i]);
        }
        daos[_dao].members = members;
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    }


    // Start a round of social oracle
    // randomly select member
    function start(address _dao) external {
        require(msg.sender == daos[_dao].manager, "Only manager have rights to start a social oracle");
        started[_dao] = true;
        address[] memory members = daos[_dao].members;
        uint len = members.length;
        for(uint i = 0; i < daos[_dao].randomMemberNumber; i++) {
            // have problem to generate random uint.
            uint n = random() % len;
            randomMembers[_dao].push(members[n]);
        }
    }

    function getRandomMembers(address _dao) external view returns (address[] memory) {
        return randomMembers[_dao];
    }

    function getStarted(address _dao) external view returns (bool) {
        return started[_dao];
    }

    // check if a member is in randomMembers.
    function ifCanSubmit(address _dao, address member) internal view returns (bool) {
        bool isManager = daos[_dao].manager == member;
        bool scoresCondition = daoState[_dao].scores[member] >= daos[_dao].requiredScore;
        bool ifInRandom;
        address[] memory rMembers = randomMembers[_dao];
        for (uint i = 0; i < rMembers.length; i++) {
            if (member == rMembers[i]) {
                ifInRandom == true;
                break;
            }
        }
        bool res = scoresCondition || ifInRandom || isManager;
        return res;
    }

    // Submit social data
    // Assume that one address only submit one time
    function submit(address _dao, SocialDataInput memory _socialData) external {
        require(started[_dao], "Only when social oracle started can member submit the social data.");
        require(ifCanSubmit(_dao, msg.sender), "Only scores reach the threhold or be randomly selected can submit social data.");
        submitAddrs.push(msg.sender);
        vSocialDataInput[_dao][msg.sender] = _socialData;
        vSocialData[_dao][msg.sender].participants = _socialData.participants;
        for(uint i = 0; i < _socialData.participants.length; i++) {
            vSocialData[_dao][msg.sender].names[_socialData.participants[i]] = _socialData.names[i];
            vSocialData[_dao][msg.sender].urls[_socialData.participants[i]] = _socialData.urls[i];
            vSocialData[_dao][msg.sender].scores[_socialData.participants[i]] = _socialData.scores[i];
        }
    }

    mapping(address => uint) counts;
    address[] a;

    function isEqual(int[] memory A, int[] memory B) pure internal returns (bool) {
        if (A.length != B.length) {
            return false;
        }
        uint len = A.length;
        for(uint i = 0; i < len; i++){
            if (A[i] != B[i]) {
                return false;
            }
        }
        return true;
    }

    // Verify all social data
    // Assume the simplest condition: one time just exist one type update, like discord. 
    function verify(address _dao) internal returns (bool) {
        if (submitAddrs.length < daos[_dao].numberThreshold) {
            return false;
        }

        for(uint i = 0; i < submitAddrs.length; i++) {
            for(uint j = 0; j < a.length; j++){
                if(isEqual(vSocialDataInput[_dao][submitAddrs[i]].scores,  vSocialDataInput[_dao][a[j]].scores)) {
                    counts[a[j]] += 1;
                } else {
                    counts[submitAddrs[i]] = 1;
                    a.push(submitAddrs[i]);
                }
            }
        }

        address maxCountAddr;
        uint total;
        for(uint j = 0; j < a.length; j++) {
            total += counts[a[j]];
        }

        uint y = 0;
        uint z = 1;
        while (z < a.length) {
            if(counts[a[y]] >= counts[a[z]]) {
                maxCountAddr = a[y];
                z++;
            } else {
                maxCountAddr = a[z];
                y = z;
                z++;
            }
        }

        if (counts[maxCountAddr]*2 < total) {
            return false;
        }

        for(uint i = 0; i < vSocialData[_dao][maxCountAddr].participants.length; i++) {
            address paddr = vSocialData[_dao][maxCountAddr].participants[i];
            daoState[_dao].scores[paddr] = vSocialData[_dao][maxCountAddr].scores[paddr];
            daoState[_dao].names[paddr] = vSocialData[_dao][maxCountAddr].names[paddr];
            daoState[_dao].urls[paddr] = vSocialData[_dao][maxCountAddr].urls[paddr];
        }
        
        return true;        
    }


    // update SBT
    function updateSBT(address _dao, address _SBTAddr) internal {
        SBT sbt = SBT(_SBTAddr);
        for(uint i = 0; i < daoState[_dao].participants.length; i++) {
            address soulAddr = daoState[_dao].participants[i];
            Soul memory newSoul;
            newSoul.identity = daoState[_dao].names[daoState[_dao].participants[i]];
            newSoul.url = daoState[_dao].urls[daoState[_dao].participants[i]];
            newSoul.score = daoState[_dao].scores[daoState[_dao].participants[i]];
            newSoul.timestamp = block.timestamp;
            sbt.setProfile(soulAddr, newSoul);        
        }
    }

    // End this round social oralce.
    function end(address _dao, address _SBTAddr) external returns (bool) {
        require(msg.sender == daos[_dao].manager, "Only manager have rights to end a social oracle");
        bool isVetified = verify(_dao);
        if (isVetified) {
            updateSBT(_dao, _SBTAddr);
        }
        started[_dao] = false;
        prepareOutput(_dao);
        return isVetified;
    }
}