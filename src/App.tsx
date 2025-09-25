import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSections';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}