import { Grid } from "./Grid";
import type { TTrip } from "./../domain/types";
import { Trip } from "./Trip";

export const Trips = ({ trips }: { trips: Array<TTrip> }) => (
  <Grid>
    {trips.map((trip) => (
      <Trip key={trip.id} {...trip} />
    ))}
  </Grid>
);
