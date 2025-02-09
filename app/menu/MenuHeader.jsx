import Header from "../_components/Header";
import headerImg from "@/public/images/menu-header.jpeg";
import Heading from "../_components/Heading";

export default function MenuHeader() {
  return (
    <Header img={headerImg} className="grid grid-cols-2">
      <div>
        <Heading type="hero" className="mb-12">
          View Our New Menu
        </Heading>
        <Heading type="h5">The freshest ingredients for you every day</Heading>
      </div>
      <div></div>
    </Header>
  );
}
