import Image from "next/image";
import Container from "../_components/Container";
import Heading from "../_components/Heading";
import Subtext from "../_components/Subtext";
import { Tomato } from "../_lib/icons";

export default function AboutStory() {
  return (
    <section className="pt-40 pb-24">
      <Container className="grid grid-cols-2 gap-20">
        <div className="place-self-end pb-16 relative">
          <Heading type="h1">Our story</Heading>
          <Subtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
            imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
          </Subtext>
        </div>

        <div className="h-96 relative">
          <Tomato className="absolute -top-[80px] -left-[230px]" />

          <Image
            src={"/images/about/about-story-img.jpeg"}
            fill
            className="object-cover object-center"
            alt="Chefs cooking"
          />
        </div>
      </Container>
    </section>
  );
}
