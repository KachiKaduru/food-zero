import Image from "next/image";
import Heading from "./Heading";
import Subtext from "./Subtext";

export default function MealItem({ meal, className = "" }) {
  const { image, name, category, second_category } = meal;

  return (
    <div
      className={`menu-grid-item ${className} relative opacity-0 animate-fadeIn h-full w-full grid items-end`}
    >
      <Image src={image} alt={name} fill className=" flex-1 object-cover object-center -z-10" />

      <div className="">
        <Heading type="h4" className="text-accent-50 mb-5">
          {name}
        </Heading>
        <Subtext className="text-accent-50 capitalize">
          {category} . {second_category}
        </Subtext>
      </div>
    </div>
  );
}
