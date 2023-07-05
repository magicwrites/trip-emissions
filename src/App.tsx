import { useEffect, useState } from "react";
import type { TTrip } from "./domain/types";
import "./App.css";

const getTrips = async (): Promise<Array<TTrip>> => {
  const response = await fetch("/api/trips");

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("could not load trips");
  }
};

const Trip = ({ name }: { name: string }) => (
  <div>
    <h2>{name}</h2>
  </div>
);

const Trips = ({ trips }: { trips: Array<TTrip> }) => (
  <>
    {trips.map((trip) => (
      <Trip key={trip.id} name={trip.name} />
    ))}
  </>
);

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

  return (
    <>
      <h1>Hello world</h1>
      {isLoading ? <TripSkeletons /> : <Trips trips={trips} />}
    </>
  );
};

export default App;
