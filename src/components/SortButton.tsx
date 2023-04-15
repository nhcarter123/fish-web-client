import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Box, Typography } from "@mui/material";

type SortButtonProps = {
  sort: number;
  onClick: () => void;
  title: string;
  live?: boolean;
};

export const SortButton = ({
  title,
  sort,
  onClick,
  live,
}: SortButtonProps): JSX.Element => {
  let sortIcon = <></>;
  if (sort === 1) {
    sortIcon = <ExpandLessIcon />;
  } else if (sort === -1) {
    sortIcon = <ExpandMoreIcon />;
  }

  return (
    <Box
      onClick={onClick}
      display={"flex"}
      color={"white"}
      minWidth={"100px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        background: "#3e3e3e",
        borderRadius: "4px",
        padding: "0 8px",
        userSelect: "none",
        "&:hover": {
          cursor: "pointer",
          background: "#4e4e4e",
        },
      }}
    >
      {live && (
        <Box
          className={"pulsing"}
          sx={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "rgba(255,50,50,1)",
            boxShadow:
              "inset 0px 0px 10px 2px rgba(255,100,100,0.5), 0px 0px 10px 1px rgba(255,100,100,0.9);",
          }}
        />
      )}
      <Typography>{title}</Typography>
      {sortIcon}
    </Box>
  );
};

export default SortButton;
