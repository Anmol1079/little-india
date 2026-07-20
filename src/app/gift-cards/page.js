import FooterWithCta from "../components/footer/FooterWithCta";
import GiftCard from "../components/giftcards/GiftCard";
import MegaHeader from "../components/headers/MegaHeader";


// SEO-optimized metadata for search engines
export const metadata = {
  title: "Gift Cards | Little India Restaurant & Bar Lakewood & Denver",
  description:
    "Give the gift of authentic Indian flavors with a Little India Gift Card! Perfect for birthdays, holidays, or anniversaries. Redeemable at all our Lakewood and Denver locations.",
  keywords: [
    "Little India Gift Cards",
    "Indian Restaurant Gift Card Denver",
    "Lakewood Indian Dining Gift Voucher",
    "Authentic Indian Food Gifts Colorado",
  ],
  openGraph: {
    title: "Gift Cards | Little India Restaurant & Bar",
    description:
      "A thoughtful and convenient way to treat someone to a memorable Indian dining experience in Denver and Lakewood, Colorado.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FFF6EA]">
      {/* Navigation Header */}
      <MegaHeader />

      {/* Symmetrical Split Gift Card Block */}
      <section className="relative overflow-hidden flex-grow pt-32 lg:pt-36 pb-16 md:pb-16">
      <GiftCard />
      </section>

      {/* Brand Footer */}
      <FooterWithCta />
    </main>
  );
}