import Header from "@/app/_components/Header";
import headerImg from "@/public/images/about-header.jpeg";
import Heading from "../_components/Heading";

export const metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <div>
      <Header img={headerImg} className="grid grid-cols-[0.4fr_0.6fr]">
        <div></div>
        <div className="pr-[100px]">
          <Heading type="hero" className="mb-12">
            Who We Are
          </Heading>
          <Heading type="h5">
            The most important thing for us is to give you the comfortable dining experience
          </Heading>
        </div>
      </Header>
      <h2>About page</h2>
    </div>
  );
}
