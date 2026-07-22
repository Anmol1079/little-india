import FooterWithCta from '../components/footer/FooterWithCta';
import MegaHeader from '../components/headers/MegaHeader';
import ContactPage from './ContactPage';

export const metadata = {
  title: 'Contact Us & Reservations | Little India Restaurant & Bar Denver & Lakewood',
  description:
    'Contact Little India Restaurant & Bar in Lakewood, Colorado. Call +1 303-937-9777, visit 425 South Teller Street, or reserve a table for authentic Indian dining.',
  keywords: [
    'Contact Little India Denver',
    'Indian Restaurant Lakewood Reservations',
    'Book Table Little India',
    'Little India Phone Number',
    '425 South Teller Street Lakewood',
  ],
  openGraph: {
    title: 'Contact Us | Little India Restaurant & Bar',
    description:
      'Get in touch or reserve your seat at Little India in Lakewood & Denver — authentic Indian cuisine and warm hospitality.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Little India Restaurant & Bar',
    description:
      'Reserve a table or reach Little India Restaurant & Bar in Lakewood, Colorado.',
  },
};

export default function Page() {
  return (
    <>
      <MegaHeader />
      <ContactPage />
      <FooterWithCta />
    </>
  );
}
