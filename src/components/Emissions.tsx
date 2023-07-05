import { Box, Flex, Text } from "@chakra-ui/react";

export const Emissions = ({ emissions }: { emissions: number }) => (
  <Box rounded={8} padding={3} bg="gray.700" color="white">
    <Flex justifyContent="space-between" fontSize={12} fontWeight={600}>
      <Text>Emissions offset:</Text>
      <Text>
        {emissions} kg CO<sub>2</sub>e
      </Text>
    </Flex>
  </Box>
);
