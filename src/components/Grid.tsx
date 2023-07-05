import { SimpleGrid } from "@chakra-ui/react";

export const Grid = ({ children }: { children: any }) => (
  <SimpleGrid
    spacing={{ base: 4, sm: 8, md: 12, lg: 16 }}
    columns={{ base: 1, md: 2, xl: 3 }}
  >
    {children}
  </SimpleGrid>
);
