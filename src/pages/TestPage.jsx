import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaDollarSign, FaUsers, FaCreditCard, FaHeartbeat } from "react-icons/fa";

const TestPage = () => {
  const cards = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: FaDollarSign,
    },
    {
      title: "Subscriptions",
      value: "+2350",
      change: "+180.1% from last month",
      icon: FaUsers,
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19% from last month",
      icon: FaCreditCard,
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+201 since last hour",
      icon: FaHeartbeat,
    },
  ];

  return (
    <Box p={6}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {cards.map((card, index) => (
          <Box
            key={index}
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            bg="white"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <VStack align="start" spacing={3}>
              <Text fontSize="lg" fontWeight="semibold" color="gray.700">
                {card.title}
              </Text>
              <Text fontSize="3xl" fontWeight="bold" color="gray.900">
                {card.value}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {card.change}
              </Text>
            </VStack>
            <Box alignSelf="flex-end" color="gray.400">
              <card.icon size="24px" />
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TestPage;