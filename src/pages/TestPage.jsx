import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaDollarSign, FaUsers, FaCreditCard, FaHeartbeat } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const TestPage = () => {
  const initialCards = [
    {
      id: "1",
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: FaDollarSign,
    },
    {
      id: "2",
      title: "Subscriptions",
      value: "+2350",
      change: "+180.1% from last month",
      icon: FaUsers,
    },
    {
      id: "3",
      title: "Sales",
      value: "+12,234",
      change: "+19% from last month",
      icon: FaCreditCard,
    },
    {
      id: "4",
      title: "Active Now",
      value: "+573",
      change: "+201 since last hour",
      icon: FaHeartbeat,
    },
  ];

  const [cards, setCards] = useState(initialCards);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCards(items);
  };

  return (
    <Box p={6}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="cards" direction="horizontal">
          {(provided) => (
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={6}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided) => (
                    <Box
                      p={6}
                      borderWidth="1px"
                      borderRadius="lg"
                      boxShadow="md"
                      bg="white"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </SimpleGrid>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default TestPage;