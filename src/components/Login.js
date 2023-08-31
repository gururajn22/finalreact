import { Box, Button, Input, Container, FormControl, FormLabel, Text } from '@chakra-ui/react';
import React, { useState,useRef } from 'react';
import { validData } from '../utils/Valid';

const Login = () => {
  const[signForm,setSignFrom]=useState(true);
 const[errorMsg,setErrorMsg]=useState(null);
  // const fullName=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
 
  const btnClick=()=>{
  const msg=validData(email.current.value,password.current.value);
  setErrorMsg(msg);
  }
   const togglebtn=()=>{
    setSignFrom(!signForm);
  }
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text d="flex" textAlign="center" fontSize="2xl">
         {signForm ? "Sign In" : "Sign Up"}
        </Text>
      </Box>
      <Box>
        <form onSubmit={(e)=>{
              e.preventDefault();
        }}> 
          {!signForm && <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input  type='text' placeholder='Full Name' size="lg"/>
          </FormControl>
}
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input   ref={email} type="email" placeholder="Email Address" size="lg" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input  ref={password} type="password" placeholder="Password" size="lg" />
          </FormControl>
          <Text color="red.500" mt={5} fontWeight="bold">{errorMsg}</Text>
          <Button mt={6} colorScheme="blue" size="lg" width="full" onClick={btnClick}>
         {signForm ? "Sign In" : "Sign Up"}
          </Button>
       <Text mt={4} textAlign="center" cursor="pointer" color="blue.400" onClick={togglebtn}>New? Sign Up Now</Text>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
