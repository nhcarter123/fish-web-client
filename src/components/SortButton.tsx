import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Box, Typography } from "@mui/material";

type SortButtonProps = {
  sort: number;
  onClick: () => void;
  title: string;
};

export const SortButton = ({
  title,
  sort,
  onClick,
}: SortButtonProps): JSX.Element => {
  let sortIcon = <></>;
  if (sort === 1) {
    sortIcon = <ExpandLessIcon />;
  } else if (sort === -1) {
    sortIcon = <ExpandMoreIcon />;
  }

  return (
    <Box onClick={onClick} display={"flex"} mr={3} color={"white"}>
      <Typography>{title}</Typography>
      {sortIcon}
    </Box>
  );
};

export default SortButton;
