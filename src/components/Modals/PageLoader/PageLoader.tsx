import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

interface IPageLoaderProps {
  loadingText: string;
  isOpen: boolean;
}

const PageLoader: React.FC<IPageLoaderProps> = ({ loadingText, isOpen }) => {
  return (
    <Backdrop
      open={isOpen}
      className="flex flex-col gap-1 items-center justify-center z-40"
    >
      <Box className="relative">
        <CircularProgress className="border-2 z-50" />
      </Box>
      <p className="text-white font-semibold">{loadingText}</p>
    </Backdrop>
  );
};

export default PageLoader;
