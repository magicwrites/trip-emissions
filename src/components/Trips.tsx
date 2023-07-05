import { SimpleGrid } from "@chakra-ui/react";
import type { TTrip } from "../domain/types";
import { Trip } from "./Trip";

export const Trips = ({ trips }: { trips: Array<TTrip> }) => (
  <SimpleGrid
    spacing={{ base: 4, sm: 8, md: 12, lg: 16 }}
    columns={{ base: 1, md: 2, xl: 3 }}
  >
    {trips.map((trip) => (
      <Trip key={trip.id} {...trip} />
    ))}
  </SimpleGrid>
);
