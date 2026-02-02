import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Impact } from "@/components/sections/Impact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Hero />
      <Programs />
      <Impact />
    </main>
  );
}
