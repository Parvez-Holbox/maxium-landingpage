'use client'

import { motion } from 'framer-motion'
import p1 from '../assets/pic1.jpg';
import p2 from '../assets/pic2.webp';
import p3 from '../assets/pic3.webp';


const useCases = [
  {
    title: 'Industries',
    description: 'Leverage analytics to speed up the drug discovery process by identifying biomarkers, optimizing compounds, and predicting efficacy.',
    image: p1
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Extract demand forecasts, production schedules, and inventory levels from multiple systems.',
    image: p2
  },
  {
    title: 'Knowledge Management',
    description: 'Extract and organize internal research data for easy access and reuse.',
    image: p3
  }
]

export default function UseCases() {
  return (
    <section className="py-20 flex justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Use Cases</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  m-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={useCase.image}
                alt={useCase.title}
                className="w-full sm:h-48 md:h-80 object-cover lg:object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

