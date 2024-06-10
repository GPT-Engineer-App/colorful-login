import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaDollarSign, FaUsers, FaCreditCard, FaChartLine } from "react-icons/fa";

const StatCard = ({ title, value, change, icon }) => (
  <Box p={6} borderWidth="2px" borderRadius="md" boxShadow="md" bg="white">
    <VStack align="start" spacing={3}>
      <Text fontSize="2xl" fontWeight="semibold" color="gray.700">{title}</Text>
      <Text fontSize="3xl" fontWeight="bold" color="gray.900">{value}</Text>
      <Text color="gray.500" fontSize="md">{change}</Text>
      <Box as={icon} size="24px" color="gray.500" />
    </VStack>
  </Box>
);

const TestPage = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
        <StatCard 
          title="Total Revenue" 
          value="$45,231.89" 
          change="+20.1% from last month" 
          icon={FaDollarSign} 
        />
        <StatCard 
          title="Subscriptions" 
          value="+2350" 
          change="+180.1% from last month" 
          icon={FaUsers} 
        />
        <StatCard 
          title="Sales" 
          value="+12,234" 
          change="+19% from last month" 
          icon={FaCreditCard} 
        />
        <StatCard 
          title="Active Now" 
          value="+573" 
          change="+201 since last hour" 
          icon={FaChartLine} 
        />
      </SimpleGrid>
    </Container>
  );
};

export default TestPage;