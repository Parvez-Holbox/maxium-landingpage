'use client'

import { motion } from 'framer-motion'
import architecture from '../assets/arch.gif'
import Modal from './modal'

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
         
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Speed Meets Precision</h2>
            <p className="text-lg text-gray-600">
              Leverage generative AI to transform pharmaceutical operations, 
              boosting efficiency by up to 50% in R&D, processing, and clinical trials.
            </p>
           <Modal />
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden"
          >
            <img
              src={architecture}
              alt="Features Illustration"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

