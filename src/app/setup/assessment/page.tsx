"use client";

import React from "react";
import logo from "../../../assets/images/eg.webp";
import Select from "react-select";

import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { customStyles } from "@/utils/CustomSelect";
const Assessment = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const marketCapOptions = [
    { value: "Mega-Cap ($200B+)", label: "Mega-Cap ($200B+)" },
    { value: "Large-Cap ($10B - $200B)", label: "Large-Cap ($10B - $200B)" },
    { value: "Mid-Cap ($2B - $10B)", label: "Mid-Cap ($2B - $10B)" },
    { value: "Small-Cap ($250M - $2B)", label: "Small-Cap ($250M - $2B)" },
    { value: "Micro-Cap (< $250M)", label: "Micro-Cap (< $250M)" },
  ];

  const industryOptions = [
    { value: "Finance", label: "Finance" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Education", label: "Education" },
    { value: "Construction", label: "Construction " },

    { value: "E-commerce", label: "E-commerce" },
  ];
  return (
    <section className="flex container">
      <div
        style={{ boxShadow: "4px 0 8px rgba(0, 0, 0, 0.1)" }}
        className="basis-3/4 min-h-[100vh]  "
      >
        <h2 className="mt-28 text-3xl font-bold">
          Sustainable Website Assessment
        </h2>{" "}
        <div className="bg-secondary-500 py-8 px-6 text-2xl  mt-7 rounded-md flex flex-col max-w-[90%]">
          <p>Your website is hosted at:</p>
          <div className="flex gap-3 mt-3">
            <div>
              City: <span className="font-medium">Singapore </span>
            </div>
            <div>
              Country: <span className="font-medium">Singapore</span>{" "}
            </div>
            <div>
              Coordinates: <span className="font-medium">123.123.123</span>
            </div>
          </div>
        </div>
        <p className="mt-7 text-lg">
          Tell us more about your website so we can help you make it more
          sustainable
        </p>
        <form
          action="
        "
          className="max-w-[45%] flex flex-col gap-6"
        >
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              CMS*
            </label>
            <Select
              options={options}
              className="mt-3 "
              placeholder="Select the CMS you are using"
              styles={customStyles}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              Bandwidth*
            </label>
            <Select
              options={options}
              className="mt-3"
              placeholder="Select the CMS you are using"
              styles={customStyles}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              What is your Market Cap?
            </label>
            <Select
              options={marketCapOptions}
              className="mt-3"
              placeholder="Select your Cap"
              styles={customStyles}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              What industry do you work in?
            </label>
            <Select
              options={industryOptions}
              className="mt-3"
              placeholder="Select your Cap"
              styles={customStyles}
            />
          </div>

          <div className="flex items-center gap-12 justify-end mt-5 ">
            <p className="text-dark-400 font-medium cursor-pointer"> Back</p>
            <button className="font-medium px-10 py-3 bg-primary-500 cursor-pointer text-white rounded-md">
              Continue
            </button>
          </div>
        </form>
      </div>
      <div className="basis-1/4 ">
        <div className="flex justify-end mt-18">
          <Image src={logo} alt="everything green"></Image>
        </div>
      </div>
    </section>
  );
};

export default Assessment;
