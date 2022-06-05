import content from "../data";
import { useState } from "react";
import { distance } from "./distance";
export const CalcNearest = (user) => {
  const [dist, setdist] = useState([]);
  if (user) {
    content.forEach((item) => {
      console.log(item);
      setdist([
        ...dist,
        distance(
          user.location.latitude,
          item.location.latitude,
          user.location.longitude,
          item.location.longitude
        ).toString(),
      ]);
    });
  }
  console.log(dist);
};
