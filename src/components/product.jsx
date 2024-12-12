'use client'

import { motion } from 'framer-motion'
import tabluar from '../assets/tabular.png'
import Modal from './modal'

export default function Product() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={tabluar}
              alt="Dashboard Preview"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Transform Data into Insights</h2>
            <p className="text-lg text-gray-600">
              Our AI-powered platform enables pharmaceutical companies to analyze complex data with ease. 
              Unlock actionable insights, streamline workflows.
            </p>
            <Modal />
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}

