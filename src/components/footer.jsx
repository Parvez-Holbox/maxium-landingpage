'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Maxium</h2>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white transition-colors">Facebook</a>
              <a href="#" className="block hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          © 2025 Maxium™. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

