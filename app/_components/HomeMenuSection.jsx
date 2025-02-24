import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";
import MenuItem from "./MenuItem";
import Subtext from "./Subtext";
import ScrollEffectComponent from "./ScrollEffectComponent";

import sectionImg from "@/public/images/home/menu-section-img.png";
import { getMeals } from "../_lib/data-service";

export default async function HomeMenuSection() {
  const menu = await getMeals();

  return (
    <section className="bg-accent-50 pt-20 pb-20 md:pt-44 md:pb-52 relative">
      <Image
        src={sectionImg}
        alt="Olive branch corner image"
        className="absolute top-0 right-0 w-50vw"
      />

      <ScrollEffectComponent>
        <Container>
          <div className="mb-6 md:mb-36 text-center md:text-left">
            <Heading type="h1">Our menu</Heading>
            <Subtext>This is a section of your menu. Give your section a brief description</Subtext>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12 md:gap-x-[60px] md:gap-y-24 items-start">
            {menu.slice(0, 4).map((item) => (
              <MenuItem item={item} key={item.id} />
            ))}
          </div>
        </Container>
      </ScrollEffectComponent>
    </section>
  );
}
