'use client'

import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

export default function Footer() {
  return (
    <footer className="bg-athletic-dark text-white py-16 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-ocean-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Klaar om te starten?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schrijf je nu in voor 10 weken crawl training met Olympische
            expertise
          </p>
          <CTAButton />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-display font-semibold text-xl mb-3">
                ZWEM.COACH
              </h3>
              <p className="text-gray-400 text-sm">Start to Crawl Vilvoorde</p>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-3">Contact</h4>
              <a
                href="mailto:info@zwem.coach"
                className="text-athletic-accent hover:text-athletic-secondary transition-colors"
              >
                info@zwem.coach
              </a>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-3">Locatie</h4>
              <p className="text-gray-400 text-sm">
                Zwembad 't Zeepaardje
                <br />
                Heldenplein 13
                <br />
                1800 Vilvoorde
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center md:text-left text-sm text-gray-500 md:flex md:items-center md:justify-between md:gap-6">
            <span className="block md:inline">
              © {new Date().getFullYear()} ZWEM.COACH - Alle rechten
              voorbehouden
            </span>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0">
              <a
                href="/algemene-voorwaarden"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Algemene Voorwaarden
              </a>
              <span className="hidden md:inline text-gray-600">•</span>
              <a
                href="/privacybeleid"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacyverklaring
              </a>
              <span className="hidden md:inline text-gray-600">•</span>
              <a
                href="https://www.cotersus.be/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Website door Cotersus
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
