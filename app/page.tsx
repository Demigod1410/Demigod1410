import { HeroSection } from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-black-100 antialiased overflow-hidden " >
      <HeroSection />

    <TechStack />
    <RecentProjects />


    <Footer/>
    </main>
  );
}
