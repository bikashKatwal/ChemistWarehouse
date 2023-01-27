import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as ac } from "../redux/actions";

const Home = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{counter.counterValue}</p>
      <Button variant="contained" onClick={() => dispatch(ac.getIncrement())}>
        Increment
      </Button>

      <Button variant="contained" onClick={() => dispatch(ac.getDecrement())}>
        Decrement
      </Button>
    </div>
  );
};

export default Home;
