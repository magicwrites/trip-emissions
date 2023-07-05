import type { TTrip } from "./../domain/types";

export const getTrips = async (): Promise<Array<TTrip>> => {
  const response = await fetch("/api/trips");

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("could not load trips");
  }
};
