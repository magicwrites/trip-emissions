import { SimpleGrid } from "@chakra-ui/react";
import { TripSkeleton } from "./TripSkeleton";

export const TripSkeletons = () => (
  <SimpleGrid
    spacing={{ base: 4, sm: 8, md: 12, lg: 16 }}
    columns={{ base: 1, md: 2, xl: 3 }}
  >
    {Array.from(Array(3)).map((_x, i) => (
      <TripSkeleton key={i} />
    ))}
  </SimpleGrid>
);
