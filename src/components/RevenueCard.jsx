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
    <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <VStack align="start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold">Total Revenue</Text>
        <Text fontSize="3xl" fontWeight="bold">$25,000.00</Text>
        <Text color="green.500" fontSize="md">+25.0% from last month</Text>
        <Box width="100%" height="300px">
          <Line data={data} options={options} />
        </Box>
      </VStack>
    </Box>
  );
};

export default RevenueCard;