import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineFolderView,
} from "react-icons/ai";

const listLicense = [
  {
    id: 1,
    name: "License 1",
    linkto: "/license1",
  },
  {
    id: 2,
    name: "License 2",
    linkto: "/license2",
  },
  {
    id: 3,
    name: "License 3",
    linkto: "/license3",
  },
];

const LicenseList = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto container mt-14">
        <div className="flex flex-col justify-center items-center lg:flex-row gap-5">
          {listLicense.map((item, id) => (
            <>
              <Card className="mt-6 w-80 text-center" key={id}>
                <CardBody>
                  <Typography variant="h3" color="blue-gray" className="mb-2">
                    {item.name}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex justify-center">
                  <Link to={item.linkto}>
                    <Button color="blue" variant="gradient" className="flex justify-center items-center">
                      Read More <BsFillArrowRightCircleFill className="ml-3 text-lg"/>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default LicenseList;
