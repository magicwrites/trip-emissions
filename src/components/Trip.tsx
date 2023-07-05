import { Image, Box } from "@chakra-ui/react";
import { Rating } from "./Rating";
import { Emissions } from "./Emissions";
import { Title } from "./Title";
import type { TTrip } from "../domain/types";

export const Trip = (trip: TTrip) => (
  <Box rounded={16} borderWidth={8} borderColor="white" boxShadow="md">
    <Box rounded={8} paddingX={8} overflow="hidden" position="relative">
      <Image
        objectFit="cover"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-1}
        filter="auto"
        brightness="66%"
        src={`${trip.image}?w=360`}
        userSelect="none"
        pointerEvents="none"
      />

      <Box marginTop={16}>
        <Title name={trip.name} countries={trip.countries} days={trip.days} />
      </Box>

      <Box marginY={2}>
        <Emissions emissions={trip.emissions} />
      </Box>

      <Box marginTop={6}>
        <Rating rating={trip.rating} />
      </Box>
    </Box>
  </Box>
);
