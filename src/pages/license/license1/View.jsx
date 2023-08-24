import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Checkbox,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

import { BsBackspace } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
const View = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto container mt-14">
        <Card className="font-poppins">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-8 p-6 flex justify-between items-center"
          >
            <Typography variant="h5" color="white">
              View Detail
            </Typography>
            <Link to="/license1">
              <Button
                color="orange"
                variant="gradient"
                className="flex items-center justify-center w-[8rem]"
              >
                <BsBackspace className="text-xl mr-1" />
                Back
              </Button>
            </Link>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default View;
