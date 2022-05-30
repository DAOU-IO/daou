import {Flex, Box, Text, Select, Spacer } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { dashboardType } from "../pages/dashboard";

interface DashboardStateProps {
    dashboardState: dashboardType;
    setDashboardState: (dashboardState: dashboardType) => void;
}

const DashboardHeader = ({dashboardState, setDashboardState}:DashboardStateProps) => {

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setDashboardState(event.currentTarget.value as dashboardType);
    };

    return(
        <Flex m="2vh"  >
            <Box >
                <Text fontSize='2xl' color="whiteAlpha.900" >Developer DAO(🧱,🚀)</Text>
            </Box>
            <Spacer />
            <Box  >
                <Select 
                    borderColor='whiteAlpha.300'
                    color='gray.300'
                    defaultValue={dashboardState}
                    onChange={(event) => onChange(event)}
                >
                    <option value="Dashboard">Dashboard</option>
                    <option value="Details">Details</option>
                    <option value="Graph">Social Graph</option>
                </Select>
            </Box>
        </Flex>
    );
};

export default DashboardHeader;