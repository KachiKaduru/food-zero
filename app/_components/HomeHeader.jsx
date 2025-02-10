import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";
import Subtext from "./Subtext";

import headerImg from "@/public/images/home/header-img.jpeg";
import bottomImgOne from "@/public/images/home/bottom-img-1.jpeg";
import bottomImgTwo from "@/public/images/home/bottom-img-2.jpeg";

export default function HomeHeader() {
  return (
    <>
      <Container className="pb-40 text-accent-50">
        <div className="grid grid-cols-[0.55fr_0.45fr] mb-40">
          <Heading type="hero">Healthy Eating is important part of lifestyle</Heading>
          <div className="relative">
            <div className="relative h-[628px]">
              <Image src={headerImg} alt="Image" fill className="object-cover object-top" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="flex-col">
            <div className="relative h-[420px] mb-10">
              <Image
                src={bottomImgOne}
                alt="Fruit salad bowl"
                fill
                className="object-cover object-center"
              />
            </div>

            <div>
              <Heading type="h3" className="mb-10 w-[60%] leading-tight">
                Start to plan your diet today
              </Heading>
              <Subtext color="accent-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
              </Subtext>
            </div>
          </div>

          <div className=" flex-col w-[65%] ml-auto">
            <Subtext color="accent-50" className="mb-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
            </Subtext>
            <div className="relative h-[530px]">
              <Image src={bottomImgTwo} alt="Accessories" fill className="object-center" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
