"use client";

import React, { useState } from "react";
import Image from "next/image";

const UpdateModal = ({ isOpen, onClose }) => {
  const [formValues, setFormValues] = useState({
    rank: "4",
    percentile: "30",
    score: "10",
  });

  const [errors, setErrors] = useState({
    rank: false,
    percentile: false,
    score: false,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSave = () => {
    let newErrors = {
      rank: formValues.rank.trim() === "",
      percentile: formValues.percentile.trim() === "",
      score: formValues.score.trim() === "",
    };

    setErrors(newErrors);

    // Stop if any field is empty
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    console.log("Saved Data:", formValues);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Update Scores</h2>
          <Image
            src="/images/html-icon.png"
            alt="HTML Icon"
            width={20}
            height={20}
          />
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {[
            { label: "Rank", name: "rank", placeholder: "Number" },
            {
              label: "Percentile",
              name: "percentile",
              placeholder: "Percentile",
            },
            {
              label: "Current Score (out of 15)",
              name: "score",
              placeholder: "Current Score",
            },
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center">
                <span className="w-6 h-6 bg-blue-900 text-white flex items-center justify-center rounded-full mr-3 font-bold">
                  {index + 1}
                </span>
                <label className="font-semibold">
                  Update your <span className="font-bold">{field.label}</span>
                </label>
                <input
                  type="number"
                  name={field.name}
                  value={formValues[field.name]}
                  onChange={handleChange}
                  className={`ml-auto border p-2 rounded w-40 text-center outline-none ring-1 ${
                    errors[field.name]
                      ? "ring-red-500 border-red-500"
                      : "ring-blue-200 border-blue-500"
                  }`}
                  placeholder={field.placeholder}
                />
              </div>
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1 text-right">
                  {field.label} is required.
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-2 py-4 border rounded-lg text-blue-900 font-bold outline outline-1 outline-blue-900 outline-offset-1"
          >
            cancel
          </button>
          <button
            onClick={handleSave}
            className="px-10 bg-blue-900 text-white rounded-lg font-bold"
          >
            save →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
