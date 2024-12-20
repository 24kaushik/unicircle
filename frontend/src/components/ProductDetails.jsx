import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [seller, setSeller] = useState({});
  const [college, setCollege] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(id);
        const response = await fetch(`http://localhost:3000/product/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
        setDescription(data.description);
        setSeller(data.seller);
        setCollege(data.college);
        setImage(data.image);
      } catch (error) {
        console.error("There was an error fetching the product data!", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="flex w-full my-10">
      <div className="w-1/2 ">
        <img
          src={`http://localhost:3000/${image?.replace("public\\", "")}`}
          alt="product"
          className="mx-auto max-h-80 "
        />
        <div className="px-10">
          <h1 className="font-bold text-3xl my-3">{name}</h1>
          <p className="font-bold text-xl my-3">Price: Rs {price}</p>
          <p className="text-xl text-gray-600">Category: {category}</p>
          <p className="text-xl text-gray-600">Description: {description}</p>
          <p className="text-xl text-gray-600">Seller: {seller.name}</p>
          <p className="text-xl text-gray-600">College: {college}</p>
        </div>
      </div>
      <div className="w-1/2">
        {" "}
        <div class="flex-1">
          <header class="bg-white p-4 text-gray-700">
            <h1 class="text-2xl font-semibold">Alice</h1>
          </header>

          <div class="h-[65vh] overflow-y-auto p-4 pb-36">
            <div class="flex mb-4 cursor-pointer">
              <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                <img
                  src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                  alt="User Avatar"
                  class="w-8 h-8 rounded-full"
                />
              </div>
              <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                <p class="text-gray-700">Hey Bob, how's it going?</p>
              </div>
            </div>

            <div class="flex justify-end mb-4 cursor-pointer">
              <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                <p>
                  Hi Alice! I'm good, just finished a great book. How about you?
                </p>
              </div>
              <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                <img
                  src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                  alt="My Avatar"
                  class="w-8 h-8 rounded-full"
                />
              </div>
            </div>

            <div class="flex mb-4 cursor-pointer">
              <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                <img
                  src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                  alt="User Avatar"
                  class="w-8 h-8 rounded-full"
                />
              </div>
              <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                <p class="text-gray-700">
                  That book sounds interesting! What's it about?
                </p>
              </div>
            </div>

            <div class="flex justify-end mb-4 cursor-pointer">
              <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                <p>
                  It's about an astronaut stranded on Mars, trying to survive.
                  Gripping stuff!
                </p>
              </div>
              <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                <img
                  src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                  alt="My Avatar"
                  class="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>

          <footer class="bg-white border-t border-gray-300 p-4 w-3/4">
            <div class="flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
                Send
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
