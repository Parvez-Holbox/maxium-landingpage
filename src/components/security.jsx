'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck } from 'lucide-react'

const securityFeatures = [
  {
    icon: Shield,
    title: 'SOC2 I',
    description: 'Protect sensitive data with advanced encryption technologies ensuring secure storage and transmission.'
  },
  {
    icon: Shield,
    title: 'SOC2 II',
    description: 'Robust access control mechanisms to ensure that only authorized personnel have access to critical data.'
  },
  {
    icon: Lock,
    title: 'GDPR',
    description: 'Multi-factor authentication (MFA) to verify user identities and prevent unauthorized access.'
  },
  {
    icon: FileCheck,
    title: 'No training on user data',
    description: 'Prioritizing user privacy with strict policies and secure handling of personal information.'
  }
]

export default function Security() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Security</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

