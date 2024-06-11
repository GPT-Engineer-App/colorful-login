import { Box, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSupabaseAuth, SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

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
        <SupabaseAuthUI />
      </Container>
    </Box>
  );
};

export default Login;