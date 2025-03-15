import React from "react";
import { Avatar, Heading, Box, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
<h1>test</h1>


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* <Box color="white" maxWidth="128x" margin="0 auto"> */}
       <VStack
          spacing={4}
         
        > 
 
        <Avatar borderRadius='full'boxSize='150px' src="https://i.pravatar.cc/150?img=7" alt="avatar" />
        {/* <Box> */}
          <Heading size="l">{greeting}</Heading>
        {/* </Box> */}
          <Heading size="xl">{bio1}</Heading>
          <Heading size="xl">{bio2}</Heading>
    </VStack> 
    {/* </Box> */}
  </FullScreenSection>
);

export default LandingSection;
