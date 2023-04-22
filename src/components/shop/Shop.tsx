import { Box, Typography } from "@mui/material";
import React from "react";
import ShopCategoryHeader from "./ShopCategoryHeader";
import { useQuery } from "@apollo/client";
import { GET_PLAYER } from "../../graphql/definitions/queries";
import { useParams } from "react-router-dom";
import { ShopItemType } from "../../config/config";

const rods: ShopItemType[] = [
  ShopItemType.WoodRod,
  ShopItemType.BambooRod,
  ShopItemType.FiberglassRod,
  ShopItemType.Spear,
  ShopItemType.Net,
  ShopItemType.Trap,
];
const lures: ShopItemType[] = [
  ShopItemType.Rusty,
  ShopItemType.Steel,
  ShopItemType.Double,
  ShopItemType.Barbed,
  ShopItemType.SnapSwivel,
  ShopItemType.Unknown1,
  ShopItemType.Unknown2,
];
const bait: ShopItemType[] = [
  ShopItemType.None,
  ShopItemType.Sardines,
  ShopItemType.Worm,
  ShopItemType.Caterpillar,
  ShopItemType.Crab,
  ShopItemType.Shrimp,
  ShopItemType.Ammonite,
];
const lines: ShopItemType[] = [
  ShopItemType.Braided,
  ShopItemType.Coated,
  ShopItemType.Line3,
  // ShopItemType.Line4,
  // ShopItemType.Line5,
  // ShopItemType.Line6,
  // ShopItemType.Line7,
  // ShopItemType.Line8,
];

const Shop = () => {
  const { username } = useParams();
  const title = "Shop";
  const { data, loading, subscribeToMore } = useQuery(GET_PLAYER, {
    variables: {
      username,
    },
  });

  const selectedRod =
    data?.getPlayer?.rod !== undefined ? data.getPlayer.rod : -1;
  const selectedLure =
    data?.getPlayer?.lure !== undefined ? data.getPlayer.lure : -1;
  const selectedLine =
    data?.getPlayer?.line !== undefined ? data.getPlayer.line : -1;
  const selectedBait =
    data?.getPlayer?.bait !== undefined ? data.getPlayer.bait : -1;
  const purchasedItems = data?.getPlayer?.purchasedItems || [];

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
            mx={2}
            sx={{
              width: "100%",
              maxWidth: "1100px",
            }}
          >
            <Box p={2}>
              Buyer beware! Prices and effects are subject to change.
            </Box>
            <ShopCategoryHeader
              title={"Rods"}
              items={rods}
              selectedIndex={selectedRod}
              purchasedItems={purchasedItems}
            />
            <ShopCategoryHeader
              title={"Lures"}
              items={lures}
              selectedIndex={selectedLure}
              purchasedItems={purchasedItems}
            />
            <ShopCategoryHeader
              title={"Bait"}
              items={bait}
              selectedIndex={selectedBait}
              purchasedItems={purchasedItems}
              notImplementedBanner
            />
            <ShopCategoryHeader
              title={"Lines"}
              items={lines}
              selectedIndex={selectedLine}
              purchasedItems={purchasedItems}
              notImplementedBanner
            />
            {/*{rods.map((item, index) => (*/}
            {/*  <ShopCard item={item} key={index} />*/}
            {/*))}*/}
            {/*<ShopCategoryHeader title={"Lures"} />*/}
            {/*<ShopCategoryHeader title={"Bait"} />*/}
            {/*{bait.map((item, index) => (*/}
            {/*  <ShopCard item={item} key={index} />*/}
            {/*))}*/}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Shop;
