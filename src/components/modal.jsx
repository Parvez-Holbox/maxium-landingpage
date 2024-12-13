import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);    

    const toggleModal = useCallback(() => {
        setShowModal(prev => !prev); // Toggle the modal state
        setIsLoading(false); // Reset loading state
      }, []);

      const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,  // Replace with your actual service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your actual template ID
            e.target,
            import.meta.env.VITE_EMAILJS_USER_ID      // Replace with your actual user ID
          )
          .then(
            (result) => {
              console.log("Success:", result); // Debug log
              toast.success("We'll get back to you shortly.");
              e.target.reset();
              toggleModal();
    
            },
            (error) => {
              console.error("Error:", error); // Debug log
              toast.error("There was an issue sending your request. Please try again.");
              toggleModal();
            }
          );
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
                                            name="from_name" // Matches {{from_name}} in EmailJS template
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="user_email" // Matches {{user_email}} in EmailJS template
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg flex justify-center items-center"
                                        disabled={isLoading} // Disable button when loading
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg
                                                    aria-hidden="true"
                                                    role="status"
                                                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                                                    viewBox="0 0 100 101"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                        fill="#E5E7EB"
                                                    />
                                                    <path
                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                Loading...
                                            </>
                                        ) : (
                                            "Book Demo"
                                        )}
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

