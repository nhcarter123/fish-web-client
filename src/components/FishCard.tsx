import React, { useContext } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { getFishPathFromType, getRarityColor } from "../helpers/fish";

import MaleImage from "../images/male.png";
import FemaleImage from "../images/female.png";
import CoinImage from "../images/coin.png";
import {
  Fish,
  fishConfigMap,
  FishGender,
  fishTypeNameMap,
  getSizeTagByFish,
  rarityNameMap,
} from "../config/config";
import { SnackbarContext, SnackbarSeverity } from "./SnackbarProvider";

type FishCardProps = {
  fish: Fish;
};

export const round2Decimal = (num: number, decimalPlaces = 1): number => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
};

const FishCard = ({ fish }: FishCardProps): JSX.Element => {
  const [tooltipIsOpen, setTooltipIsOpen] = React.useState(false);
  const { openSnackbar } = useContext(SnackbarContext);

  const path = getFishPathFromType(fish.type);
  const rarity = fishConfigMap[fish.type].rarity;
  const rarityColor = getRarityColor(rarity);
  const fishType = fishTypeNameMap[fish.type];
  const rarityName = rarityNameMap[rarity];
  const roundedFloat = round2Decimal(fish.float, 10);
  const weightFloat = round2Decimal(fish.weight, 10);
  const fishValue = fish.value.toLocaleString();
  const fishSizeTag = getSizeTagByFish(fish).trim();

  const tooltip = (
    <>
      <Typography color="inherit">{`Float: ${roundedFloat}`}</Typography>
      <Typography color="inherit">{`Weight: ${weightFloat}`}</Typography>
      <Typography color="inherit">{`Type: ${fishType}`}</Typography>
      <Typography color="inherit">{`Rarity: ${rarityName}`}</Typography>
      <Typography color="inherit">{`Username: ${fish.username}`}</Typography>
      <Typography color="inherit">{`Gender: ${fish.gender}`}</Typography>
      {fish.isShiny && (
        <Typography color="inherit">{`Shiny: ${fish.isShiny}`}</Typography>
      )}
    </>
  );

  const handleClick = () => {
    void navigator.clipboard.writeText(fish._id);
    openSnackbar("Copied fish ID to clipboard", SnackbarSeverity.Success);
  };

  return (
    <Tooltip
      title={tooltip}
      disableInteractive={true}
      open={tooltipIsOpen}
      onOpen={() => setTooltipIsOpen(true)}
      onClose={() => setTooltipIsOpen(false)}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: "#545454",
            border: "2px solid",
            borderColor: "#1f1f1f",
          },
        },
      }}
    >
      <Box onClick={() => handleClick()}>
        <Box
          onClick={() => setTooltipIsOpen(!tooltipIsOpen)}
          display={"flex"}
          sx={{
            backgroundImage:
              "linear-gradient(to bottom right, #DECBA4, #3E5151);",
            border: "2px solid #1b1b1b",
            "&:hover": {
              border: "2px solid",
              borderColor: "#e0e0e0",
            },
            borderRadius: "8px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.4) 0px 3px 6px;",
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

            <Box
              sx={{ padding: "4px", position: "relative" }}
              // className={"wiggle"}
            >
              <img
                src={`${window.location.origin}/assets/images/fish/${path}.png`}
                alt="logo"
                style={{
                  imageRendering: "pixelated",
                  width: "100%",
                  aspectRatio: "1/1",
                  display: "block",
                  filter: "drop-shadow(3px 3px 3px rgba(0,0,0,0.5))",
                }}
              />
            </Box>
            {/*<img*/}
            {/*  src={fish.gender === FishGender.Male ? MaleImage : FemaleImage}*/}
            {/*  style={{*/}
            {/*    position: "absolute",*/}
            {/*    right: 4,*/}
            {/*    top: 4,*/}
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
                pointerEvents: "none",
              }}
            >
              <img src={CoinImage} alt="coin" width={"20px"} height={"20px"} />
              <Typography ml={0.5} color={"#fff"}>
                {fishValue}
              </Typography>
            </Box>
            {fishSizeTag.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  top: "2px",
                  right: "2px",
                  background: "#444240",
                  padding: "2px 4px",
                  pointerEvents: "none",
                  borderRadius: "4px",
                  border: "2px solid",
                  borderColor: "#1e1e1e",
                }}
              >
                <Typography
                  color={"#ffffff"}
                  sx={{
                    fontSize: "0.8rem",
                    lineHeight: "0.8rem",
                    // fontWeight: "bold",
                  }}
                >
                  {fishSizeTag}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {/*<Typography>{fish.type}</Typography>*/}
    </Tooltip>
  );
};

export default FishCard;
