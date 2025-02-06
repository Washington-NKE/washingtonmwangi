import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients"
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { ErrorBoundary } from '@sentry/nextjs';

export default function Home() {
  return (
    <ErrorBoundary>
   <main className="relative dark:bg-black-100 bg-slate-50 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 mt-0">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
    </div>
   </main>
   </ErrorBoundary>
  );
}
