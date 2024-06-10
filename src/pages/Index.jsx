import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Index = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Total Revenue",
        data: [12000, 15000, 13000, 17000, 19000, 22000, 25000],
        borderColor: "#2a69ac",
        backgroundColor: "rgba(42, 105, 172, 0.2)",
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Subscriptions",
        data: [300, 500, 400, 600, 700, 800, 750],
        backgroundColor: "#2a69ac",
      },
    ],
  };

  const exerciseData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Average",
        data: [200, 250, 300, 350],
        borderColor: "#2a69ac",
        backgroundColor: "rgba(42, 105, 172, 0.2)",
        fill: true,
      },
      {
        label: "Today",
        data: [220, 270, 320, 390],
        borderColor: "#000000",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        fill: true,
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
          <Box mt={4} h="150px">
            <Line data={lineData} />
          </Box>
        </Box>
        <Box w="48%" p={5} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={4}>Subscriptions</Heading>
          <Text fontSize="2xl" fontWeight="bold">+2350</Text>
          <Text color="gray.500">+180.1% from last month</Text>
          <Box mt={4} h="150px">
            <Bar data={barData} />
          </Box>
        </Box>
      </Flex>
      <Box p={5} borderWidth="1px" borderRadius="lg">
        <Heading size="md" mb={4}>Exercise Minutes</Heading>
        <Text>Your exercise minutes are ahead of where you normally are.</Text>
        <Box mt={4} h="200px">
          <Line data={exerciseData} />
        </Box>
      </Box>
    </Container>
  );
};

export default Index;