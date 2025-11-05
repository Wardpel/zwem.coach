import type { Metadata } from 'next'
import { legalContent } from '@/lib/legal-content'
import { getFullUrl, getOgImageUrl, SITE_NAME, SITE_LOCALE } from '@/lib/site-config'

const txt = legalContent.generalTerms
const pageUrl = getFullUrl('/algemene-voorwaarden')
const ogImageUrl = getOgImageUrl()

export const metadata: Metadata = {
  title: txt.meta.title,
  description: txt.meta.description,
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: txt.meta.title,
    description: txt.meta.description,
    url: pageUrl,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: txt.meta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: txt.meta.title,
    description: txt.meta.description,
    images: [ogImageUrl],
  },
  alternates: {
    canonical: pageUrl,
  },
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="bg-white py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <header>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-athletic-dark">
            {txt.title}
          </h1>
          <p className="mt-4 text-sm text-gray-500">{txt.lastUpdated}</p>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {txt.intro}
          </p>
        </header>

        <div className="mt-16 space-y-16">
          {txt.sections.map(section => (
            <section key={section.id} id={section.id}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 border-t border-gray-200 pt-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark">
            {txt.contact.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            {txt.contact.description}
          </p>
          <dl className="space-y-4 text-lg text-gray-600">
            <div>
              <dt className="font-semibold text-athletic-dark mb-1">
                {txt.contact.emailLabel}
              </dt>
              <dd>
                <a
                  href={`mailto:${txt.contact.emailValue}`}
                  className="text-ocean-600 hover:text-ocean-700 underline underline-offset-2 transition-colors"
                >
                  {txt.contact.emailValue}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-athletic-dark mb-1">
                {txt.contact.addressLabel}
              </dt>
              <dd>{txt.contact.addressValue}</dd>
            </div>
            <div>
              <dt className="font-semibold text-athletic-dark mb-1">
                {txt.contact.vatLabel}
              </dt>
              <dd>{txt.contact.vatValue}</dd>
            </div>
          </dl>
          <p className="text-sm text-gray-500 mt-6">
            {txt.contact.complaintNote}
          </p>
        </div>
      </div>
    </div>
  )
}
