// Adjust the import path based on your folder structure

import FooterWithCta from "../components/footer/FooterWithCta";
import MegaHeader from "../components/headers/MegaHeader";
import OurStorySection from "../components/ourstory/Story";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-stone-800 flex flex-col justify-between">

    <MegaHeader />

      {/* Main Content */}
      <div className=" relative overflow-hidden flex-grow pt-16 md:pt-20">
        {/* Pass isH1={true} to make the heading an h1 on this page */}
        <OurStorySection isH1={true} />
      </div>

     <FooterWithCta />
    </main>
  );
}