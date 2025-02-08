import { HeroSection } from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black-100 antialiased overflow-hidden " >
      <HeroSection />

    <RecentProjects />

 
    </main>
  );
}
