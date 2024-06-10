import { Box, Text, VStack } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SubscriptionsCard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Subscriptions",
        data: [200, 300, 250, 400, 350, 450, 500, 550, 600, 650, 700, 750],
        backgroundColor: "#2B6CB0",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="sm" bg="white">
      <VStack align="start" spacing={4}>
        <Text fontSize="lg" fontWeight="semibold" color="gray.700">Subscriptions</Text>
        <Text fontSize="2xl" fontWeight="bold" color="blue.600">+2350</Text>
        <Text color="blue.500" fontSize="md">+180.1% from last month</Text>
        <Box w="100%" h="250px">
          <Bar data={data} options={options} />
        </Box>
      </VStack>
    </Box>
  );
};

export default SubscriptionsCard;