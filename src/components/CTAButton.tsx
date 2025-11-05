'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CTAButton() {
  const [showModal, setShowModal] = useState(false)

  const mondayLink = process.env.NEXT_PUBLIC_STRIPE_MONDAY_LINK || '#'
  const wednesdayLink = process.env.NEXT_PUBLIC_STRIPE_WEDNESDAY_LINK || '#'

  return (
    <>
      <motion.button
        onClick={() => setShowModal(true)}
        className="bg-gradient-ocean text-white px-8 py-4 rounded-lg font-display font-semibold text-lg shadow-ocean hover:shadow-athletic transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Inschrijven
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-display font-bold text-athletic-dark mb-4">
                Kies je lesmoment
              </h3>
              <p className="text-gray-600 mb-6">
                Selecteer de groep die het beste bij je schema past. Je volgt 1x
                per week les gedurende 10 weken.
              </p>

              <div className="space-y-4">
                <a
                  href={mondayLink}
                  className="block w-full bg-gradient-ocean text-white px-6 py-4 rounded-lg font-display font-semibold text-center shadow-ocean hover:shadow-athletic transition-all duration-300 hover:scale-105"
                >
                  <div className="text-lg">Maandagochtend</div>
                  <div className="text-sm opacity-90">07:00 - 08:00</div>
                </a>

                <a
                  href={wednesdayLink}
                  className="block w-full bg-gradient-ocean text-white px-6 py-4 rounded-lg font-display font-semibold text-center shadow-ocean hover:shadow-athletic transition-all duration-300 hover:scale-105"
                >
                  <div className="text-lg">Woensdagochtend</div>
                  <div className="text-sm opacity-90">07:00 - 08:00</div>
                </a>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 w-full text-gray-600 hover:text-gray-800 font-medium"
              >
                Annuleren
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
