import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CoinImage from "../../images/coin.png";
import { ShopItem, shopItemConfig, ShopItemType } from "../../config/config";

type ShopCardProps = {
  type: ShopItemType;
  selected: boolean;
  owned: boolean;
};

const ShopCard = ({ type, selected, owned }: ShopCardProps) => {
  const config = shopItemConfig[type];

  return (
    <Grid item xs={2} sm={2} md={2} mb={1}>
      <Box
        sx={{
          background: "#545d62",
          color: "#000000",
          borderRadius: "8px",
          height: "100%",
          // backgroundImage:
          //   "linear-gradient(to bottom right, rgb(222, 203, 164), rgb(62, 81, 81))",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.4) 0px 3px 6px",
          border: selected ? "4px dashed" : "4px solid",
          borderColor: selected ? "#cebaad" : "#1b1b1b",
        }}
      >
        <Box
          sx={{
            background: "#2a2a2a",
            borderRadius: "4px 4px 0 0",
          }}
        >
          <Typography variant={"body2"} color={"#dedede"} textAlign={"center"}>
            {config.name}
          </Typography>
        </Box>

        <Box px={1} pt={1}>
          <Box mb={1}>
            <img
              src={`${window.location.origin}/assets/images/shop/${config.path}.png`}
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

          <Box display={"flex"} justifyContent={"center"} mb={1} mt={2}>
            <Box
              px={1}
              sx={{
                borderRadius: "4px",
                width: "fit-content",
                textAlign: "center",
                background: "#2a2a2a",
              }}
            >
              <Typography color={"#eeeeee"} fontSize={"12px"}>
                !{owned || config.costPerCast ? "equip" : "buy"} {type}
              </Typography>
            </Box>
          </Box>

          <Box height={"1.6rem"}>
            {config.cost > 0 && (
              <Box display={"flex"} alignItems={"center"}>
                <img
                  src={CoinImage}
                  alt="coin"
                  width={"20px"}
                  height={"20px"}
                />
                <Typography
                  ml={0.5}
                  // color={"#ffedb4"}
                  color={"#fbd072"}
                  sx={{
                    textDecoration: owned ? "line-through" : "none",
                  }}
                >
                  {config.cost.toLocaleString()}
                </Typography>
                {config.costPerCast && (
                  <Typography ml={0.3} color={"#fbd072"}>
                    /cast
                  </Typography>
                )}
              </Box>
            )}
          </Box>

          <Box
            mt={1}
            p={1}
            sx={{
              background: "#2a2a2a",
              borderRadius: "4px",
            }}
          >
            {config.description.map((desc, index) => (
              <Box key={index}>
                <Typography
                  color={"#bebebe"}
                  fontSize={"12px"}
                  // fontWeight={"bold"}
                >
                  {desc}
                </Typography>
                {index < config.description.length - 1 && (
                  <Box my={0.5}>
                    <Divider color={"#8d8d8d"} />
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ShopCard;
