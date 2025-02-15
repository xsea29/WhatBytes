"use client";

import React from "react";
import ProgressChart from "./ProgressChart";

const QuestionAnalysis = () => {
  const score = 12;
  const total = 15;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border sm:w-fit">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Question Analysis</h2>
        <p className="text-blue-600 font-bold text-right">
          {score}/{total}
        </p>
      </div>
      <p className="font-normal text-lg mt-2">
        <span className="font-bold">
          You scored{" "}
          <span className="text-black">{score} question correct</span> out of{" "}
          {total}
        </span>
        . However, it still needs some improvements.
      </p>

      <div className="flex justify-center items-center mt-4 mb-10">
        <ProgressChart score={score} total={total} />
      </div>
    </div>
  );
};

export default QuestionAnalysis;
