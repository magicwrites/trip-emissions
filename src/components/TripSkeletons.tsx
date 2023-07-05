import { TripSkeleton } from "./TripSkeleton";
import { Grid } from "./Grid";

export const TripSkeletons = () => (
  <Grid>
    {Array.from(Array(3)).map((_x, i) => (
      <TripSkeleton key={i} />
    ))}
  </Grid>
);
