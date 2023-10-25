import AppBlock from "@/components/AppBlock";
import BannerCarousel from "@/components/Banner";
import ContactBlock from "@/components/ContactBlock";
import InfoBlock from "@/components/InfoBlock";

export const metadata = {
  title: "Heartfulness in Pune - Heartfulness.org",
  description:
    "HFN Starter is a meditation app that helps with relaxation, meditation, rejuvenation, introspection and deep reflection.",
};

export default function Home() {
  return (
    <div className="mt-10">
      <BannerCarousel />
      <InfoBlock />
      <AppBlock />
      <ContactBlock />
    </div>
  );
}
