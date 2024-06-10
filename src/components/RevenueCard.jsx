import { Box, Text, VStack } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RevenueCard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 14000, 17000, 16000, 19000, 20000],
        borderColor: "#2a69ac",
        backgroundColor: "rgba(42, 105, 172, 0.2)",
        fill: true,
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
        <Text fontSize="lg" fontWeight="bold">Total Revenue</Text>
        <Text fontSize="2xl" fontWeight="bold">$15,231.89</Text>
        <Text color="green.500">+20.1% from last month</Text>
        <Line data={data} options={options} />
      </VStack>
    </Box>
  );
};

export default RevenueCard;