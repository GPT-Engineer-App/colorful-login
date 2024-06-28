import { Box, Button, Container, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../integrations/supabase/index.js";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      navigate("/dashboard");
    }
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
          {error && <Text color="red.500">{error}</Text>}
          <Stack spacing={4} width="100%">
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <Button bgGradient="linear(to-r, #6E66CC, #4A3FBF, #4138A8)" width="100%" onClick={handleLogin}>Login</Button>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Login;