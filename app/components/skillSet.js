import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { FaChartLine, FaUserGraduate, FaBriefcase } from "react-icons/fa";
import UpdateModal from "./UpdateModal";

import Image from "next/image";
import htmlIcon from "@/public/images/html-icon.png";
import Navbar from "@/app/components/Navbar";
import QuestionAnalysis from "./QuestionAnalysis";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const colorClasses = {
  blue: "bg-blue-100 bg-blue-500",
  orange: "bg-orange-100 bg-orange-500",
  red: "bg-red-100 bg-red-500",
  green: "bg-green-100 bg-green-500",
};

const textColorClasses = {
  blue: "text-blue-500",
  orange: "text-orange-500",
  red: "text-red-500",
  green: "text-green-500",
};

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("skilltest");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md border pr-2">
          <ul className="space-y-0">
            <li>
              <button
                onClick={() => setSelectedTab("dashboard")}
                className="flex items-center w-full text-left text-lg mb-4 mt-4 text-stone-500 font-bold py-4 px-6 rounded-r-full hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100 focus:text-blue-600"
              >
                <FaChartLine className="mr-3" /> Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedTab("skilltest")}
                className="flex items-center w-full text-left text-lg mb-4 text-stone-500 font-bold py-4 px-6 rounded-r-full hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100 focus:text-blue-600"
              >
                <FaUserGraduate className="mr-3" /> Skill Test
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedTab("internship")}
                className="flex items-center w-full text-left text-lg mb-4 text-stone-500 font-bold py-4 px-6 rounded-r-full hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100 focus:text-blue-600"
              >
                <FaBriefcase className="mr-3" /> Internship
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {selectedTab === "skilltest" && (
            <div className="bg-white p-6 rounded-lg md:flex gap-10">
              <div>
                <div>
                  <h1 className="text-lg font-normal mb-4">Skill Test</h1>
                </div>
                <div className="p-8 rounded-lg flex justify-between items-center gap-6 mb-6 border">
                  <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                    <Image
                      src={htmlIcon}
                      alt="HTML Icon"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <h2 className="text-xl font-bold">
                      Hyper Text Markup Language
                    </h2>
                    <p className="text-xl text-gray-500 font-semibold">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June
                      2021
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-900 text-white font-bold px-10 py-4 rounded-lg"
                  >
                    Update
                  </button>
                  <UpdateModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
                </div>
                {/* Quick Stats */}
                <div className="border rounded-lg p-4">
                  <h2 className="text-xl font-bold">Quick Statistics</h2>
                  <div className="grid grid-cols-3 divide-x gap-4 mb-6 ">
                    <div className="flex justify-center items-center">
                      <span className="text-2xl p-4 rounded-full bg-stone-100 border-2  bg-opacity-75 border-opacity-25">
                        🏆
                      </span>
                      <div className="bg-white p-4">
                        <p className="text-xl font-bold">1</p>
                        <p className="text-gray-400 font-semibold">YOUR RANK</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="text-2xl p-4 rounded-full bg-stone-100 border-2 bg-opacity-75 border-opacity-25">
                        📝
                      </span>
                      <div className="bg-white p-4">
                        <p className="text-xl font-bold">30%</p>
                        <p className="text-gray-400 font-semibold">
                          PERCENTILE
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="text-2xl p-4 rounded-full bg-stone-100 border-2 bg-opacity-75 border-opacity-25">
                        ✅
                      </span>
                      <div className="bg-white p-4">
                        <p className="text-xl font-bold">10 / 15</p>
                        <p className="text-gray-400 font-semibold">
                          CORRECT ANSWERS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Graph */}
                <div className="mt-6 bg-white p-6 rounded-lg border w-full max-w-4xl mx-auto">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="font-bold mb-2 text-xl">
                        Comparison Graph
                      </h2>
                      <p className="text-gray-700 text-lg">
                        <span className="font-bold">
                          You scored 30% percentile
                        </span>
                        , which is lower than the
                      </p>
                      <p className="text-gray-700 text-lg">
                        average percentile 72% of all the engineers who took
                        this assessment.
                      </p>
                    </div>
                    <div className="text-2xl rounded-full p-4 bg-stone-100">
                      📈
                    </div>

                    {/* Chart Icon */}
                  </div>

                  {/* Chart */}
                  <div className="mt-4 h-64">
                    <Line
                      data={{
                        labels: Array.from({ length: 101 }, (_, i) => i), // X-axis (0-100)
                        datasets: [
                          {
                            label: "Density Distribution",
                            data: [
                              1, 2, 5, 8, 12, 18, 25, 30, 40, 50, 55, 70, 90,
                              95, 93, 85, 75, 65, 50, 40, 30, 20, 15, 10, 6, 3,
                              2, 1,
                            ],
                            borderColor: "#4F46E5",
                            backgroundColor: "rgba(79, 70, 229, 0.2)",
                            fill: false,
                            tension: 0.4,
                            pointRadius: 3,
                            pointHoverRadius: 5,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            grid: { display: false },
                            ticks: {
                              callback: function (value) {
                                if ([0, 25, 50, 75, 100].includes(value)) {
                                  return value;
                                }
                                return null; // Hide intermediate labels
                              },
                            },
                          },
                          y: {
                            grid: { display: false },
                            ticks: { display: false },
                          },
                        },
                        plugins: {
                          annotation: {
                            annotations: {
                              line1: {
                                type: "line",
                                scaleID: "x",
                                value: 90, // User percentile
                                borderColor: "gray",
                                borderWidth: 2,
                                borderDash: [5, 5],
                              },
                              textLabel: {
                                type: "label",
                                xValue: 90,
                                yValue: 5,
                                content: ["your percentile"],
                                color: "gray",
                                font: { size: 12, weight: "bold" },
                              },
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="py-11 flex flex-col flex-grow sm:max-w-lg w-full mx-auto">
                {/* Skill Progress */}
                <div className="mb-6 flex flex-col p-8 border rounded-lg">
                  <h2 className="text-lg font-bold mb-8">
                    Syllabus Wise Analysis
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "HTML Tools, Forms, History",
                        percentage: "80%",
                        color: "blue",
                        width: "80%",
                      },
                      {
                        title: "Tags & References in HTML",
                        percentage: "60%",
                        color: "orange",
                        width: "60%",
                      },
                      {
                        title: "Tables & References in HTML",
                        percentage: "24%",
                        color: "red",
                        width: "24%",
                      },
                      {
                        title: "Tables & CSS Basics",
                        percentage: "96%",
                        color: "green",
                        width: "96%",
                      },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex flex-col justify-between text-lg mb-6 font-regular">
                          <p>{item.title}</p>
                        </div>
                        <div className="flex gap-4 items-center justify-between">
                          <div
                            className={`w-full ${
                              colorClasses[item.color].split(" ")[0]
                            } rounded-full h-2`}
                          >
                            <div
                              className={`${
                                colorClasses[item.color].split(" ")[1]
                              } h-2 rounded-full`}
                              style={{ width: item.width }}
                            ></div>
                          </div>
                          <p
                            className={`${
                              textColorClasses[item.color]
                            } font-bold`}
                          >
                            {item.percentage}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <QuestionAnalysis />
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
