import { Box, Flex, Select, Spacer, Text} from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const SocialDataList = () => {

    const optionsdata: string[] = [
        "fifteen42.eth",
        "arden.eth",
        "julio.eth",
        "columbus.eth",
        "dustin.eth",
        "bettye.eth	"
    ];

    const [user, setUser] = useState(optionsdata[0]);

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setUser(event.currentTarget.value);
    };

    return(
        <Box>
            <Select 
                width="30vh"
                borderColor='whiteAlpha.300'
                color='gray.300'
                defaultValue={user}
                onChange={(event) => onChange(event)}
            >
                {optionsdata.map((data) => 
                    <option value={data}>{data}</option>
                )}
            </Select>
            <Box mt="1vh" >
                <Box my="1vh" >
                    <Text fontSize="1xl" color="whiteAlpha.900" fontWeight="bold" >Discord</Text>
                    <Text fontSize="1xl" color="whiteAlpha.900">messages Sended 10:  activities + 1 </Text>
                    <Text fontSize="1xl" color="whiteAlpha.900">voice Chat 1： Connections + 1 ,   activities + 2  </Text>
                </Box>
                <Box my="1vh" >
                    <Text fontSize="1xl" color="whiteAlpha.900" fontWeight="bold" >Forum</Text>
                    <Text fontSize="1xl" color="whiteAlpha.900">question 1: activities + 1,  Connections + 1</Text>
                </Box>
                <Box my="1vh" >
                    <Link href="https://github.com/Developer-DAO/DAO-job-board/commits?author=fifteen42" >
                        <Text fontSize="1xl" color="whiteAlpha.900" fontWeight="bold" >Github</Text>
                    </Link>
                    <Text fontSize="1xl" color="whiteAlpha.900">Commits 3: Contributions + 3 </Text>
                </Box>
                <Box my="1vh" >
                    <Text fontSize="1xl" color="whiteAlpha.900" fontWeight="bold" >Twitter</Text>
                    <Text fontSize="1xl" color="whiteAlpha.900">Twitter Spaces 1: activities + 1</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default SocialDataList;