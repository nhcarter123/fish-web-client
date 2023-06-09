import ImageList from "@mui/material/ImageList";
import FishCard from "./FishCard";
import React from "react";
import { Skeleton, TableSortLabel } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { Fish } from "../config/config";

type GalleryProps = {
  fishes: Fish[];
};

const skeletonDataPC = new Array(24).fill(1);
const skeletonDataMobile = new Array(8).fill(1);

const Gallery = ({ fishes }: GalleryProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  let cols = 6;
  let maxHeight = "64vh";

  if (isMobile) {
    // width = 300;
    cols = 3;
    maxHeight = "65vh";
  }

  const skeletonData = isMobile ? skeletonDataMobile : skeletonDataPC;

  return (
    <ImageList
      sx={{
        // maxWidth: 1000,
        // overflowY: "hidden",
        // height: fishes.length === 0 ? maxHeight : "auto",
        // maxHeight,
        // margin: "16px 24px",
        paddingLeft: "24px",
        paddingRight: "24px",
        marginBottom: "80px",
      }}
      cols={cols}
      rowHeight={120}
      gap={isMobile ? 8 : 16}
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
