import { Box, Button, Container, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      bgGradient="linear(to-r, #6E66CC, #4A3FBF, #4138A8)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxW="sm"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="lg">Login</Heading>
          <Text fontSize="lg">Welcome back! 😊</Text>
          <Stack spacing={4} width="100%">
            <Input placeholder="Username or Email" />
            <Input placeholder="Password" type="password" />
            <Button colorScheme="blue" width="100%" onClick={handleLogin}>Login</Button>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Login;