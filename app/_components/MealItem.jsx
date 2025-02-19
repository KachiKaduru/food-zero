import Image from "next/image";
import Heading from "./Heading";

export default function MealItem({ meal }) {
  const { image, name, category, second_category, price } = meal;
  return (
    <div className="relative">
      <Image src={image} alt={name} fill className=" flex-1 object-cover -z-10" />

      <p>00</p>
      <Heading type="h4">{name}</Heading>
      <p>
        Categories: {category}, {second_category}
      </p>
    </div>
  );
}
