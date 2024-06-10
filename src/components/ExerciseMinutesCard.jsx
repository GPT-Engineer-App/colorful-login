import { Box, Text, VStack } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ExerciseMinutesCard = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Exercise Minutes",
        data: [200, 250, 300, 350, 400, 450, 500],
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
        <Text fontSize="lg" fontWeight="bold">Exercise Minutes</Text>
        <Text>Your exercise minutes are ahead of where you normally are.</Text>
        <Line data={data} options={options} />
      </VStack>
    </Box>
  );
};

export default ExerciseMinutesCard;