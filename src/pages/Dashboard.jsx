import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import AutodeskImg from "../assets/autodesk.png";

import { BsBackspace } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  return (
    <div className="mx-auto container mt-32">
      <Navbar />
      <div className="grid grid-cols-4">

      </div>
    </div>
  );
};

export default Dashboard;
