import Header from "../_components/Header";
import Heading from "../_components/Heading";
import headerImg from "@/public/images/about-header.jpeg";

export default function AboutHeader() {
  return (
    <Header img={headerImg} className="grid grid-cols-[0.6fr_0.4fr]">
      <div>
        <Heading type="hero" className="mb-12">
          Who We Are
        </Heading>
        <Heading type="h5">
          The most important thing for us is to give you the comfortable dining experience
        </Heading>
      </div>
      <div></div>
    </Header>
  );
}
