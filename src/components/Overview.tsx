import React from "react";
import { chartData, summary, widthdrawals } from "../data";
import {
  CartesianAxis,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Deposit,Withdrawal, Payment } from "../assets/icons";
const Overview = () => {
 
  return (
    <div
     className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between w-full mb-8"
     >
  
      <div className="bg-white shadow-sm rounded-lg p-4 w-full  lg:w-2/5">
        <div className="grid grid-cols-2 gap-5">
          {widthdrawals?.map((widthdrawal) => (
            <div
              className="bg-yellow  py-4 px-4 rounded-lg w-full"
              key={widthdrawal?.id}
            >
              <p className="text-xs text-gray font-bold">Withdrawals</p>
              <div className="mt-4">
                <p className="text-base font-bold text-orange">
                  {widthdrawal?.amount}
                </p>
                <p className="text-xs text-gray">{widthdrawal?.cases} Cases</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-lg bg-gray py-4 px-3 mt-4">
          <p className="text-white font-bold text-xs leading-[14.32px]">
            Total Amount
          </p>
          <p className="text-white text-base leading-[17px]">N3,402,300</p>
        </div>
      </div>
      <div className="bg-orange rounded-lg px-3 py-4 text-white w-full lg:w-1/4">
        {summary.map((summary) => (
          <div key={summary?.id} className="mb-4">
            <p className="text-white text-xs leading-[14.32px]">
              {summary?.title}
            </p>
            <p className="text-white text-base font-bold leading-[17px]">
              {summary?.amount}
            </p>
            <hr className="mt-3" />
          </div>
        ))}
      </div>
      <div className=" w-full lg:w-1/2 bg-white shadow-lg rounded-lg px-4 pt-4 pb-2">
        {" "}
        <p className="text-gray text-xs font-bold mb-5">Real-Time Update</p>
       
        <ResponsiveContainer width="100%" height={250}>
    <LineChart data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[25, 29]} />
      <Tooltip />
      <Line
        dot={false}
        type="monotone"
        dataKey="Withdrawal"
        stroke="#FFDB8B"
        strokeWidth={"3px"}
      />
      <Line dot={false} type="monotone" dataKey="Deposit" stroke="#FF6600" strokeWidth={"3px"} />
    </LineChart>
  </ResponsiveContainer>
         
          <div className="px-10 py-2 bg-[#f4f4f4] rounded-lg flex justify-center space-x-10">
<div className="flex gap-2">
  <img src={Withdrawal} alt="withdrawal"/>
  <p className="text-xs text-gray">Withdrawal</p>
</div>
<div className="flex gap-2">
<img src={Deposit} alt="deposit"/>
  <p className="text-xs text-gray">Deposit</p>
</div>
<div className="flex gap-2">
<img src={Payment} alt="payment"/>
  <p className="text-xs text-gray">Payment</p>
</div>


          </div>
      </div>
    </div>
  );
};

export default Overview;
