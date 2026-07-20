import FooterWithCta from '../components/footer/FooterWithCta';
import MegaHeader from '../components/headers/MegaHeader';
import ContactPage from './ContactPage';

export const metadata = {
  title: 'Contact Us & Reservations | UMAMI Premium Experience',
  description: 'Book your table online instantly. Experience premium dining, bespoke hamburgers, and legendary hospitality at UMAMI. Open Tue - Sun.',
  keywords: ['Contact UMAMI', 'UMAMI Table Reservation', 'Burger Restaurant Reservations', 'UMAMI Denver'],
  openGraph: {
    title: 'Contact Us & Reservations | UMAMI Premium Experience',
    description: 'Experience premium dining, bespoke hamburgers, and legendary hospitality at UMAMI. Book your table online instantly.',
    url: 'https://umamipremium.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Contact UMAMI',
      },
    ],
  },
};


export default function Page() {
    return (
      <>
      <MegaHeader />

      <section className="relative overflow-hidden flex-grow pt-16 md:pt-20">
        <ContactPage />
        </section>
        
        <FooterWithCta />
      </>
    );
  }