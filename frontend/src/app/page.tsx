import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main>
      <h1>test</h1>
      <div className="max-w-[200px]">
        <Input type="email" placeholder="email" />
      </div>
      <Button>click</Button>
      <Button variant="outline">click</Button>
    </main>
  );
}
