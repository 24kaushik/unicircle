import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  FileInput,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const Store = () => {
  return (
    <div>
      <h1 className="text-center font-dm-serif my-10 text-6xl text-gray-800">
        Welcome to Quantum University Store!
      </h1>
      <Outlet />
    </div>
  );
};

const Section1 = () => {
  // SELL
  return (
    <>
      <div className="flex w-4/5 bg-gray-200 mx-auto py-2 rounded-md my-10">
        <Link
          to="/store/sell"
          className="w-1/3 text-center bg-gray-50 py-1 mx-2 rounded-md"
        >
          Sell
        </Link>
        <Link
          to="/store/buy"
          className="w-1/3 text-center py-1 mx-2 rounded-md"
        >
          Buy
        </Link>
        <Link
          to="/store/rent"
          className="w-1/3 text-center py-1 mx-2 rounded-md"
        >
          Rent
        </Link>
      </div>

      <form className="flex mx-auto my-10 max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="itemName" value="Item Name" />
          </div>
          <TextInput
            id="itemName"
            type="text"
            placeholder="Item Name"
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Item Price (in rupees)" />
          </div>
          <TextInput id="price" type="number" placeholder="eg. 1000" required />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="description" value="Item Description" />
          </div>
          <Textarea
            id="description"
            placeholder="Enter a description for the item"
            required
            rows={4}
          />
        </div>

        <div id="fileUpload" className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Item Image" />
          </div>
          <FileInput
            id="file"
            helperText="Please upload an image of the item"
          />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="category" value="Item category" />
          </div>
          <Select id="category" required>
            <option>Electronics</option>
            <option>Books</option>
            <option>Furniture</option>
            <option>Stationary</option>
            <option>Others</option>
          </Select>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
const Section2 = () => {
  // BUY
  return (
    <>
      <div className="flex w-4/5 bg-gray-200 mx-auto py-2 rounded-md my-10">
        <Link
          to="/store/sell"
          className="w-1/3 text-center py-1 mx-2 rounded-md"
        >
          Sell
        </Link>
        <Link
          to="/store/buy"
          className="w-1/3 text-center py-1 bg-gray-50 mx-2 rounded-md"
        >
          Buy
        </Link>
        <Link
          to="/store/rent"
          className="w-1/3 text-center py-1 mx-2 rounded-md"
        >
          Rent
        </Link>
      </div>

      <div className="m-10 flex flex-wrap justify-center">
        <BuyCard />
        <BuyCard />
        <BuyCard />
        <BuyCard />
      </div>
    </>
  );
};
const Section3 = () => {
  // RENT
  return (
    <>
      <div className="flex w-4/5 bg-gray-200 mx-auto py-2 rounded-md my-10">
        <Link
          to="/store/sell"
          className="w-1/3 text-center py-1 mx-2 rounded-md"
        >
          Sell
        </Link>
        <Link
          to="/store/buy"
          className="w-1/3 text-center py-1 mx-2 rounded-md"
        >
          Buy
        </Link>
        <Link
          to="/store/rent"
          className="w-1/3 text-center py-1 mx-2 bg-gray-50 rounded-md"
        >
          Rent
        </Link>
      </div>
      <div className="m-10 flex flex-wrap justify-center">
        <RentCard />
        <RentCard />
        <RentCard />
        <RentCard />
      </div>
    </>
  );
};

const BuyCard = ({ name, desc, img, price, cat }) => {
  return (
    <div>
      <Card
        className="max-w-sm m-4"
        renderImage={() => (
          <img
            className="aspect-[3/2] rounded mx-auto"
            src="https://images.indianexpress.com/2021/10/Apple_iPhone13_Inside4.jpg"
            alt="image 1"
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Iphone 13 128gb
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          5 months old, in perfect condition. White color. Charging cable
          included.
        </p>
        <div>
          <span className="text-sm font-medium text-gray-500 dark:text-white">
            Category: Electronics
          </span>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-800 dark:text-white">
            Sold by: Kaushik Sarkar
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            Rs. 30000
          </span>
          <a
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            See More
          </a>
        </div>
      </Card>
    </div>
  );
};

const RentCard = ({ name, desc, img, price, cat }) => {
  return (
    <div>
      <Card
        className="max-w-sm m-4"
        renderImage={() => (
          <img
            className="aspect-[3/2] rounded mx-auto"
            src="https://images.indianexpress.com/2021/10/Apple_iPhone13_Inside4.jpg"
            alt="image 1"
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Iphone 13 128gb
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          5 months old, in perfect condition. White color. Charging cable
          included.
        </p>
        <div>
          <span className="text-sm font-medium text-gray-500 dark:text-white">
            Category: Electronics
          </span>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-800 dark:text-white">
            Owner: Kaushik Sarkar
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Rs. 30000/{"month"}
          </span>
          <a
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            See More
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Store;
export { Section1, Section2, Section3 };
