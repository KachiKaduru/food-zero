import ReservationMini from "../_components/ReservationMini";
import AboutHeader from "./AboutHeader";
import AboutProcess from "./AboutProcess";
import AboutStory from "./AboutStory";

export const metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutStory />
      <AboutProcess />
      <ReservationMini />
    </>
  );
}
