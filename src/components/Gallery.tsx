import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useQuery } from "@apollo/client";
import { GET_FISH } from "../graphql/definitions/queries";
import FishCard from "./FishCard";
import { Fish } from "../types/fish";
import React from "react";
import { Skeleton, TableSortLabel } from "@mui/material";

type GalleryProps = {
  fishes: Fish[];
};

const skeletonData = new Array(24).fill(1);
const Gallery = ({ fishes }: GalleryProps) => {
  // fishes = [];

  return (
    <ImageList
      sx={{
        width: 850,
        // overflowY: "hidden",
        height: fishes.length === 0 ? "64vh" : "100%",
        maxHeight: "64vh",
      }}
      cols={6}
      rowHeight={120}
      gap={16}
    >
      {fishes.length === 0 &&
        skeletonData.map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            sx={{
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.11)",
              borderRadius: "8px",
            }}
          />
        ))}
      {fishes.map((fish) => (
        // <ImageListItem key={fish._id}>
        <FishCard fish={fish} key={fish._id} />
        // </ImageListItem>
        // <img src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format`} />
      ))}
    </ImageList>
  );
};
export default Gallery;
