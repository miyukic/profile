import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
//import { Image } from "@chakra-ui/image";
//import MoonButtonIcon from "../images/brand/moon.svg";
import { FaGithub } from "react-icons/fa"
import { IconContext } from 'react-icons'

export const Header = () => {
    return (
        <Box
        bg={"blue.100"}
        opacity="0.9"
        color="#000000"
        display="Flex"
        height={20}
        fontSize={4}
        justifyContent="center"
        alignItems="center"
    >
   <Text fontSize={44} fontFamily="Roboto" fontWeight="bold">
     Mp
     <Text as="span" color="#ECC94B">
       .
     </Text>
     2021
   </Text>
   <Divider w={96} borderColor="#ECC94B" opacity="1" ml={14} />
   <Grid templateColumns="repeat(3, 1fr)" gap={6} ml={14} mr={14}>
     <Text
       fontSize="3xl"
       fontFamily="Rajdhani"
       transition="all .0.2s"
       _hover={{ textDecoration: "underline 1px" }}
     >
       About
     </Text>
     <Text
       fontSize="3xl"
       fontFamily="Rajdhani"
       _hover={{ textDecoration: "underline 1px" }}
     >
       Works
     </Text>
     <Text
       fontSize="3xl"
       fontFamily="Rajdhani"
       _hover={{ textDecoration: "underline 1px" }}
     >
       Contact
     </Text>
   </Grid>
   <Divider
     h={14}
     orientation="vertical"
     borderColor="ffffff"
     opacity="1"
     mr={14}
   />
       { /*<Image src={MoonButtonIcon.src}></Image> */}
       <Box>
           <IconContext.Provider value={{ size: '50px' }}>
               <FaGithub></FaGithub>
           </IconContext.Provider>
       </Box>
        </Box>
    );
};

export default Header;