'use client'

import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ocean-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-athletic-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-ocean-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-athletic-dark mb-6">
              ZWEM.COACH
              <br />
              <span className="text-athletic-primary">
                Start to Crawl Vilvoorde
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              Leer crawl zwemmen of verbeter je techniek onder deskundige
              begeleiding in een motiverende groepsomgeving.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-athletic-primary font-display font-semibold mb-8"
            >
              Met Pieter Timmers en Ward Pellegrims
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <CTAButton />
            </motion.div>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16"
          >
            <div className="bg-gradient-sky rounded-2xl shadow-ocean p-12 backdrop-blur-sm bg-opacity-50">
              <div className="text-6xl mb-4">🏊‍♂️</div>
              <p className="text-gray-600 italic">
                Foto placeholder - Zwemmer in actie
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
