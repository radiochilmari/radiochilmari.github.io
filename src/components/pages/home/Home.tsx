import TopRegularProgramSlider from "@/components/ui/TopRegularProgramSlider";
import FacebookVideoEmbed from "@/components/ui/FacebookVideoEmbed";
import RadioChilmariFacebookPage from "@/components/ui/FacebookPage";
// import HoursCard from "@/components/ui/HoursCard";
// import OurFacebookNews from "@/components/ui/OurFacebookNews";
import Tab from "@/components/ui/Tab";
import RdrsProgram from "@/components/ui/RdrsProgram";
import BackgroundHero from "@/components/ui/BackgroundHero";
import Award from "@/components/ui/Award";
import Testimonials from "@/components/ui/Testimonials";
import RadioPlayer from "@/components/ui/RadioPlayer";
import RadioChilmariFeatures from "@/components/ui/RadioChilmariFeatures";
import InvestmentSection from "@/components/ui/InvestmentSection";
import CookieConsent from "@/components/ui/CookieConsent";

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      {/* Main Content */}
      <main className="p-6">
        {/* Background Hero Section */}
        <BackgroundHero />

        <RadioPlayer />

        {/* Slider Section */}
        <section className="my-8">
          <TopRegularProgramSlider />
        </section>

        {/* Facebook Page Section */}
        <section className="my-8">
          <RadioChilmariFacebookPage pageHref="https://www.facebook.com/radiochilmari" />
        </section>
        <hr className="" />


        {/* Hours Card Section */}
        <section className="my-8">
          {/* <HoursCard /> */}
          <Tab />
        </section>

        {/* RDRS Program Section */}
        <section className="my-8">
          <RdrsProgram />
        </section>
        <Testimonials />
        <section>

          <RadioChilmariFeatures />
          <Award />
        </section>

        {/* Video Embed Section */}
        <section className="my-8">
          <InvestmentSection />
          <FacebookVideoEmbed />
        </section>
        <CookieConsent />
      </main>


    </div>
  );
};

export default Home;
