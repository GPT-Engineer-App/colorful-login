import { Container, SimpleGrid } from "@chakra-ui/react";
import RevenueCard from "../components/RevenueCard";
import SubscriptionsCard from "../components/SubscriptionsCard";
import ExerciseMinutesCard from "../components/ExerciseMinutesCard";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <RevenueCard />
        <SubscriptionsCard />
        <ExerciseMinutesCard />
      </SimpleGrid>
    </Container>
  );
};

export default Index;