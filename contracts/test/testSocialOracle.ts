import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {SocialOracle, SocialOracle__factory} from "../typechain";

import { SBT,SBT__factory } from "../typechain";

describe("SocialOracle", function() {
    let dao: SignerWithAddress;
    let [manager, member1, member2, member3, member4, member5, member6, member7, member8, member9]:SignerWithAddress[] = [];
    let members: SignerWithAddress[];
    let membersNotJoin: SignerWithAddress[];
    let notMembers: SignerWithAddress;
    let so: SocialOracle;
    let members_addr: string[] = [];
    let membersNotJoin_addr: string[] = []; 
    let sbt: SBT;

    before(async () => {
        [dao, manager, member1, member2, member3, member4, member5, member6, member7, member8, member9] = await ethers.getSigners();
        const SocialOracleContract = (await ethers.getContractFactory('SocialOracle')) as SocialOracle__factory;
        const SBTContract = (await ethers.getContractFactory('SBT')) as SBT__factory;
        members = [manager, member1, member2, member3, member4, member5, member6];
        membersNotJoin = [member7, member8];
        notMembers = member9;
        sbt = await SBTContract.deploy('Test SBT Token', 'SBT');
        so = await SocialOracleContract.deploy('DAOU Social Oracle');
        members.forEach((member, index) => {
            members_addr.push(member.address);
        });
        membersNotJoin.forEach((member, index) => {
            membersNotJoin_addr.push(member.address);
        });
    });

    it('Should return the name', async function() {
        expect(await so.name()).to.equal('DAOU Social Oracle')
    });

    it('Should register a new Dao', async function() {
        const daoInfo = {
            name: "testDAO",
            manager: manager.address,
            members: members_addr,
            numberThreshold: 4,
            requiredScore: 0,
            randomMemberNumber: 2,
        }
        await so.connect(manager).register(dao.address, daoInfo);
    });

    it('Should return Dao info', async function() {
        const daoInfo = await so.getDaoInfo(dao.address);
        expect(daoInfo.name).to.equal("testDAO");
        expect(daoInfo.manager).to.equal(manager.address);
    });

    it('Should manager can successfully add members', async function() {
        await so.connect(manager).addMembers(dao.address, membersNotJoin_addr);
        const daoInfo = await so.getDaoInfo(dao.address);
        expect(daoInfo.members[daoInfo.members.length - 1]).to.equal(membersNotJoin_addr[1]);
        expect(daoInfo.members[daoInfo.members.length - 2]).to.equal(membersNotJoin_addr[0]);
    });

    it('Manager should be able to start a social oracle', async function() {
        expect(await so.getStarted(dao.address)).to.equal(false);
        await so.connect(manager).start(dao.address);
        expect(await so.getStarted(dao.address)).to.equal(true);
    });

    it('Manager or Some members have a good scores or randomly choosed members', async function() {
       const rightSocialData = {
           scores: [13,2,4,10,5,0,1],
           urls: [
                'https://ipfs.io/manager',
                'https://ipfs.io/member1',
                'https://ipfs.io/member2',
                'https://ipfs.io/member3',
                'https://ipfs.io/member4',
                'https://ipfs.io/member5',
                'https://ipfs.io/member6',
            ],
            names: [
                "manager",
                "member1",
                "member2",
                "member3",
                "member4",
                "member5",
                "member6"
            ],
            participants: members_addr
       };

       const wrongSocialData = {
            scores: [13,100,4,10,5,0,1],
            urls: [
             'https://ipfs.io/manager',
             'https://ipfs.io/member1',
             'https://ipfs.io/member2',
             'https://ipfs.io/member3',
             'https://ipfs.io/member4',
             'https://ipfs.io/member5',
             'https://ipfs.io/member6',
            ],
            names: [
                "manager",
                "member1",
                "member2",
                "member3",
                "member4",
                "member5",
                "member6"
            ],
            participants: members_addr
        };
        
        await so.connect(manager).submit(dao.address, rightSocialData);
        await so.connect(member1).submit(dao.address, rightSocialData);
        await so.connect(member2).submit(dao.address, rightSocialData);
        await so.connect(member3).submit(dao.address, wrongSocialData);
    });

    it('Manger should be able to end a social oracle', async function() {
        expect(await so.getStarted(dao.address)).to.equal(true);
        await so.connect(manager).end(dao.address, sbt.address);
        expect(await so.getStarted(dao.address)).to.equal(false);
    });
});