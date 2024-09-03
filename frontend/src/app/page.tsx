import { Footer } from "@/components/landing/footer";
import { Landing } from "@/components/landing/landing-page";
import { Navbar } from "@/components/landing/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Footer />
    </main>
  );
}
