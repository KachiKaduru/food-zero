import Container from "./_components/Container";
import HomeChefSection from "./_components/HomeChefSection";
import HomeHeader from "./_components/HomeHeader";
import HomeMenuSection from "./_components/HomeMenuSection";
import NavigationBar from "./_components/NavigationBar";

export default function Page() {
  return (
    <main className="bg-primary-300">
      <NavigationBar />
      <HomeHeader />
      <HomeMenuSection />
      <HomeChefSection />
    </main>
  );
}
