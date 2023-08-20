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
  Option
} from "@material-tailwind/react";

import { BsBackspace } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Create = () => {
  return (
    <div className="mx-auto container mt-32">
      <Navbar />
      <Card className="font-poppins">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-8 p-6 flex justify-between items-center"
        >
          <Typography variant="h5" color="white">
            Create License
          </Typography>
          <Link to="/license">
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
        <CardBody className="px-3 pt-0 pb-5">
          <Card color="transparent" className="w-full" shadow={false}>
            <form className="mb-2">
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
                <div>
                  <Select label="Software Name">
                    <Option>Autodesk AutoCAD LT</Option>
                    <Option>Microsoft Project</Option>
                    <Option>3D SketchUp</Option>
                    <Option>Pvsyst</Option>
                    <Option>PDF X-Change</Option>
                  </Select>
                </div>
                <div className="col-span-2">
                  <Input type="text" size="md" label="Software Detail" />
                </div>
                <div>
                  <Input type="text" size="md" label="Unit Price" />
                </div>
                <div className="col-span-2">
                  <Input type="text" size="md" label="Vender" />
                </div>
                <div className="col-span-2">
                  <Input type="text" size="md" label="Key Activate" />
                </div>
                <div className="col-span-2">
                  <Input type="text" size="md" label="Name" />
                </div>
                <div className="col-span-2">
                  <Input type="text" size="md" label="Contact" />
                </div>
                <div className="col-span-2">
                  <Input type="text" size="md" label="Company" />
                </div>
                <div>
                  <Input type="text" size="md" label="PR Number" />
                </div>
                <div>
                  <Input type="text" size="md" label="PR Number2" />
                </div>
                <div>
                  <Input type="date" size="md" label="Start Date" />
                </div>
                <div>
                  <Input type="date" size="md" label="Expire Date" />
                </div>
                <div>
                  <Input type="text" size="md" label="Serial No.2" />
                </div>
                <div>
                  <Input type="text" size="md" label="Material3" />
                </div>
                <div className="col-span-4">
                  <Input type="text" size="md" label="Contract" />
                </div>
              </div>
              <Button className="mt-6" color="green" fullWidth>
                Creact License
              </Button>
            </form>
          </Card>
        </CardBody>
      </Card>
    </div>
  );
};

export default Create;
