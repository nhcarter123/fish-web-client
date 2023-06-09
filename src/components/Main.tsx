import { useQuery, useSubscription } from "@apollo/client";
import { GET_FISH } from "../graphql/definitions/queries";
import { Box, Button, Grid, TableSortLabel, Typography } from "@mui/material";
import Gallery from "./Gallery";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import SortButton from "./SortButton";
import { useMediaQuery } from "react-responsive";
import { FISH_CAUGHT } from "../graphql/definitions/subscriptions";

export enum SortType {
  Created,
  Rarity,
  Value,
  Float,
  Weight,
}
const Main = () => {
  const { username } = useParams();
  const [page, setPage] = React.useState(1);
  const [createdSort, setCreatedSort] = React.useState(-1);
  const [raritySort, setRaritySort] = React.useState(0);
  const [valueSort, setValueSort] = React.useState(0);
  const [floatSort, setFloatSort] = React.useState(0);
  const [weightSort, setWeightSort] = React.useState(0);

  const { data: subData, loading: subLoading } = useSubscription(FISH_CAUGHT, {
    variables: {
      username,
    },
  });

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const { data, loading, subscribeToMore } = useQuery(GET_FISH, {
    variables: {
      username,
      page,
      pageSize: isMobile ? 12 : 24,
      createdSort,
      raritySort,
      valueSort,
      floatSort,
      weightSort,
    },
  });

  const setSort = (
    createdSort: number,
    raritySort: number,
    floatSort: number,
    valueSort: number,
    weightSort: number
  ) => {
    setCreatedSort(createdSort);
    setRaritySort(raritySort);
    setFloatSort(floatSort);
    setValueSort(valueSort);
    setWeightSort(weightSort);
  };

  const handleRaritySort = (type: SortType) => {
    setPage(1);

    switch (type) {
      case SortType.Created:
        if (createdSort === 0) {
          setSort(-1, 0, 0, 0, 0);
        } else if (createdSort === -1) {
          setSort(1, 0, 0, 0, 0);
        } else {
          setSort(0, 0, 0, 0, 0);
        }
        break;
      case SortType.Rarity:
        if (raritySort === 0) {
          setSort(0, -1, 0, 0, 0);
        } else if (raritySort === -1) {
          setSort(0, 1, 0, 0, 0);
        } else {
          setSort(0, 0, 0, 0, 0);
        }
        break;
      case SortType.Value:
        if (valueSort === 0) {
          setSort(0, 0, 0, -1, 0);
        } else if (valueSort === -1) {
          setSort(0, 0, 0, 1, 0);
        } else {
          setSort(0, 0, 0, 0, 0);
        }
        break;
      case SortType.Float:
        if (floatSort === 0) {
          setSort(0, 0, -1, 0, 0);
        } else if (floatSort === -1) {
          setSort(0, 0, 1, 0, 0);
        } else {
          setSort(0, 0, 0, 0, 0);
        }
        break;
      case SortType.Weight:
        if (weightSort === 0) {
          setSort(0, 0, 0, 0, -1);
        } else if (weightSort === -1) {
          setSort(0, 0, 0, 0, 1);
        } else {
          setSort(0, 0, 0, 0, 0);
        }
        break;
    }
  };

  const fish = data?.getFish || [];

  let title = "Global fish";
  if (username) {
    title = `${username}'s fish`;
  }

  const subscribeToCatches = (createdSort: number) =>
    subscribeToMore({
      document: FISH_CAUGHT,
      variables: {
        username,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newFish = subscriptionData.data.fishCaught;

        const combined = [newFish, ...prev.getFish];
        combined.pop();

        return {
          ...prev,
          getFish: createdSort === -1 ? combined : prev.getFish,
        };
      },
    });

  useEffect(() => {
    if (createdSort === -1) {
      const unsubscribe = subscribeToCatches(createdSort);

      return () => unsubscribe();
    }
  }, [createdSort, subscribeToCatches]);

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
          <Typography color={"#fff"} variant={"h5"} textAlign={"center"} mb={1}>
            {title}
          </Typography>

          <Box display={"flex"} justifyContent={"center"}>
            <Box mx={2}>
              <Grid
                container
                spacing={{ xs: 1, sm: 2, md: 2 }}
                columns={{ xs: 4, sm: 10, md: 10 }}
                justifyContent={"center"}
              >
                <Grid item xs={2} sm={2} md={2}>
                  <SortButton
                    title={"Created"}
                    onClick={() => handleRaritySort(SortType.Created)}
                    sort={createdSort}
                    live={createdSort === -1}
                  />
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                  <SortButton
                    title={"Rarity"}
                    onClick={() => handleRaritySort(SortType.Rarity)}
                    sort={raritySort}
                  />
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                  <SortButton
                    title={"Value"}
                    onClick={() => handleRaritySort(SortType.Value)}
                    sort={valueSort}
                  />
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                  <SortButton
                    title={"Float"}
                    onClick={() => handleRaritySort(SortType.Float)}
                    sort={floatSort}
                  />
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                  <SortButton
                    title={"Weight"}
                    onClick={() => handleRaritySort(SortType.Weight)}
                    sort={weightSort}
                  />
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                  {/*<SortButton*/}
                  {/*  title={"Weight"}*/}
                  {/*  onClick={() => handleRaritySort(SortType.Weight)}*/}
                  {/*  sort={floatSort}*/}
                  {/*/>*/}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        {/*<Button*/}
        {/*  variant="text"*/}
        {/*  onClick={() => handleRaritySort(SortType.Rarity)}*/}
        {/*>*/}
        {/*  Rarity*/}
        {/*</Button>*/}
        {/*<Button variant="text" onClick={() => handleRaritySort(SortType.Value)}>*/}
        {/*  Value*/}
        {/*</Button>*/}
        {/*<Button variant="text" onClick={() => handleRaritySort(SortType.Float)}>*/}
        {/*  Float*/}
        {/*</Button>*/}

        <Box display={"flex"} justifyContent={"center"}>
          <Box maxWidth={"900px"} width={"100%"}>
            <Gallery fishes={fish} />
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          // position={"absolute"}
          // sx={{
          //   width: "100%",
          //   bottom: "0px",
          // }}
        >
          <Pagination
            count={10}
            boundaryCount={0}
            color="primary"
            sx={{
              "& .MuiPaginationItem-text": {
                color: "#fff",
              },
              background: "#414141",
              position: "fixed",
              bottom: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
            onChange={(e, value) => setPage(value)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
