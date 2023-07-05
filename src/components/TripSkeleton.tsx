import { Box, Skeleton, Flex } from "@chakra-ui/react";

export const TripSkeleton = () => (
  <Box
    rounded={16}
    borderWidth={8}
    borderColor="white"
    boxShadow="md"
    height={241}
    position="relative"
  >
    <Skeleton
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={-1}
    />

    <Flex
      flexDirection="column"
      justifyContent="flex-end"
      height="100%"
      paddingX={8}
    >
      <Box rounded={8} padding={3} bg="gray.700" marginY={6} height="42px" />

      <Box roundedTop={8} padding={3} paddingX={6} bg="white" height="48px" />
    </Flex>
  </Box>
);
