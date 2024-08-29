import { Footer } from "@/components/footer";
import { Landing } from "@/components/landing/page";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Landing />
      <Footer />
    </main>
  );
}
