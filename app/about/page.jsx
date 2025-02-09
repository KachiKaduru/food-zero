import ReservationMini from "../_components/ReservationMini";
import AboutHeader from "./AboutHeader";
import AboutStory from "./AboutStory";

export const metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutStory />
      <ReservationMini />
    </>
  );
}
