import { Image, Box, Flex, Text } from "@chakra-ui/react";
import type { TTrip } from "../domain/types";
import { Stars } from "./Stars";

export const Trip = (trip: TTrip) => (
  <Box rounded={16} borderWidth={8} borderColor="white" boxShadow="md">
    <Box rounded={8} overflow="hidden" position="relative">
      <Image
        objectFit="cover"
        position="absolute"
        width="100%"
        height="100%"
        zIndex={-1}
        filter="auto"
        brightness="66%"
        src={`${trip.image}?w=360`}
        userSelect="none"
        pointerEvents="none"
      />

      <Box marginTop={16} color="white" textAlign="center" fontWeight={600}>
        <Text>{trip.name}</Text>
        <Text fontSize={10}>
          {trip.countries} countries, {trip.days} days
        </Text>
      </Box>

      <Box margin={2} marginX={8}>
        <Box rounded={8} padding={3} bg="gray.700" color="white">
          <Flex justifyContent="space-between" fontSize={12} fontWeight={600}>
            <Text>Emissions offset:</Text>
            <Text>
              {trip.emissions} kg CO<sub>2</sub>e
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box
        roundedTop={8}
        marginX={8}
        marginTop={6}
        padding={3}
        paddingX={6}
        bg="white"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize={12} fontWeight={600}>
            Trip rating:
          </Text>
          <Stars rating={trip.rating} />
          <Text fontWeight={700}>{trip.rating}</Text>
        </Flex>
      </Box>
    </Box>
  </Box>
);
