import React from "react";
import { Box, ImageListItem, Tooltip, Typography } from "@mui/material";
import { Fish, FishGender } from "../types/fish";
import {
  fishTypeNameMap,
  getFishPathFromType,
  getRarityColor,
  rarityNameMap,
} from "../helpers/fish";

import MaleImage from "../images/male.png";
import FemaleImage from "../images/female.png";
import CoinImage from "../images/coin.png";
import { fishConfigMap } from "../config/config";

type FishCardProps = {
  fish: Fish;
};

export const round2Decimal = (num: number, decimalPlaces = 1): number => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
};

const FishCard = ({ fish }: FishCardProps): JSX.Element => {
  const path = getFishPathFromType(fish.type);
  const rarity = fishConfigMap[fish.type].rarity;
  const rarityColor = getRarityColor(rarity);
  const fishType = fishTypeNameMap[fish.type];
  const rarityName = rarityNameMap[rarity];
  const roundedFloat = round2Decimal(fish.float, 10);

  const tooltip = (
    <>
      <Typography color="inherit">{`Float: ${roundedFloat}`}</Typography>
      <Typography color="inherit">{`Type: ${fishType}`}</Typography>
      <Typography color="inherit">{`Rarity: ${rarityName}`}</Typography>
      <Typography color="inherit">{`Username: ${fish.username}`}</Typography>
      {/*<Typography color="inherit">{`Gender: ${fish.gender}`}</Typography>*/}
      {fish.isShiny && (
        <Typography color="inherit">{`Shiny: ${fish.isShiny}`}</Typography>
      )}
    </>
  );

  return (
    <Tooltip title={tooltip} disableInteractive={true}>
      <Box>
        <Box
          display={"flex"}
          sx={{
            backgroundImage: "linear-gradient(to right, #DECBA4, #3E5151);",
            border: "2px solid #1b1b1b",
            "&:hover": {
              border: "2px solid #ffe5e5",
            },
            borderRadius: "8px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
            // height: "100%",
          }}
        >
          <Box sx={{ position: "relative", width: "100%" }}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                background: rarityColor,
                width: "10px",
                borderRadius: "6px 0 0 6px;",
              }}
            />

            {fish.isShiny && (
              <Box
                className={"shiny"}
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
              />
            )}

            <Box sx={{ padding: "4px" }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/fish/${path}.png`}
                alt="logo"
                style={{
                  imageRendering: "pixelated",
                  width: "100%",
                  aspectRatio: "1/1",
                  display: "block",
                }}
              />
            </Box>
            {/*<img*/}
            {/*  src={fish.gender === FishGender.Male ? MaleImage : FemaleImage}*/}
            {/*  style={{*/}
            {/*    position: "absolute",*/}
            {/*    right: 4,*/}
            {/*    bottom: 4,*/}
            {/*    width: "16px",*/}
            {/*    paddingLeft: "10px",*/}
            {/*  }}*/}
            {/*/>*/}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                bottom: "0px",
                right: "0px",
                // background: "rgb(255,255,255)",
                padding: "2px 4px",
              }}
            >
              <img src={CoinImage} alt="coin" width={"20px"} height={"20px"} />
              <Typography ml={0.5} color={"#fff"}>
                {fish.value.toLocaleString()}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*<Typography>{fish.type}</Typography>*/}
    </Tooltip>
  );
};

export default FishCard;
