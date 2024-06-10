import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Flex justify="space-between" mb={10}>
        <Box w="48%" p={5} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={4}>Total Revenue</Heading>
          <Text fontSize="2xl" fontWeight="bold">$15,231.89</Text>
          <Text color="gray.500">+20.1% from last month</Text>
          <Box mt={4} h="150px" bg="blue.100" borderRadius="md"></Box>
        </Box>
        <Box w="48%" p={5} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={4}>Subscriptions</Heading>
          <Text fontSize="2xl" fontWeight="bold">+2350</Text>
          <Text color="gray.500">+180.1% from last month</Text>
          <Box mt={4} h="150px" bg="blue.100" borderRadius="md"></Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;