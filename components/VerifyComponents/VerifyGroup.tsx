import { Box } from "@chakra-ui/react";
import VerifyCard from "./VerifyCard";

export interface VerifyCardProps {
    closed: boolean;
    sparks: number;
    startTime: string;
    endTime: string;
};

const VerifyGroup = () => {

    const data:VerifyCardProps[] = [
        {
            closed: true,
            sparks: 5,
            startTime: "2022-05-31 18:50:14",
            endTime: "2022-05-30 15:50:14",
        },
        {
            closed: false,
            sparks: 3,
            startTime: "2022-05-29 18:50:14",
            endTime: "2022-05-30 15:50:14",
        },
        {
            closed: false,
            sparks: -2,
            startTime: "2022-05-28 18:50:14",
            endTime: "2022-05-29 15:50:14",
        },
        {
            closed: true,
            sparks: 4,
            startTime: "2022-05-23 18:50:14",
            endTime: "2022-05-24 15:50:14",
        },
        {
            closed: false,
            sparks: 1,
            startTime: "2022-05-21 18:50:14",
            endTime: "2022-05-22 15:50:14",
        },
        {
            closed: true,
            sparks: 3,
            startTime: "2022-05-19 18:50:14",
            endTime: "2022-05-20 15:50:14",
        },
    ];

    return(
        <Box
            maxHeight='90vh'
            overflowY="auto"
            css={{
                '&::-webkit-scrollbar' : {
                    display: "none"
                }
            }}
        >
            <VerifyCard 
                    closed={data[0].closed} 
                    sparks={data[0].sparks} 
                    startTime={data[0].startTime} 
                    endTime={data[0].endTime} 
                />
            <VerifyCard 
                closed={data[1].closed} 
                sparks={data[1].sparks} 
                startTime={data[1].startTime} 
                endTime={data[1].endTime} 
            />
             <VerifyCard 
                closed={data[2].closed} 
                sparks={data[2].sparks} 
                startTime={data[2].startTime} 
                endTime={data[2].endTime} 
            />
             <VerifyCard 
                closed={data[3].closed} 
                sparks={data[3].sparks} 
                startTime={data[3].startTime} 
                endTime={data[3].endTime} 
            />
             <VerifyCard 
                closed={data[4].closed} 
                sparks={data[4].sparks} 
                startTime={data[4].startTime} 
                endTime={data[4].endTime} 
            />
             <VerifyCard 
                closed={data[5].closed} 
                sparks={data[5].sparks} 
                startTime={data[5].startTime} 
                endTime={data[5].endTime} 
            />
        </Box>
    );
};

export default VerifyGroup;