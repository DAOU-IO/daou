import { Box } from '@chakra-ui/layout';
import { TwitterTimelineEmbed,TwitterTweetEmbed } from 'react-twitter-embed';
import { Text } from '@chakra-ui/layout';

const DaoTwitter = () => {
    return(
        <Box>
            <Box mx='1vh' mb='3px'>
                <Text fontSize='2xl' color='whiteAlpha.700' >Dao Member Twitter</Text>
            </Box>
            <Box ml='1vh' >
                <TwitterTimelineEmbed
                    id="1445411916474683394"
                    onLoad={function noRefCheck(){}}
                    options={{
                    height: 730,
                    id:"list:1445411916474683394"
                    }}
                    sourceType="list"
                    theme="dark"
                    noFooter
                    noHeader
                    noScrollbar
                />
            </Box>
        </Box>
        
    );
};

export default DaoTwitter;