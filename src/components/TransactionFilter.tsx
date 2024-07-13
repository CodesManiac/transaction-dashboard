import React, { useState } from "react";
import { allTransactions } from "../data";

const TransactionFilter = () => {
  const tabs = ["All", "Withdrawals", "Deposits", "Payments"];

  const [activeTab, setActiveTab] = useState("All");

  const filteredTransactions = allTransactions?.filter((transaction) => {
    if (activeTab === "All") return true;
    return transaction.type === activeTab;
  });

  return (
    <div className="bg-white rounded-lg mb-4">
      <div className="flex justify-between items-center border-b border-[#e0e0e0] px-8 pt-5 mb-4">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-bold leading-[18px] ${
                activeTab === tab
                  ? "text-orange border-b-2 border-orange"
                  : "text-gray"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center px-6 py-3">
        <input
          type="text"
          placeholder="Search"
          className="border border-[#dedede] p-1 rounded-lg"
        />
        <div className="flex items-center space-x-3 text-xs text-ash">
          <p className="font-medium">Display</p>
          <select className="border border-[#e1e1e1] py-1 px-3 rounded-lg">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <p>Rows</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilter;
