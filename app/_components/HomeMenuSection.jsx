import Image from "next/image";
import { menuData } from "../_lib/placeholderData";
import Container from "./Container";
import Heading from "./Heading";
import MenuItem from "./MenuItem";
import Subtext from "./Subtext";

import sectionImg from "@/public/images/home/menu-section-img.png";
import ScrollEffectComponent from "./ScrollEffectComponent";

export default function HomeMenuSection() {
  return (
    <section className="bg-accent-50 pt-44 pb-52 relative">
      <Image
        src={sectionImg}
        alt="Olive branch corner image"
        className="absolute top-0 right-0 w-50vw"
      />

      <ScrollEffectComponent>
        <Container>
          <div className="mb-36">
            <Heading type="h1">Our menu</Heading>
            <Subtext>This is a section of your menu. Give your section a brief description</Subtext>
          </div>

          <div className="grid grid-cols-2 gap-x-[60px] gap-y-24 items-start">
            {menuData.slice(0, 4).map((item) => (
              <MenuItem item={item} key={item.id} />
            ))}
          </div>
        </Container>
      </ScrollEffectComponent>
    </section>
  );
}
