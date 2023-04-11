import { useQuery } from "@apollo/client";
import { GET_FISH } from "../graphql/definitions/queries";
import { Box, Button, TableSortLabel, Typography } from "@mui/material";
import Gallery from "./Gallery";
import React from "react";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import SortButton from "./SortButton";
import { useMediaQuery } from "react-responsive";

export enum SortType {
  Created,
  Rarity,
  Value,
  Float,
}
const Main = () => {
  const { username } = useParams();
  const [page, setPage] = React.useState(1);
  const [createdSort, setCreatedSort] = React.useState(-1);
  const [raritySort, setRaritySort] = React.useState(0);
  const [valueSort, setValueSort] = React.useState(0);
  const [floatSort, setFloatSort] = React.useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const { data, loading } = useQuery(GET_FISH, {
    variables: {
      username,
      page,
      pageSize: isMobile ? 8 : 24,
      createdSort,
      raritySort,
      valueSort,
      floatSort,
    },
  });

  const setSort = (
    createdSort: number,
    rarity: number,
    float: number,
    value: number
  ) => {
    setCreatedSort(createdSort);
    setRaritySort(rarity);
    setFloatSort(float);
    setValueSort(value);
  };

  const handleRaritySort = (type: SortType) => {
    switch (type) {
      case SortType.Created:
        if (createdSort === 0) {
          setSort(1, 0, 0, 0);
        } else if (createdSort === 1) {
          setSort(-1, 0, 0, 0);
        } else {
          setSort(0, 0, 0, 0);
        }
        break;
      case SortType.Rarity:
        if (raritySort === 0) {
          setSort(0, 1, 0, 0);
        } else if (raritySort === 1) {
          setSort(0, -1, 0, 0);
        } else {
          setSort(0, 0, 0, 0);
        }
        break;
      case SortType.Value:
        if (valueSort === 0) {
          setSort(0, 0, 0, 1);
        } else if (valueSort === 1) {
          setSort(0, 0, 0, -1);
        } else {
          setSort(0, 0, 0, 0);
        }
        break;
      case SortType.Float:
        if (floatSort === 0) {
          setSort(0, 0, 1, 0);
        } else if (floatSort === 1) {
          setSort(0, 0, -1, 0);
        } else {
          setSort(0, 0, 0, 0);
        }
        break;
    }
  };

  const fish = data?.getFish || [];

  let title = "Global fish";
  if (username) {
    title = `${username}'s fish`;
  }

  return (
    <Box mt={4} width={"100%"} display={"flex"} justifyContent={"center"}>
      <Box width={"100%"} maxWidth={"900px"}>
        <Typography color={"#fff"} variant={"h4"} textAlign={"center"} mb={3}>
          {title}
        </Typography>

        <Box display={"flex"} mx={3}>
          <SortButton
            title={"Created"}
            onClick={() => handleRaritySort(SortType.Created)}
            sort={createdSort}
          />
          <SortButton
            title={"Rarity"}
            onClick={() => handleRaritySort(SortType.Rarity)}
            sort={raritySort}
          />
          <SortButton
            title={"Value"}
            onClick={() => handleRaritySort(SortType.Value)}
            sort={valueSort}
          />
          <SortButton
            title={"Float"}
            onClick={() => handleRaritySort(SortType.Float)}
            sort={floatSort}
          />
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

        <Gallery fishes={fish} />
        <Box display={"flex"} justifyContent={"center"}>
          <Pagination
            count={10}
            color="primary"
            sx={{
              "& .MuiPaginationItem-text": {
                color: "#fff",
              },
            }}
            onChange={(e, value) => setPage(value)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
