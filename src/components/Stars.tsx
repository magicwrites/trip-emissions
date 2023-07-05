import { Box, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

// a flaw: component renders a bit of an overlay for the yellow stars which is a result
// of gray component being present underneath it - could be improved with some more math

export const Stars = ({ rating = 0 }: { rating: number }) => (
  <Box position="relative">
    <Flex gap={1}>
      <StarIcon display="block" color="gray.400" />
      <StarIcon display="block" color="gray.400" />
      <StarIcon display="block" color="gray.400" />
      <StarIcon display="block" color="gray.400" />
      <StarIcon display="block" color="gray.400" />
    </Flex>

    <Flex gap={1} position="absolute" top="0">
      {Array.from(Array(Math.ceil(rating)))
        .reverse()
        .map((_x, i) => (
          <Box key={i}>
            <Box width={`${(rating - i) * 100}%`} overflow="hidden">
              <StarIcon display="block" color="yellow.400" />
            </Box>
          </Box>
        ))}
    </Flex>
  </Box>
);
