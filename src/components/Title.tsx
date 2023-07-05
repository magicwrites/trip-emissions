import { Box, Text } from "@chakra-ui/react";

export const Title = ({
  name,
  countries,
  days,
}: {
  name: string;
  countries: number;
  days: number;
}) => (
  <Box color="white" textAlign="center" fontWeight={600}>
    <Text>{name}</Text>
    <Text fontSize={10}>
      {countries} countries, {days} days
    </Text>
  </Box>
);
