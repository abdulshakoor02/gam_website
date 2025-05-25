import React from "react";
import Lottie from "lottie-react";
import Grid from "@mui/material/Grid";

const GifBackground = ({ data }) => {
  return (
    <Grid
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1, // To position the animation behind other elements
      }}
    >
      <Lottie
        animationData={data}
        loop={true}
        play={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </Grid>
  );
};

export default GifBackground;
