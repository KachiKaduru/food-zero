import Container from "./_components/Container";
import HomeHeader from "./_components/HomeHeader";
import HomeMenuSection from "./_components/HomeMenuSection";
import NavigationBar from "./_components/NavigationBar";

export default function Page() {
  return (
    <main className="bg-primary-300">
      <NavigationBar />

      <Container>
        <HomeHeader />
        <HomeMenuSection />
      </Container>
    </main>
  );
}
