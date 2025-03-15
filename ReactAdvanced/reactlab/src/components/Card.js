import { Heading, HStack, Image, Text, VStack, CardBody,Stack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (

    <>
      <Image src={imageSrc} alt="avatar" borderRadius='lg'/>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{title}</Heading>
        <Text>
          {description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Stack>
    </>

  );
};

export default Card;
