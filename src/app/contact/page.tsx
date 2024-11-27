
import ContactSection from "../components/ContactSection";
import { BackgroundBeamsWithCollision } from "../components/BackgroundBeamsWithCollision";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div
      style={{ backgroundImage: "url(/pictures/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <BackgroundBeamsWithCollision>
      <div className="container mt-24 mx-auto px-4 py-4 mb-36">
        < ContactSection />
    </div>
      </BackgroundBeamsWithCollision>
      </div>
    </main>
  );
}


