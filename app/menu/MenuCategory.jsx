import Image from "next/image";
import Heading from "@/app/_components/Heading";
import Subtext from "@/app/_components/Subtext";
import MenuItem from "@/app/_components/MenuItem";
import { menuData } from "../_lib/placeholderData";
import ScrollEffectComponent from "../_components/ScrollEffectComponent";

export default function MenuCategory({ item }) {
  const { category, img, title, description } = item;
  const data = menuData.filter((item) => item.category === category);

  return (
    <section className="py-24">
      <ScrollEffectComponent>
        <div className="text-center mb-20">
          <Heading type="h1">{title}</Heading>
          <Subtext>{description}</Subtext>
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div
            className={`grid relative row-span-full ${
              category === "main" && "col-start-2 col-end-3"
            }`}
          >
            <Image
              src={img}
              className="object-cover object-top"
              fill
              alt={`First meal on the ${title} menu`}
            />
          </div>

          <div className="grid gap-11 ">
            {data.map((item) => (
              <MenuItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </ScrollEffectComponent>
    </section>
  );
}
