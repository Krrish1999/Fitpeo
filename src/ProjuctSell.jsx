import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchBar from "./SearchBar";



function ProductSell() {
  const products = [
    {
      name: "Abastract 3D",
      stock: 10,
      image:
        "https://www.wallpaperflare.com/static/800/977/125/abstract-low-poly-blue-white-wallpaper.jpg",
      price: 20,
      totalSales: 200,
    },
    {
      name: "Sarphens illustration",
      image: "https://images8.alphacoders.com/388/388492.jpg",
      stock: 15,
      price: 25,
      totalSales: 375,
    },
    {
      name: "Product 3",
      image:
        " https://th.bing.com/th/id/OIP.8XAKxhuaOeQosaHWpfUbbQHaEK?pid=ImgDet&rs=1",
      stock: 8,
      price: 30,
      totalSales: 240,
    },
    // Add more product data as needed
  ];

  return (
    <>
   
    <div className="  bg-white p-4 rounded-lg  mt-4 shadow-md">
    <div className="flex justify-between">
      <h2 className="font-bold">Product Sell </h2>
      <p className="text-gray-400 flex"><SearchBar/> Last 30 days <KeyboardArrowDownIcon/> </p>
     
      </div>
      <div className=" w-full mt-2 ">
        <table className="min-full border rounded-lg overflow-hidden" >
          <thead className="bg-white text-gray-400">
            <tr>
              <th className="w-2/5 text-start pl-2">Product Name</th>
              <th className="w-1/10 py-2  text-end ">Stock</th>
              <th className="w-1/10 py-2  text-end">Price</th>
              <th className="w-1/10 py-2  text-center">Total Sales</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products.map((product, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="w-1/4 text-start  pl-2 flex text-sm font-sans font-semibold  ">
                  {" "}
                  <img src={product.image} className="w-15 h-15 rounded-lg mr-2" />
                  {product.name}
                </td>
                <td className="w-1/10 text-end">{product.stock} in stock</td>
                <td className="w-1/10 text-end font-bold ">${product.price}</td>
                <td className="w-1/10 text-center ">{product.totalSales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default ProductSell;
