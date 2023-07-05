import { Box, Flex, Text } from "@chakra-ui/react";
import { Stars } from "./Stars";

export const Rating = ({ rating }: { rating: number }) => (
  <Box roundedTop={8} padding={3} paddingX={6} bg="white">
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize={12} fontWeight={600}>
        Trip rating:
      </Text>
      <Stars rating={rating} />
      <Text fontWeight={700}>{rating}</Text>
    </Flex>
  </Box>
);
