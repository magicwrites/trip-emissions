import { useEffect, useState } from "react";
import { ChakraProvider, extendTheme, Container } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import type { TTrip } from "./domain/types";
import { Trips } from "./components/Trips";
import { TripSkeletons } from "./components/TripSkeletons";

import "@fontsource/nunito/latin.css";

const getTrips = async (): Promise<Array<TTrip>> => {
  const response = await fetch("/api/trips");

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("could not load trips");
  }
};

const App = () => {
  // perhaps controversial usage of null as indirect "isLoading" status holder,
  // for larger scale react projects I would rely on redux toolkit for this kind of state management
  // but for this scale of an exercise - I believe this will do just fine

  const [trips, setTrips] = useState<Array<TTrip> | null>(null);
  const isLoading = trips === null;

  useEffect(() => {
    getTrips()
      .then(setTrips)
      .catch(() => console.warn("api seems unavailable - todo: render error"));
  }, []);

  const theme = extendTheme({
    fonts: {
      body: `'Nunito', sans-serif`,
    },
    styles: {
      global: (props: any) => ({
        body: {
          bg: mode("gray.100", "gray.600")(props),
        },
      }),
    },
  });

  // todo: consider using ChakraBaseProvider and extendBaseTheme

  return (
    <ChakraProvider theme={theme}>
      <Container padding={{ base: 4, sm: 8 }} maxWidth={{ lg: 1200 }}>
        {isLoading ? <TripSkeletons /> : <Trips trips={trips} />}
      </Container>
    </ChakraProvider>
  );
};

export default App;
