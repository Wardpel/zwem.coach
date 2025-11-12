import type { Metadata } from 'next'
import { legalContent } from '@/lib/legal-content'
import { getFullUrl, SITE_NAME, SITE_LOCALE } from '@/lib/site-config'

const privacy = legalContent.privacyPolicy
const pageUrl = getFullUrl('/privacybeleid')

export const metadata: Metadata = {
  title: privacy.meta.title,
  description: privacy.meta.description,
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: privacy.meta.title,
    description: privacy.meta.description,
    url: pageUrl,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: privacy.meta.title,
    description: privacy.meta.description,
  },
  alternates: {
    canonical: pageUrl,
  },
}

export default function PrivacybeleidPage() {
  return (
    <div className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-athletic-dark">
            {privacy.title}
          </h1>
          <p className="mt-4 text-sm text-gray-500">{privacy.lastUpdated}</p>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {privacy.intro}
          </p>
        </header>

        <div className="mt-16 space-y-16">
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.controller.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
              {privacy.controller.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.dataWeCollect.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {privacy.dataWeCollect.intro}
            </p>
            <ul className="mt-8 space-y-8">
              {privacy.dataWeCollect.items.map((item, index) => (
                <li key={index}>
                  <h3 className="text-xl font-display font-semibold text-athletic-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.howWeUseData.title}
            </h2>
            <ul className="list-disc space-y-3 pl-6 text-lg leading-relaxed text-gray-600">
              {privacy.howWeUseData.paragraphs.map((paragraph, index) => (
                <li key={index}>{paragraph}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.legalBases.title}
            </h2>
            <ul className="list-disc space-y-3 pl-6 text-lg leading-relaxed text-gray-600">
              {privacy.legalBases.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.thirdParties.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {privacy.thirdParties.intro}
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-relaxed text-gray-600">
              {privacy.thirdParties.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.retention.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
              {privacy.retention.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.security.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
              {privacy.security.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.rights.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {privacy.rights.intro}
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-relaxed text-gray-600">
              {privacy.rights.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.internationalTransfers.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
              {privacy.internationalTransfers.paragraphs.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.complaints.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
              {privacy.complaints.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-athletic-dark mb-6">
              {privacy.updates.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
              {privacy.updates.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
