import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Index = () => {
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 13000, 17000, 19000, 22000, 25000],
        borderColor: "#2a69ac",
        backgroundColor: "#2a69ac",
        fill: false,
      },
    ],
  };

  const subscriptionsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Subscriptions",
        data: [2000, 2300, 2100, 2500, 2700, 3000, 3200],
        backgroundColor: "#2a69ac",
      },
    ],
  };

  

  return (
    <Container maxW="container.xl" py={10}>
      <Flex justify="space-between" mb={10}>
        <Box w="48%" p={5} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={4}>Total Revenue</Heading>
          <Text fontSize="2xl" fontWeight="bold">$15,231.89</Text>
          <Text color="gray.500">+20.1% from last month</Text>
          <Line data={revenueData} />
        </Box>
        <Box w="48%" p={5} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={4}>Subscriptions</Heading>
          <Text fontSize="2xl" fontWeight="bold">+2350</Text>
          <Text color="gray.500">+180.1% from last month</Text>
          <Bar data={subscriptionsData} />
        </Box>
      </Flex>
      
    </Container>
  );
};

export default Index;