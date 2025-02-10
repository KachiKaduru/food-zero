import Image from "next/image";
import Container from "../_components/Container";
import Heading from "../_components/Heading";
import ScrollEffectComponent from "../_components/ScrollEffectComponent";
import { Rosemary } from "../_lib/icons";

import sliceImg from "@/public/images/about/slice-img.jpeg";
import pickledImg from "@/public/images/about/pickled-img.jpeg";
import bakedImg from "@/public/images/about/baked-img.jpeg";
import Subtext from "../_components/Subtext";

export default function AboutProcess() {
  return (
    <section className="relative">
      <Rosemary className="absolute top-0 right-0" />
      <Container className="py-48">
        <div className="mb-32 text-center">
          <Heading type="h1">Sophisticated Process</Heading>
        </div>

        <div className="grid grid-cols-2 gap-x-20 gap-y-28">
          <ScrollEffectComponent className="col-span-full ">
            <div className="grid grid-cols-2 gap-20">
              <div className="h-[478px] relative">
                <Image
                  src={sliceImg}
                  alt="Meat being sliced"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="justify-items-center">
                <Heading type="h2">01.Slice</Heading>
                <Subtext>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
                  imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis
                  pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec
                  nam etiam.
                </Subtext>
              </div>
            </div>
          </ScrollEffectComponent>

          <SingleProcess
            title="02.Pickled"
            img={pickledImg}
            reverse
            className="col-start-2 col-end-3"
            margin="mb-24"
          />
          <SingleProcess
            title="03.Bake"
            img={bakedImg}
            className="row-start-2 row-end-3"
            margin="mt-28"
          />
        </div>
      </Container>
    </section>
  );
}

function SingleProcess({
  title = "",
  subtext = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
  className = "",
  img,
  reverse = false,
  margin = "",
}) {
  return (
    <ScrollEffectComponent className={className}>
      <div className={`flex gap-11 ${!reverse ? "flex-col" : "flex-col-reverse"} px-14`}>
        <div className={`grid gap-7 ${margin}`}>
          <Heading type="h2">{title}</Heading>
          <Subtext>{subtext}</Subtext>
        </div>

        <div className="h-96 relative">
          <Image src={img} alt="Meat being pickled and seasoned" fill className="object-cover" />
        </div>
      </div>
    </ScrollEffectComponent>
  );
}
