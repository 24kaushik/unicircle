import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => setProfileData(data))
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);
  return (
    <div>
      <h1 className="text-center font-dm-serif my-10 text-6xl text-gray-800">
        Welcome {profileData?.name}!
      </h1>
      <div className="m-10 flex flex-wrap justify-center">
        <div className="m-10 flex flex-wrap justify-center">
          {profileData?.products?.map((product) => (
            <MyCard
              key={product._id}
              id={product._id}
              name={product.name}
              desc={product.description}
              img={product.image}
              price={product.price}
              cat={product.category}
              seller={product.seller.name}
              sold={product.sold}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MyCard = ({ name, id, desc, img, price, cat, seller,sold }) => {
  const handleSold = () => {
    fetch(`http://localhost:3000/product/toggleSell/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json()).then((data) => {window.location.reload()})
      .catch((error) => console.error("Error fetching profile data:", error));
  };
  return (
    <div>
      <Card
        className="max-w-sm m-4"
        renderImage={() => (
          <img
            className="aspect-[3/2] rounded mx-auto"
            src={`http://localhost:3000/${img?.replace("public\\", "")}`}
            alt="image 1"
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name} {sold && <span className="text-green-500">Sold</span>}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <div>
          <span className="text-sm font-medium text-gray-500 dark:text-white">
            Category: {cat}
          </span>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-800 dark:text-white">
            Sold by: {seller}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            Rs. {price}
          </span>
          <Button onClick={handleSold}>Toggle Sold</Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
