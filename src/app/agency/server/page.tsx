import React from "react";
import logo from "@/assets/images/eg.webp";
import Image from "next/image";
const AgencyServer = () => {
  return (
    <section className="flex container">
      <div
        style={{ boxShadow: "4px 0 8px rgba(0, 0, 0, 0.1)" }}
        className="basis-3/4 min-h-[100vh]  "
      >
        hey
      </div>
      <div className="basis-1/4 ">
        <div className="flex justify-end mt-18">
          <Image src={logo} alt="everything green"></Image>
        </div>
      </div>
    </section>
  );
};

export default AgencyServer;
