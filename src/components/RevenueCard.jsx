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
        borderColor: "#3182ce",
        backgroundColor: "rgba(49, 130, 206, 0.2)",
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
    <Box p={6} borderWidth="2px" borderRadius="md" boxShadow="md" bg="white">
      <VStack align="start" spacing={3}>
        <Text fontSize="2xl" fontWeight="semibold" color="gray.700">Total Revenue</Text>
        <Text fontSize="3xl" fontWeight="bold" color="gray.900">$15,231.89</Text>
        <Text color="green.400" fontSize="md">+20.1% from last month</Text>
        <Box width="100%" height="250px">
          <Line data={data} options={options} />
        </Box>
      </VStack>
    </Box>
  );
};

export default RevenueCard;