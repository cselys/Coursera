import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',      
      type: 'hireMe',      
      comment: '',
    },
    onSubmit: (values) => {submit("",values)},
    validationSchema: Yup.object({
      firstName: Yup.string().min(2,'Must be 2 characters or more').max(15, 'Must be 15 characters or less').required("Required"),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  useEffect(() => {
    if (response && response.type === 'success') {
      onOpen(response.type,response.message);
    }else if (response && response.type === 'error'){
      onOpen(response.type,response.message);
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
        
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName" 
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div style={{color:'red'}}>{formik.errors.firstName}</div>
                  ) : null}

              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                      <div style={{color:'red'}}>{formik.errors.email}</div>
                    ) : null}              
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type"
                  onChange={formik.handleChange}
                  value={formik.values.type} {...formik.getFieldProps('type')}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                {formik.touched.type && formik.errors.type ? (
                      <div style={{color:'red'}}>{formik.errors.type}</div>
                    ) : null}
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                {formik.touched.comment && formik.errors.comment ? (
                      <div style={{color:'red'}}>{formik.errors.comment}</div>
                    ) : null}
              </FormControl>
              <Button type="submit" disabled={isLoading} colorScheme="purple" width="full">
                {isLoading ? 'Submitting...' : 'Submit'}  
              </Button>
            </VStack>
            
          </form>

        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
