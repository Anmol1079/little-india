import FooterWithCta from "../components/footer/FooterWithCta";
import MegaHeader from "../components/headers/MegaHeader";
import LunchBuffetSection from "../components/lunchbuffet/LunchBuffet";
import LunchBuffet1 from "../components/lunchbuffet/LunchBuffet1";
import LunchBuffetPage from "../components/lunchbuffet/LunchBuffetPage";


export const metadata = {
  title: 'Indian Lunch Buffet in Lakewood, CO | Little India Restaurant & Bar',
  description: 'Join us 7 days a week from 11:00 AM to 2:30 PM for Denver’s favorite Indian Lunch Buffet at 425 South Teller Street. Featuring butter chicken, tandoori specialties, saag paneer, and gluten-free traditional favorites.',
  keywords: ['Indian Lunch Buffet Denver', 'Lunch Buffet Lakewood CO', 'Little India Restaurant', 'Gluten Free Indian Food Denver', 'Private Dining Room Lakewood'],
  openGraph: {
    title: 'Indian Lunch Buffet in Lakewood, CO | Little India Restaurant & Bar',
    description: 'Enjoy a rich, traditional Indian lunch buffet featuring gluten-free tandoori favorites, butter chicken, saag paneer, and fresh clay-oven naan.',
    url: 'https://littleindiadenver.com/lunch-buffet',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Little India Lunch Buffet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian Lunch Buffet | Little India Lakewood',
    description:
      'Daily Indian lunch buffet 11:00 AM–2:30 PM at Little India, 425 South Teller Street, Lakewood.',
  },
};

export default function Page() {
    return (
      <>
      <MegaHeader />
        <LunchBuffetPage />
        <LunchBuffet1 />
        <FooterWithCta />
      </>
    );
  }