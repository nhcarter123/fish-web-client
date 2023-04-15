import { useQuery, useSubscription } from "@apollo/client";
import { GET_FISH, GET_TOP_CATCHES } from "../graphql/definitions/queries";
import { Box, Button, Grid, TableSortLabel, Typography } from "@mui/material";
import Gallery from "./Gallery";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import SortButton from "./SortButton";
import { useMediaQuery } from "react-responsive";
import {
  FISH_CAUGHT,
  LEADERBOARD_UPDATED,
} from "../graphql/definitions/subscriptions";
import { Fish } from "../types/fish";
import { getFishPathFromType, getRarityColor } from "../helpers/fish";

function getColor(input: string): string {
  const colors = [
    "#ff7676",
    "#ff2929",
    "#ffc48a",
    "#d9a252",
    "#ea7f1e",
    "#ffc93d",
    "#c45200",
    "#9eec4e",
    "#63e056",
    "#92e592",
    "#01d301",
    "#ade700",
    "#4f68ff",
    "#a548ff",
    "#c134e5",
    "#d77dd7",
    "#8484ff",
    "#8fb4b7",
    "#0061ff",
    "#1affff",
  ];
  const hash = input.split("").reduce((acc, char) => {
    acc = (acc << 5) - acc + char.charCodeAt(0);
    return acc & acc;
  }, 0);
  const index = Math.abs(hash % colors.length);
  return colors[index];
}

const Leaderboard = () => {
  const [topFish, setTopFish] = useState<Partial<Fish>[]>([]);

  const createFishList = (fishes: Partial<Fish>[]) => {
    const fishesCopy = [...fishes];
    const missingFish = 10 - fishesCopy.length;
    for (let i = 0; i < missingFish; i++) {
      fishesCopy.push({ _id: `${i}` });
    }

    setTopFish(fishesCopy);
  };

  const { loading: subLoading } = useSubscription(LEADERBOARD_UPDATED, {
    onData: ({ data }) => {
      createFishList(data.data?.leaderboardUpdated || []);
    },
  });

  const { loading, subscribeToMore } = useQuery(GET_TOP_CATCHES, {
    onCompleted: (data) => {
      createFishList(data?.getTopCatches || []);
    },
  });

  const title = "Today's best fish";

  // const subscribeToLeaderboard = () =>
  //   subscribeToMore({
  //     document: GET_TOP_CATCHES,
  //     updateQuery: (prev, { subscriptionData }) => {
  //       if (!subscriptionData.data) return prev;
  //       const newFish = subscriptionData.data.leaderboardUpdated;
  //
  //       const combined = [newFish, ...prev.getTopCatches];
  //
  //       return {
  //         ...prev,
  //         getTopCatches: createdSort === -1 ? combined : prev.getFish,
  //       };
  //     },
  //   });
  //
  // useEffect(() => {
  //   const unsubscribe = subscribeToLeaderboard();
  //   return () => unsubscribe();
  // }, [subscribeToLeaderboard]);

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      position={"relative"}
    >
      <Box width={"100%"}>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            background: "#262626",
            padding: "12px 0px",
            zIndex: 1,
          }}
        >
          <Typography color={"#fff"} variant={"h5"} textAlign={"center"}>
            {title}
          </Typography>
        </Box>

        <Box display={"flex"} justifyContent={"center"}>
          <Box
            mt={1}
            sx={{
              width: "100%",
              maxWidth: "700px",
            }}
          >
            {topFish.map((fish: Partial<Fish>, index: number) => (
              <Box
                mb={1}
                // px={1.5}
                mx={2}
                key={index}
                sx={{
                  borderRadius: "4px",
                  border: "2px solid",
                  borderColor: "#000000",
                  background: "#2a2a2a",
                  maxHeight: "44px",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "space-between",
                  color: "#222222",
                  fontSize: "1.25rem",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
                }}
              >
                {fish.rarity && (
                  <Box
                    mr={2}
                    sx={{
                      // opacity: 0.5,
                      height: "100%",
                      background: getRarityColor(fish.rarity),
                      width: "5px",
                      borderRadius: "2px 0 0 2px;",
                    }}
                  />
                )}
                {fish.type && (
                  <Box mr={2}>
                    <img
                      src={`${
                        window.location.origin
                      }/assets/images/fish/${getFishPathFromType(
                        fish.type
                      )}.png`}
                      alt="logo"
                      style={{
                        imageRendering: "pixelated",
                        // width: "100%",
                        aspectRatio: "1/1",
                        display: "block",
                        filter: "drop-shadow(3px 3px 3px rgba(0,0,0,0.5))",
                      }}
                    />
                  </Box>
                )}
                {fish.value && (
                  <Box
                    mr={2}
                    sx={{
                      color: "#dadada",
                    }}
                  >
                    ${fish.value.toLocaleString()}
                  </Box>
                )}
                {fish.username && (
                  <Box
                    sx={{
                      color: getColor(fish.username),
                    }}
                  >
                    {fish.username}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Leaderboard;
