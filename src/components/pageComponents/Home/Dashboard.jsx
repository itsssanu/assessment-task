import React from "react";
import { motion } from "framer-motion";
import HomeImage from "../../../assets/icons/images/HomeImage.png";
import QR from "../../../assets/icons/images/QR.png";

const Dashboard = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="space-y-6 p-3 bg-gray-50 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Banner */}
      <motion.section
        className="rounded-2xl border-2 border-[#42794A] shadow-sm overflow-hidden relative bg-white"
        variants={bannerVariants}
      >
        <div className="flex flex-col md:flex-row relative">
          {/* Left side - Green section with diagonal cut */}
          <div className="flex-1 relative">
            <div
              className="h-full p-8 flex flex-col justify-center text-white relative"
              style={{
                background: "linear-gradient(135deg, #42794A 20%, #50c360ff 100%)",
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                Pay ₹1/month* for the QPay<br />
                POS Device
              </h2>
              <p className="text-white/90 text-base mb-6">
                One device for accepting all modes of payments
              </p>
              <motion.button
                className="bg-white text-green-700 text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-50 transition-colors self-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download App Now!
              </motion.button>
            </div>
          </div>
          {/* Right side - Light background with image */}
          <div className="flex-1 bg-white flex items-center justify-center relative">
            <div className="max-h-48 flex items-center justify-center">
              <img
                src={HomeImage}
                alt="QPay POS Device"
                className="max-h-58 object-contain"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* KPIs Section */}
      <motion.section
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
      >
        {[
          { label: "Account Holders", value: "1.5k" },
          { label: "Transactions", value: "2.1k" },
          { label: "Settlement", value: "2.3k" },
          { label: "QR Orders", value: "45k" },
        ].map((kpi, index) => (
          <motion.div
            key={kpi.label}
            className="rounded-xl bg-white p-8 text-center border shadow-sm hover:shadow-md transition-shadow"
            variants={itemVariants}
          >
            <div className="text-3xl font-bold text-[#42794A]">{kpi.value}</div>
            <div className="text-slate-500 text-base font-medium">{kpi.label}</div>
          </motion.div>
        ))}
      </motion.section>

      {/* Profile and QR Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
      >
        {/* Profile Card */}
        <motion.div
          className="rounded-xl bg-white border p-6 shadow-sm flex flex-col"
          variants={cardVariants}
        >
          <h3 className="font-medium mb-4 text-gray-400 text-sm uppercase tracking-wide">
            Profile
          </h3>
          <div className="flex items-center gap-6 mb-6 flex-1">
            <div className="relative h-40 w-40">
              <svg className="h-40 w-40 transform -rotate-360" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#61CE70"
                  strokeWidth="3"
                  strokeDasharray="30, 100"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#61CE70]">30%</span>
              </div>
            </div>
            <div className="space-y-2 flex-1">
              <div className="text-lg text-gray-800">Complete your profile</div>
              <ul className="text-base space-y-1 px-4 text-gray-500 font-medium">
                <li>• Personal KYC</li>
                <li>• Company KYC</li>
                <li>• Onboarding details</li>
              </ul>
            </div>
          </div>
          <motion.button
            className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-[#42794A] hover:border-[#42794A] transition-colors font-medium mt-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Next
          </motion.button>
        </motion.div>

        {/* QR Card */}
        <motion.div
          className="rounded-xl bg-white border p-6 shadow-sm flex flex-col"
          variants={cardVariants}
        >
          <h3 className="font-medium mb-4 text-gray-400 text-sm uppercase tracking-wide">
            QR
          </h3>
          <div className="flex items-center gap-6 mb-6 flex-1">
            <img src={QR} alt="QR Code" className="h-40 w-40 object-contain" />
            <div className="space-y-2 flex-1">
              <div className="text-lg text-gray-800">Order QR</div>
              <ul className="text-base space-y-1 px-4 text-gray-500 font-medium">
                <li>• Receive Payment</li>
                <li>• Order new QRs</li>
                <li>• Download QR</li>
              </ul>
            </div>
          </div>
          <motion.button
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium mt-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View more
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Settlement and Transactions Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
      >
        {/* Settlement */}
        <motion.div
          className="rounded-xl bg-white border p-6 shadow-sm"
          variants={cardVariants}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-400 text-sm uppercase tracking-wide">
              Settlement
            </h3>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-lg font-semibold text-gray-800 mb-6">
            ₹1,23,816.19
          </div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div>
                  <div className="font-semibold text-black text-sm">Ibrahim</div>
                  <div className="text-sm font-medium text-gray-400">
                    23 Oct, 09:15 AM
                  </div>
                </div>
                <div className="font-semibold text-black text-sm">+₹90</div>
              </div>
            ))}
          </div>
          <motion.button
            className="w-full mt-4 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-[#42794A] hover:border-[#42794A] transition-colors font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Settle Now
          </motion.button>
        </motion.div>

        {/* Total Transactions */}
        <motion.div
          className="rounded-xl bg-white border p-6 shadow-sm"
          variants={cardVariants}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-400 text-sm uppercase tracking-wide">
              Total Transactions
            </h3>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-lg font-semibold text-gray-800 mb-6">
            ₹1,23,816.19
          </div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div>
                  <div className="font-semibold text-black text-sm">Ibrahim</div>
                  <div className="text-sm font-medium text-gray-400">
                    23 Oct, 09:15 AM
                  </div>
                </div>
                <div className="font-semibold text-black text-sm">+₹90</div>
              </div>
            ))}
          </div>
          <motion.button
            className="w-full mt-4 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-[#42794A] hover:border-[#42794A] transition-colors font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All
          </motion.button>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default Dashboard;
