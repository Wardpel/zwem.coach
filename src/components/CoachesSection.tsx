'use client'

import { motion } from 'framer-motion'

export default function CoachesSection() {
  return (
    <section className="py-20 bg-white relative" id="coaches">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-athletic-dark mb-6">
            Coaches
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Train met Olympisch talent en expertise op het hoogste niveau
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Pieter Timmers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="bg-gradient-sky rounded-2xl shadow-ocean p-12 backdrop-blur-sm bg-opacity-50">
              <div className="text-6xl mb-4">🥈</div>
              <p className="text-gray-600 italic">
                Foto placeholder - Pieter Timmers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-display font-bold text-athletic-primary mb-4">
                Pieter Timmers
              </h3>
              <h4 className="text-xl font-display font-semibold text-gray-700 mb-6">
                Van Olympisch Zilver tot Jouw Coach
              </h4>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Maak kennis met Pieter Timmers, een naam die synoniem staat
                  voor Belgische zwemgeschiedenis. Als een van de meest
                  succesvolle olympiërs van het land, heeft Pieter de topsport
                  op het allerhoogste niveau beleefd.
                </p>

                <p>
                  Het absolute hoogtepunt van zijn carrière was het behalen van
                  de{' '}
                  <strong>zilveren medaille op de 100 meter vrije slag</strong>{' '}
                  tijdens de Olympische Spelen van Rio de Janeiro in 2016. Een
                  prestatie die hem op het wereldtoneel plaatste.
                </p>

                <p>
                  Naast dit historisch Olympisch succes is Pieter meervoudig
                  Belgisch recordhouder en behaalde hij diverse medailles op
                  Europese kampioenschappen. Zijn carrière werd gekenmerkt door
                  discipline, een ongeëvenaarde techniek en een diepe passie
                  voor het water.
                </p>

                <div className="bg-ocean-50 rounded-lg p-6 mt-6">
                  <h5 className="font-display font-semibold text-athletic-primary mb-3">
                    Waarom lessen bij Pieter?
                  </h5>
                  <p>
                    Bij ZWEM.COACH krijg je niet zomaar zwemles; je leert van
                    een olympiër. Pieter vertaalt de complexe technieken van de
                    topsport naar haalbare doelen voor elk niveau. Of je nu je
                    crawl wilt perfectioneren, efficiënter wilt leren zwemmen of
                    je eerste baantjes trekt, Pieter biedt persoonlijke
                    begeleiding met de precisie van een topsporter en het geduld
                    van een coach.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ward Pellegrims */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-display font-bold text-athletic-primary mb-4">
                Ward Pellegrims
              </h3>
              <h4 className="text-xl font-display font-semibold text-gray-700 mb-6">
                Onderdeel van het Olympische Succesteam
              </h4>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Achter elke topsporter staat een team van topcoaches. Maak
                  kennis met Ward Pellegrims, een coach met jarenlange ervaring
                  in de Belgische zwem- en triatlonwereld.
                </p>

                <p>
                  Ward maakte deel uit van het{' '}
                  <strong>
                    coachingteam van Olympisch medaillewinnaar Pieter Timmers
                  </strong>
                  , waarbij hij Pieter begeleidde op zijn indrukwekkende traject
                  naar de historische zilveren medaille op de 100m vrije slag
                  tijdens de Olympische Spelen van Rio de Janeiro in 2016.
                </p>

                <p>
                  Zijn expertise is echter breder dan het elitezwemmen. Met meer
                  dan 15 jaar ervaring en een Master in de Sportwetenschappen,
                  is Ward een autoriteit in performance coaching voor
                  duursporten. Hij specialiseert zich in het coachen van zowel
                  zwemmers als triatleten van elk niveau.
                </p>

                <div className="bg-ocean-50 rounded-lg p-6 mt-6">
                  <h5 className="font-display font-semibold text-athletic-primary mb-3">
                    Waarom lessen bij Ward?
                  </h5>
                  <p>
                    Ervaring op hoogste niveau van het zwemmen maar ook in de
                    totaalbegeleiding van agegroup triatleten en beginnende
                    zwemmers maakt dat ik de ideale coach ben om in het zwembad
                    mee aan de slag te gaan. Ward's aanpak combineert
                    wetenschappelijke kennis met jarenlange praktijkervaring aan
                    de wereldtop.
                  </p>
                  <p className="mt-3">
                    Of je nu je zwemtechniek (crawl) wil leren of verfijnen, of
                    traint voor je eerste triatlon, Ward brengt de lessen van
                    Olympisch niveau naar jouw training. Hij gelooft niet in een
                    'one-size-fits-all' methode, maar in de kracht van
                    technische perfectie en een gepersonaliseerd trainingsschema.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-sky rounded-2xl shadow-ocean p-12 backdrop-blur-sm bg-opacity-50 order-1 md:order-2">
              <div className="text-6xl mb-4">🏆</div>
              <p className="text-gray-600 italic">
                Foto placeholder - Ward Pellegrims
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
