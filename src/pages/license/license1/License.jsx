import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineFolderView,
} from "react-icons/ai";
const TABLE_HEAD = ["Name", "Job", "Employed", "Action"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

const License = () => {
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
              Expire License
            </Typography>
            <Link to="/create">
              <Button
                color="green"
                variant="gradient"
                className="flex items-center justify-center w-[8rem]"
              >
                <AiOutlinePlusCircle className="text-xl mr-1" /> Add
              </Button>
            </Link>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-3 pt-0 pb-2">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70 text-center"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, job, date }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name} className=" text-center">
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className="">
                        <Typography
                          as="a"
                          href="#"
                          className="font-medium text-white space-x-2"
                        >
                          <Link to="/view">
                            <IconButton color="orange">
                              <AiOutlineFolderView />
                            </IconButton>
                          </Link>
                          <Link to="/update">
                            <IconButton color="blue">
                              <AiOutlineEdit />
                            </IconButton>
                          </Link>
                          <IconButton
                            color="red"
                            onClick={() => confirm("Delete ?")}
                          >
                            <AiOutlineDelete />
                          </IconButton>
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default License;
