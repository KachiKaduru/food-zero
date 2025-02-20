import Image from "next/image";
import Heading from "@/app/_components/Heading";
import Subtext from "@/app/_components/Subtext";
import MenuItem from "@/app/_components/MenuItem";
import ScrollEffectComponent from "../_components/ScrollEffectComponent";
import { getMealsByCategory } from "../_lib/data-service";
import { Avocado } from "../_lib/icons";
import Link from "next/link";

export default async function MenuCategory({ item }) {
  const { category, img, title, description, filter } = item;

  const meals = await getMealsByCategory(category);
  const data = meals.slice(0, 3);

  return (
    <section className="py-24">
      <ScrollEffectComponent>
        <div>
          <div className="text-center mb-20 relative">
            {category === "Drinks" && (
              <Avocado className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2" />
            )}
            <Heading type="h1">{title}</Heading>
            <Subtext>{description}</Subtext>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div
              className={`grid relative row-span-full ${
                category === "Lunch" && "col-start-2 col-end-3"
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
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href={`/menu/meals?category=${filter}`}
            className="px-9 py-6 bg-primary-200 text-accent-50  hover:bg-primary-300"
          >
            <Heading type="h5">See more &rarr;</Heading>
          </Link>
        </div>
      </ScrollEffectComponent>
    </section>
  );
}
