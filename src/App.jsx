import { motion } from 'framer-motion'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Product from './components/product'
import Features from './components/features'
import Security from './components/security'
import UseCases from './components/use-cases'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
       <Navbar />
      <main>
       
        <Hero />
        <Product />
        <Features />
        <Security />
        <UseCases />
      </main>
      <Footer />
    </div>
  )
}

