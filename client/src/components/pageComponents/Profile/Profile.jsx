import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../../../assets/icons/images/ProfileImage.png";
import { BusinessIcon } from "../../../assets/icons/BusinessIcon";
import { KYCIcon } from "../../../assets/icons/KYCImage";
import { OrderIcon } from "../../../assets/icons/OrderIcon";
import { SpeakerIcon } from "../../../assets/icons/SpeakerIcon";
import { POCMachineIcon } from "../../../assets/icons/POCMachineIcon";
import { SettingsIcon } from "../../../assets/icons/SettingsIcon";
import { Staffcon } from "../../../assets/icons/StaffIcon";
import { LanguageIcon } from "../../../assets/icons/LanguageIcon";
import { BankIcon } from "../../../assets/icons/BankIcon";
import { ChevronRight } from "lucide-react";

const Profile = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Sample data for profile cards
  const profileCards = [
    {
      id: 1,
      icon: <BankIcon />,
      title: "XXXX 9820",
      subtitle: "ICICI Bank | Chennai Egmore Branch",
    },
    {
      id: 2,
      icon: <BusinessIcon />,
      title: "Business Profile",
      subtitle: "View and edit your business details",
    },
    {
      id: 3,
      icon: <KYCIcon />,
      title: "KYC Verification",
      subtitle: "Unlock exclusive benefits with KYC",
    },
    {
      id: 4,
      icon: <OrderIcon />,
      title: "Order QR",
      subtitle: "Get paid, manage & order QRs",
    },
  ];

  // Sample data for business services
  const businessServices = [
    {
      id: 1,
      icon: <SpeakerIcon />,
      title: "Smart Speaker",
    },
    {
      id: 2,
      icon: <POCMachineIcon />,
      title: "POS Machine",
    },
  ];

  // Sample data for manage business
  const manageBusiness = [
    {
      id: 1,
      icon: <SettingsIcon />,
      title: "Payment Settings",
    },
    {
      id: 2,
      icon: <Staffcon />,
      title: "Manage Staff",
    },
    {
      id: 3,
      icon: <LanguageIcon />,
      title: "Change Language",
    },
  ];

  return (
    <motion.div
      className="space-y-6 p-2 bg-gray-50 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Banner */}
      <motion.section
        className="rounded-2xl border-2 border-[#42794A] shadow-sm overflow-hidden relative bg-white"
        variants={bannerVariants}
      >
        <div className="flex flex-col lg:flex-row relative">
          {/* Left side - Green section with diagonal cut (desktop only) */}
          <div className="flex-1 relative">
            <div
              className={`
                h-full p-8 flex flex-col justify-center text-white relative
                ${window.innerWidth >= 1024
                  ? "[clipPath:polygon(0_0,100%_0,85%_100%,0_100%)]"
                  : ""
                }
              `}
              style={{
                background: "linear-gradient(135deg, #42794A 20%, #50c360ff 100%)",
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
          {/* Right side - Light background with image (desktop only) */}
          <div className="flex-1 bg-white items-center justify-center relative hidden lg:flex">
            <div className="max-h-48 flex items-center justify-center">
              <img
                src={ProfileImage}
                alt="QPay POS Device"
                className="max-h-58 object-contain"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Profile Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {profileCards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-green-50 rounded-2xl p-5 flex flex-col justify-between cursor-pointer 
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            variants={cardVariants}
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 flex items-center justify-center bg-[#42794A] text-white rounded-full">
                {card.icon}
              </div>
              <ChevronRight className="text-[#42794A] w-5 h-5" />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-[#2E5C35] text-lg">
                {card.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 mt-1">{card.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>


      {/* Business Services & Manage Business */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
      >
        {/* Business Services */}
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border border-gray-100"
        >
          <h3 className="font-semibold mb-6 text-gray-600 text-sm uppercase tracking-wide text-center">
            Business Services
          </h3>

          <div className="grid grid-cols-2 gap-8 w-full max-w-md">
            {businessServices.map((service) => (
              <motion.div
                key={service.id}
                className="flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300"
                variants={cardVariants}
              >
                <div className="p-4 bg-green-50 rounded-xl flex items-center justify-center w-20 h-20">
                  {service.icon}
                </div>
                <h4 className="text-sm font-medium text-gray-800 text-center mt-3">
                  {service.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Manage Business */}
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border border-gray-100"
        >
          <h3 className="font-semibold mb-6 text-gray-600 text-sm uppercase tracking-wide text-center">
            Manage Business
          </h3>

          <div className="grid grid-cols-3 gap-6">
            {manageBusiness.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300"
                variants={cardVariants}
              >
                <div className="p-4 bg-green-50 rounded-xl flex items-center justify-center w-16 h-16">
                  {item.icon}
                </div>
                <h4 className="text-sm font-medium text-gray-800 text-center mt-3">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

    </motion.div>
  );
};

export default Profile;
