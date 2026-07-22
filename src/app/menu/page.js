import MenuCategoriesClient from './MenuCategoriesClient';

export const metadata = {
  title: 'Our Menu Dishes | Little India Restaurant & Bar Denver & Lakewood',
  description:
    'Explore authentic Indian menu categories at Little India — appetizers, tandoori specialties, curries, biryani, oven-hot naan, desserts, and more in Lakewood & Denver, Colorado.',
  keywords: [
    'Indian Menu Denver',
    'Little India Menu Lakewood',
    'Tandoori Menu Colorado',
    'Indian Curries Denver',
    'Naan Bread Lakewood',
    'Vegetarian Indian Food Denver',
  ],
  openGraph: {
    title: 'Our Menu | Little India Restaurant & Bar',
    description:
      'Browse traditional North Indian curries, clay-oven tandoori, fresh naan, and more at Little India in Lakewood & Denver.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Menu | Little India Restaurant & Bar',
    description:
      'Authentic Indian menu categories — tandoori, curries, biryani, naan, and desserts in Denver & Lakewood.',
  },
};

export default function Page() {
  return <MenuCategoriesClient />;
}
