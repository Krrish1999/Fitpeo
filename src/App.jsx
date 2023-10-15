// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./Sidebar";
import HeaderSection from "./HeaderSection";
import Bar from "./BarChart";
import DonutChart from "./DonutChart";
import ProductSell from "./ProjuctSell";

function App() {
  return (
    <div className="bg-gray-100  ">
      <div className=" flex">
        <div>
          <Sidebar></Sidebar>
        </div>

        <div className="  p-4 flex-col">
          <HeaderSection />
          <div className="   mt-4">
            < div className="flex    justify-self-center" >
          
                <Bar /> <DonutChart />
           
            </div>
            <ProductSell />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
