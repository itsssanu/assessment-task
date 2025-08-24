import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Share2, ChevronRight, ChevronDown, CheckCircle } from "lucide-react";
import QRImage from "../../../assets/icons/images/QR.png";
import logo from "../../../assets/icons/images/logo.png";

const QR = () => {
    const [activeTab, setActiveTab] = useState("active");

    // Sample QR codes data for Active QR Codes
    const activeQrCodes = [
        {
            id: "Q201946579",
            description: "All Marketing Sales-",
            code: "MS190304115533164898O231",
            terminal: "Terminal 1"
        },
        {
            id: "Q201946579",
            description: "All Marketing Sales-",
            code: "MS190304115533164898O231",
            terminal: "Terminal 2"
        },
        {
            id: "Q201946579",
            description: "All Marketing Sales-",
            code: "MS190304115533164898O231",
            terminal: "Terminal 3"
        },
        {
            id: "Q201946579",
            description: "All Marketing Sales-",
            code: "MS190304115533164898O231",
            terminal: "Terminal 5"
        }
    ];

    // Sample QR requests data matching the new image
    const [qrRequests, setQrRequests] = useState([
        {
            id: "All Marketing Sales",
            address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
            requestDate: "26.04.202",
            status: "QR Request Accepted",
            statusSteps: [
                { label: "QR Request Accepted", completed: true },
                { label: "Awaiting Production", completed: false },
                { label: "Awaiting Dispatch", completed: false },
                { label: "Awaiting Delivery", completed: false }
            ],
            expanded: false
        },
        {
            id: "All Marketing Sales",
            address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
            requestDate: "26.04.202",
            status: "QR Request Accepted",
            statusSteps: [
                { label: "QR Request Accepted", completed: true },
                { label: "Awaiting Production", completed: false },
                { label: "Awaiting Dispatch", completed: false },
                { label: "Awaiting Delivery", completed: false }
            ],
            expanded: false
        }
    ]);

    const toggleExpanded = (index) => {
        setQrRequests(prev => prev.map((request, i) =>
            i === index ? { ...request, expanded: !request.expanded } : request
        ));
    };

    const handleStatusChange = (requestIndex, stepIndex) => {
        setQrRequests(prev => prev.map((request, i) =>
            i === requestIndex ? {
                ...request,
                statusSteps: request.statusSteps.map((step, j) => ({
                    ...step,
                    completed: j === stepIndex
                })),
                status: request.statusSteps[stepIndex].label
            } : request
        ));
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.2 }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.02,
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.98,
            transition: { duration: 0.1 }
        }
    };

    return (
        <motion.div
            className="min-h-screen bg-gray-50 p-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.h1
                    className="text-2xl font-bold text-gray-900 mb-6"
                    variants={itemVariants}
                >
                    Manage QR/POS
                </motion.h1>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left Column - QR Code Display */}
                    <motion.div
                        className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col h-full"
                        variants={itemVariants}
                        whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="flex justify-center mt-2 mb-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <img src={logo} alt="QPay Logo" className="h-10 w-auto" />
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center flex-1"
                        >
                            <motion.img
                                src={QRImage}
                                alt="QR Code"
                                className="w-64 h-64"
                            />
                        </motion.div>

                        {/* UPI ID Display */}
                        <motion.div
                            className="text-center mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <div className="flex items-center justify-center gap-2 text-lg font-medium text-gray-700">
                                <span>UPI ID: </span>
                                <span className="text-green-600 font-semibold">987654321@qpay</span>
                                <motion.button
                                    className="text-green-600 hover:text-green-700"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </motion.button>
                            </div>
                            <p className="text-gray-500 text-sm font-medium mt-1">Ibrahim Mohammed</p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex gap-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                        >
                            <motion.button
                                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 hover:border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Download className="w-5 h-5" />
                                Download
                            </motion.button>
                            <motion.button
                                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 hover:border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Share2 className="w-5 h-5" />
                                Share
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - QR Code Management */}
                    <motion.div
                        className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col h-[600px] overflow-hidden"
                        variants={itemVariants}
                        whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Tab Headers */}
                        <motion.div
                            className="flex p-2 gap-4 bg-gray-100 rounded-t-lg"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                        >
                            <motion.button
                                onClick={() => setActiveTab("active")}
                                className={`flex-1 py-3 px-6 text-center font-medium rounded-lg transition-all duration-200 ${activeTab === "active"
                                    ? "text-white bg-green-600 shadow-md"
                                    : "bg-gray-200 text-gray-600 hover:text-gray-800 hover:bg-gray-200 hover:border-gray-200"
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                animate={activeTab === "active" ? { backgroundColor: "#16a34a" } : { backgroundColor: "#e5e7eb" }}
                                transition={{ duration: 0.2 }}
                            >
                                Active QR Codes
                            </motion.button>
                            <motion.button
                                onClick={() => setActiveTab("requests")}
                                className={`flex-1 py-3 px-6 text-center font-medium rounded-lg transition-all duration-200 ${activeTab === "requests"
                                    ? "text-white bg-green-600 shadow-md"
                                    : "bg-gray-200 text-gray-600 hover:text-gray-800 hover:bg-gray-200 hover:border-gray-200"
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                animate={activeTab === "requests" ? { backgroundColor: "#16a34a" } : { backgroundColor: "#e5e7eb" }}
                                transition={{ duration: 0.2 }}
                            >
                                QR Code Requests
                            </motion.button>
                        </motion.div>

                        {/* Scrollable Content */}
                        <div
                            className="flex-1 overflow-y-auto p-6"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            <AnimatePresence mode="wait">
                                {activeTab === "active" ? (
                                    /* Active QR Codes Tab */
                                    <motion.div
                                        key="active"
                                        className="space-y-2 flex-1"
                                        variants={tabVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        {activeQrCodes.map((qr, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                                whileHover={{
                                                    backgroundColor: "#f9fafb",
                                                    borderColor: "#16a34a",
                                                    transition: { duration: 0.2 }
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {/* QR Code Thumbnail */}
                                                <motion.div
                                                    className="w-16 h-16 bg-gray-50 border border-gray-200 rounded flex items-center justify-center"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <img
                                                        src={QRImage}
                                                        alt="QR Code"
                                                        className="w-12 h-12"
                                                    />
                                                </motion.div>
                                                {/* QR Code Details */}
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-900">{qr.id}</h3>
                                                    <p className="text-sm text-gray-600">{qr.description}</p>
                                                    <p className="text-sm text-gray-500">{qr.code}</p>
                                                    <p className="text-xs text-gray-400 mt-1">{qr.terminal}</p>
                                                </div>
                                                {/* Arrow Icon */}
                                                <motion.div
                                                    whileHover={{ x: 5 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    /* QR Code Requests Tab */
                                    <motion.div
                                        key="requests"
                                        className="space-y-4 flex-1"
                                        variants={tabVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        {qrRequests.map((request, index) => (
                                            <motion.div
                                                key={index}
                                                className="border border-gray-200 rounded-lg overflow-hidden"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                                whileHover={{
                                                    borderColor: "#16a34a",
                                                    transition: { duration: 0.2 }
                                                }}
                                            >
                                                <motion.div
                                                    className="flex items-center gap-4 p-4"
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {/* QR Code Thumbnail */}
                                                    <motion.div
                                                        className="w-16 h-16 bg-gray-50 border border-gray-200 rounded flex items-center justify-center"
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <img
                                                            src={QRImage}
                                                            alt="QR Code"
                                                            className="w-12 h-12"
                                                        />
                                                    </motion.div>
                                                    {/* Request Details */}
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-gray-900">{request.id}</h3>
                                                        <p className="text-sm text-gray-600 mt-1">{request.address}</p>
                                                        <p className="text-xs text-gray-400 mt-2">Requested on {request.requestDate}</p>
                                                    </div>
                                                </motion.div>
                                                {/* Status Section */}
                                                <div className="px-4 pb-4">
                                                    <motion.div
                                                        className="bg-gray-50 rounded-lg p-3"
                                                        whileHover={{ backgroundColor: "#f3f4f6" }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <motion.div
                                                            className="flex items-center justify-between cursor-pointer"
                                                            onClick={() => toggleExpanded(index)}
                                                            whileHover={{ x: 2 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                                                <span className="font-medium text-gray-900">{request.status}</span>
                                                            </div>
                                                            <motion.div
                                                                animate={{ rotate: request.expanded ? 90 : 0 }}
                                                                transition={{ duration: 0.2 }}
                                                            >
                                                                {request.expanded ? (
                                                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                                                ) : (
                                                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                                                )}
                                                            </motion.div>
                                                        </motion.div>
                                                        {/* Status Steps - Only show if expanded */}
                                                        <AnimatePresence>
                                                            {request.expanded && (
                                                                <motion.div
                                                                    className="mt-4 space-y-3 pl-7"
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: "auto" }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    transition={{ duration: 0.3 }}
                                                                >
                                                                    {request.statusSteps.map((step, stepIndex) => (
                                                                        <motion.div
                                                                            key={stepIndex}
                                                                            className="flex items-center gap-3 cursor-pointer"
                                                                            onClick={() => handleStatusChange(index, stepIndex)}
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: stepIndex * 0.05, duration: 0.2 }}
                                                                            whileHover={{ x: 2 }}
                                                                        >
                                                                            <motion.div
                                                                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${step.completed
                                                                                    ? "bg-green-600 border-green-600"
                                                                                    : "bg-gray-300 border-gray-300"
                                                                                    }`}
                                                                                animate={step.completed ? { scale: [1, 1.2, 1] } : {}}
                                                                                transition={{ duration: 0.3 }}
                                                                            >
                                                                                {step.completed && (
                                                                                    <motion.div
                                                                                        className="w-1.5 h-1.5 bg-white rounded-full"
                                                                                        initial={{ scale: 0 }}
                                                                                        animate={{ scale: 1 }}
                                                                                        transition={{ duration: 0.2 }}
                                                                                    />
                                                                                )}
                                                                            </motion.div>
                                                                            <label
                                                                                className={`text-sm cursor-pointer ${step.completed ? "text-gray-900 font-medium" : "text-gray-500"
                                                                                    }`}
                                                                            >
                                                                                {step.label}
                                                                            </label>
                                                                        </motion.div>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Fixed Button with Padding */}
                        <div className="p-6 bg-white border-t border-gray-200">
                            <motion.button
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                            >
                                Request more QR Codes
                            </motion.button>
                        </div>
                    </motion.div>


                </div>
            </div>
        </motion.div>
    );
};

export default QR;