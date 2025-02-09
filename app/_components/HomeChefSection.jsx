import Image from "next/image";
import Container from "./Container";
import chefImg from "@/public/images/home/chef.png";
import Heading from "./Heading";
import Subtext from "./Subtext";
import { Leaf } from "../_lib/icons";

export default function HomeChefSection() {
  return (
    <section className="bg-primary-50 pt-44">
      <Container className="grid grid-cols-2 gap-[60px]">
        <div className="relative w-full z-20">
          <Leaf type="mini" className="absolute -top-[100px] -left-10 w-[45%] z-10" />
          <Image src={chefImg} alt="Chef cooking" className="z-20" />
        </div>

        <div className="grid gap-[18px]">
          <Heading type="h1">Excellent cook</Heading>
          <Subtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
            imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
          </Subtext>

          <div className="w-full h-full flex justify-center">
            <Leaf className="w-2/3" />
          </div>
        </div>
      </Container>
    </section>
  );
}
