import { useEffect, useState } from "react";
import { ChakraProvider, extendTheme, Container } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { TTrip } from "./domain/types";
import "@fontsource/nunito/latin.css";
import { Trips } from "./components/Trips";

const getTrips = async (): Promise<Array<TTrip>> => {
  const response = await fetch("/api/trips");

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("could not load trips");
  }
};

const TripSkeletons = () => <div>Loading...</div>;

const App = () => {
  // perhaps controversial usage of null as indirect "isLoading" indicator
  // for larger scale projects in react I would rely on redux toolkit for this kind of state management
  // but for this scale of an exercise this will be better?

  const [trips, setTrips] = useState<Array<TTrip> | null>(null);
  const isLoading = trips === null;

  useEffect(() => {
    getTrips()
      .then(setTrips)
      .catch(() => console.warn("api seems unavailable - render error"));
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
