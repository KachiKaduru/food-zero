import HomeChefSection from "./_components/HomeChefSection";
import HomeFeatures from "./_components/HomeFeatures";
import HomeHeader from "./_components/HomeHeader";
import HomeMenuSection from "./_components/HomeMenuSection";
import NavigationBar from "./_components/NavigationBar";
import ReservationMini from "./_components/ReservationMini";
// import { getMealsByCategory } from "./_lib/data-service";

export default async function Page() {
  // const starters = await getMealsByCategory("Lunch");
  // console.log(starters);

  return (
    <main className="bg-primary-300">
      <NavigationBar />
      <HomeHeader />
      <HomeMenuSection />
      <HomeChefSection />
      <HomeFeatures />
      <ReservationMini />
    </main>
  );
}
