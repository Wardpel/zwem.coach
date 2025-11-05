'use client'

import { motion } from 'framer-motion'

export default function ScheduleSection() {
  return (
    <section className="py-20 relative" id="schema">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-athletic-dark mb-6">
            Data, Tijden & Locatie
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Schedule Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-ocean"
          >
            <h3 className="text-2xl font-display font-semibold text-athletic-primary mb-6">
              📅 Planning
            </h3>

            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-athletic-dark mb-2">
                  Structuur
                </h4>
                <p>10 wekelijkse sessies van 1 uur</p>
              </div>

              <div>
                <h4 className="font-semibold text-athletic-dark mb-2">
                  Periode
                </h4>
                <p>
                  Start: Week van 12 januari
                  <br />
                  Einde: Week van 23 maart
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-athletic-dark mb-2">
                  Let op
                </h4>
                <p className="text-sm bg-ocean-50 p-3 rounded-lg">
                  Geen lessen tijdens de krokusvakantie (17 februari)
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-athletic-dark mb-4">
                  Lesmomenten
                </h4>
                <div className="space-y-3">
                  <div className="bg-gradient-ocean text-white p-4 rounded-lg">
                    <div className="font-semibold">Groep 1: Maandag</div>
                    <div className="text-sm opacity-90">07:00 - 08:00</div>
                  </div>
                  <div className="bg-gradient-ocean text-white p-4 rounded-lg">
                    <div className="font-semibold">Groep 2: Woensdag</div>
                    <div className="text-sm opacity-90">07:00 - 08:00</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Je volgt 1x per week les in dezelfde groep
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-ocean"
          >
            <h3 className="text-2xl font-display font-semibold text-athletic-primary mb-6">
              📍 Locatie
            </h3>

            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-athletic-dark mb-2">
                  Zwembad
                </h4>
                <p className="text-lg">Zwembad 't Zeepaardje</p>
              </div>

              <div>
                <h4 className="font-semibold text-athletic-dark mb-2">Adres</h4>
                <p>
                  Heldenplein 13
                  <br />
                  1800 Vilvoorde
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-athletic-dark mb-2">
                  Parkeren
                </h4>
                <p className="text-sm bg-gray-50 p-3 rounded-lg italic">
                  Informatie over parkeermogelijkheden volgt
                </p>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 bg-gradient-sky rounded-lg p-8 text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-sm text-gray-600">Kaart placeholder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
