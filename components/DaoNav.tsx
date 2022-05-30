import { Center, Flex } from "@chakra-ui/layout";
import { daoNavType } from "../pages/dashboard";
import { Icon } from "@iconify/react";

interface DaoNavProps {
    daoNavState: daoNavType;
    setDaoNavState: (daoNavState: daoNavType) => void;
}

const DaoNav = ({daoNavState, setDaoNavState}:DaoNavProps)  => {

    const handleClick = (newNav: daoNavType) => {
        setDaoNavState(newNav);
    };

    return (
        <Flex w='100%' h="7vh" borderBottom="1px solid" borderColor="whiteAlpha.300"  >
            <ConditonCenter daoNavState={daoNavState} realState="info" iconType="akar-icons:info" handleClick={handleClick} />
            <ConditonCenter daoNavState={daoNavState} realState="people" iconType="charm:people" handleClick={handleClick}/>
            <ConditonCenter daoNavState={daoNavState} realState="twitter" iconType="logos:twitter" handleClick={handleClick}/>
            <ConditonCenter daoNavState={daoNavState} realState="onboard" iconType="fluent:task-list-ltr-20-filled"  handleClick={handleClick}/>
        </Flex>
    );
};

const ConditonCenter: React.ElementType = ({daoNavState, realState, iconType, handleClick}):JSX.Element => {
    return(
        <Center w='25%' borderBottom={daoNavState === realState ? "2px solid #fff" : ""}  >
            <button onClick={() => handleClick(realState)}  >
                <Icon icon={iconType} color="white" width='32px' height='32px'  />
            </button>
        </Center>
    );
}

export default DaoNav;