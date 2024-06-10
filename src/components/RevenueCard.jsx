import { Box, Text, VStack } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RevenueCard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 14000, 17000, 16000, 19000, 20000, 21000, 22000, 23000, 24000, 25000],
        borderColor: "#2D3748",
        backgroundColor: "rgba(45, 55, 72, 0.2)",
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
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="sm" bg="white">
      <VStack align="start" spacing={4}>
        <Text fontSize="lg" fontWeight="semibold" color="gray.700">Total Revenue</Text>
        <Text fontSize="2xl" fontWeight="bold" color="gray.900">$15,231.89</Text>
        <Text color="green.400" fontSize="sm">+20.1% from last month</Text>
        <Box width="100%" height="250px">
          <Line data={data} options={options} />
        </Box>
      </VStack>
    </Box>
  );
};

export default RevenueCard;