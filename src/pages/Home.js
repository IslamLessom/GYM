import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../components/HeroBanner";
import  SearchExercises  from "../components/SearchExercises";
import { Excersices } from "../components/Excersices";
export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Excersices />
    </Box>
  );
};
