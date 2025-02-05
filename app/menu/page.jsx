import Header from "@/app/_components/Header";
import headerImg from "@/public/images/menu-header.jpeg";
import Heading from "../_components/Heading";

export const metadata = {
  title: "Our Menu",
};

export default function MenuPage() {
  return (
    <div>
      <Header img={headerImg} className="grid grid-cols-2">
        <div>
          <Heading type="hero" className="mb-12">
            View Our New Menu
          </Heading>
          <Heading type="h5">The freshest ingredients for you every day</Heading>
        </div>
        <div></div>
      </Header>

      <h2>Menu page</h2>
    </div>
  );
}
