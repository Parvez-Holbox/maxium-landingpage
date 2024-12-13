'use client'

import { motion } from 'framer-motion'
import Modal from './modal'

export default function Navbar() {

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-900">
          Maxium
        </a>
        <Modal />
      </div>
    </motion.nav>
  )
}

