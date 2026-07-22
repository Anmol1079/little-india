import FooterWithCta from '../components/footer/FooterWithCta';
import MegaHeader from '../components/headers/MegaHeader';
import BookATable from './BookATable';

export const metadata = {
  title: 'Book a Table | Little India Restaurant & Bar Lakewood & Denver',
  description:
    'Reserve your table at Little India in Lakewood, Colorado. Enjoy authentic Indian cuisine, private dining for up to 14 guests, and traditional hospitality at 425 South Teller Street.',
  keywords: [
    'Book Table Little India',
    'Indian Restaurant Reservation Denver',
    'Reserve Table Lakewood CO',
    'Private Dining Little India',
    'Indian Restaurant Near Me Booking',
  ],
  openGraph: {
    title: 'Book a Table | Little India Restaurant & Bar',
    description:
      'Reserve dining at Little India Lakewood — authentic Indian cuisine, private room seating, and warm hospitality.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Table | Little India Restaurant & Bar',
    description:
      'Reserve your seat for authentic Indian dining in Lakewood & Denver, Colorado.',
  },
};

export default function Page() {
  return (
    <>
      <MegaHeader />
      <BookATable />
      <FooterWithCta />
    </>
  );
}
