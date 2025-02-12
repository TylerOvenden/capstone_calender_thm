import React from "react";
import { features } from "../constants";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center w-full ">
      {/* Hero  */}
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-blue-100 to-blue-150 ">
        <section className="py-20 text-center space-y-5 items-center ">
          <h1 className="text-8xl font-bold font-sans bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
            AiGenda
          </h1>
          <p className="max-w-3xl flex text-lg  justify-center text-gray-600 leading-8">
            Tired of the hassle of manually scheduling events and managing your
            time? Meet AiGenda, the smart calendar app that does it all for you.
            Simply ask our AI assistant to book meetings, set reminders, and
            adjust your schedule—all in real-time. Sync your calendar, sit back,
            and let AiGenda take care of the rest.
          </p>
          <button
            className="bg-green-400 text-white text-md p-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg hover:scale-105 hover:ring-2 transition duration-300"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </section>
      </div>

      {/* features */}
      <section className="bg-gray-50 w-full py-20">
        <h1 className="text-6xl font-bold text-center mb-10 bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent ">
          Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {features.map((feature, idx) => (
            <div
              className="flex flex-col items-center text-center bg-white shadow-lg shadow-blue-200 rounded-lg p-6 hover:-translate-y-3 transition duration-300"
              key={idx}
            >
              <div
                className="w-full h-[40vh] mb-4 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${feature.image})` }}
              ></div>
              <p className="font-bold text-2xl mb-2">{feature.title}</p>
              <p className="text-gray-800 text-md">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
