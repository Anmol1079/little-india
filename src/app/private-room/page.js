import FooterWithCta from '../components/footer/FooterWithCta';
import MegaHeader from '../components/headers/MegaHeader';
import PrivateRoomPage from './PrivateRoomPage';

export const metadata = {
  title: 'Exclusive Private Dining Room Lakewood, CO | Little India Restaurant',
  description: 'Book our intimate, elegant Private Dining Room for anniversaries, birthdays, family reunions, and corporate events. Secluded seating for up to 14 guests at 425 South Teller Street.',
  keywords: ['Private Dining Lakewood CO', 'Private Dining Room Denver', 'Meeting Spaces Lakewood CO', 'Restaurant Party Room Lakewood'],
  openGraph: {
    title: 'Exclusive Private Dining Room Lakewood, CO | Little India Restaurant',
    description: 'Celebrate your special occasions in our secluded, elegant private dining space. Blending Indian heritage with contemporary luxury.',
    url: 'https://littleindiadenver.com/private-dining',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Little India Private Dining Room',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Dining Room | Little India Lakewood',
    description:
      'Intimate private dining for up to 14 guests at Little India Restaurant & Bar in Lakewood, CO.',
  },
};


export default function Page() {
    return (
      <>
      <MegaHeader />
        <PrivateRoomPage />
        <FooterWithCta />
      </>
    );
  }