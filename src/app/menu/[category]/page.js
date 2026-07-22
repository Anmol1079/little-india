import CategoryDishesClient from './CategoryDishesClient';

const CATEGORY_META = {
  appetizer: {
    title: 'Appetizers',
    description:
      'Crispy starters, golden fritters, and clay tandoor-fired bites to begin your feast at Little India in Lakewood & Denver.',
  },
  biryani: {
    title: 'Biryani Specialties',
    description:
      'Fragrant basmati rice slow-cooked with aromatic spices, fresh herbs, and tender paneer or chicken at Little India Denver.',
  },
  'tandoori-specialties': {
    title: 'Tandoori Specialties',
    description:
      'Meats, seafood, and paneer skewered and roasted to perfection in our clay oven at Little India Lakewood.',
  },
  'soup-and-salad': {
    title: 'Soup & Salad',
    description:
      'Fresh soups and salads prepared with traditional Indian flavors at Little India Restaurant & Bar.',
  },
  'non-veg-entrees': {
    title: 'Non-Veg Entrees',
    description:
      'Classic butter chicken, lamb rogan josh, and rich non-vegetarian Indian entrees in Denver & Lakewood.',
  },
  'vegetarian-entrees': {
    title: 'Vegetarian Entrees',
    description:
      'Paneer tikka masala, dal makhani, and flavorful vegetarian Indian dishes at Little India Colorado.',
  },
  'specialty-entrees': {
    title: 'Specialty Entrees',
    description:
      'Chef specialties including Goan fish curry, mango chicken, and signature Indian entrees in Lakewood.',
  },
  'oven-hot-breads': {
    title: 'Oven Hot Breads',
    description:
      'Fresh garlic naan, peshwari naan, and clay-oven breads baked daily at Little India Restaurant & Bar.',
  },
  'side-orders': {
    title: 'Side Orders',
    description:
      'Mango chutney, raita, and traditional Indian side dishes to complete your meal at Little India Denver.',
  },
  desserts: {
    title: 'Indian Desserts',
    description:
      'Gulab jamun, mango kulfi, and classic Indian sweets at Little India in Lakewood & Denver.',
  },
  'lunch-buffet': {
    title: 'Special Lunch Buffet',
    description:
      'All-you-can-eat Indian lunch buffet with tandoori, curries, and fresh naan — 7 days a week in Lakewood, CO.',
  },
};

export async function generateMetadata({ params }) {
  const { category } = await params;
  const meta = CATEGORY_META[category] || {
    title: 'Menu',
    description:
      'Explore authentic Indian dishes at Little India Restaurant & Bar in Lakewood and Denver, Colorado.',
  };

  return {
    title: `${meta.title} | Little India Restaurant & Bar Denver & Lakewood`,
    description: meta.description,
    keywords: [
      meta.title,
      'Little India Menu',
      'Indian Restaurant Denver',
      'Indian Food Lakewood',
    ],
    openGraph: {
      title: `${meta.title} | Little India Restaurant & Bar`,
      description: meta.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${meta.title} | Little India Restaurant & Bar`,
      description: meta.description,
    },
  };
}

export default async function Page({ params }) {
  const { category } = await params;
  return <CategoryDishesClient category={category} />;
}
