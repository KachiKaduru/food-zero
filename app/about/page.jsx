import Header from "@/app/_components/Header";
import headerImg from "@/public/images/about-header.jpeg";
import Heading from "../_components/Heading";
import Container from "../_components/Container";
import { lato } from "../_fonts/fonts";
import Image from "next/image";

export const metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <div>
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

      <section>
        <Container className="grid grid-cols-2">
          <div>
            <Heading type="h1">Our story</Heading>
            <p className={`${lato.className}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
              imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.{" "}
            </p>
          </div>

          <div className="h-80 relative">
            <Image
              src={"/images/about/about-story-img.jpeg"}
              fill
              className="object-cover object-center"
              alt="Chefs cooking"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
