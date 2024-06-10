import { Box, Text, VStack } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SubscriptionsCard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Subscriptions",
        data: [200, 300, 250, 400, 350, 450, 500],
        backgroundColor: "#2a69ac",
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
    <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="sm">
      <VStack align="start">
        <Text fontSize="lg" fontWeight="bold">Subscriptions</Text>
        <Text fontSize="2xl" fontWeight="bold">+2350</Text>
        <Text color="green.500">+180.1% from last month</Text>
        <Bar data={data} options={options} />
      </VStack>
    </Box>
  );
};

export default SubscriptionsCard;