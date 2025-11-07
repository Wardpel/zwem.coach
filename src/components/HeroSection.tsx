'use client'

import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

export default function HeroSection() {
  // Replace this URL with your Vercel Blob video URL
  const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || 'https://your-vercel-blob-url.vercel-storage.com/your-video.mp4'

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">
              ZWEM.COACH
              <br />
              <span className="text-athletic-accent">
                Start to Crawl Vilvoorde
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-md">
              Leer crawl zwemmen of verbeter je techniek onder deskundige
              begeleiding in een motiverende groepsomgeving.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-athletic-accent font-display font-semibold mb-8 drop-shadow-md"
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
        </div>
      </div>
    </section>
  )
}
