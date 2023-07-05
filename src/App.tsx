import { useEffect, useState } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

import { getTrips } from "./domain/api";
import type { TTrip } from "./domain/types";
import { theme } from "./domain/theme";
import { Trips } from "./components/Trips";
import { TripSkeletons } from "./components/TripSkeletons";

import "@fontsource/nunito/latin.css";

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
