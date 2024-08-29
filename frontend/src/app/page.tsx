import { Footer } from "@/components/footer";
import { Landing } from "@/components/landing/page";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl">
      <Navbar />
      <Landing />
      <Footer />
    </main>
  );
}
