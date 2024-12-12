import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ toggleIsPlaying }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
        toggleIsPlaying();
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
            .then((result) => {
                toast.success("We'll get in touch with you shortly.")
                toggleModal();
            }, (error) => {
                toast.warning("Couldn't connect! How about Trying our cell?")
            });
    };

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleModal}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-md hover:shadow-lg max-w-[250px] text-sm rounded-[10px]"
            >
                Book A Demo
            </motion.button>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ margin: "0px" }}
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 h-[100vh]"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
                        >
                            <div className="relative">
                                <button
                                    onClick={toggleModal}
                                    className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book a Demo</h2>
                                <form onSubmit={sendEmail} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Modal;

