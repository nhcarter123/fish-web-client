import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ShopCard from "./ShopCard";
import { ShopItemType } from "../../config/config";

type ShopCategoryHeaderProps = {
  title: string;
  items: ShopItemType[];
  selectedIndex: number;
  purchasedItems: number[];
};

const ShopCategoryHeader = ({
  title,
  items,
  selectedIndex,
  purchasedItems,
}: ShopCategoryHeaderProps) => {
  return (
    <Box>
      {/*Tab title*/}
      <Box
        px={1}
        sx={{
          background: "#39342e",
          borderRadius: "8px 8px 0 0",
          color: "#f7ebdb",
          width: "80px",
          fontWeight: "bold",
          textAlign: "center",
          border: "2px solid",
          borderBottom: 0,
          borderColor: "#000",
        }}
      >
        <Typography variant={"body2"} fontFamily={"Monospace"}>
          {title}
        </Typography>
      </Box>

      <Box
        p={2}
        mb={2}
        sx={{
          // background: "#000",
          border: "2px solid",
          borderColor: "#000",
          color: "#fff",
          borderRadius: "0px 4px 4px 4px",
          backgroundColor: "#694e3c",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/dark-wood.png")',
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.4) 0px 3px 6px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          // justifyContent={"center"}
        >
          {items.map((type, index) => (
            <ShopCard
              type={type}
              key={index}
              selected={selectedIndex === type}
              owned={purchasedItems.includes(type)}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ShopCategoryHeader;
