import Heading from "./Heading";
import Subtext from "./Subtext";

export default function MenuItem({ item }) {
  const { name, price, description } = item;
  return (
    <div className="grid gap-3 sm:gap-6">
      <Heading type="h4" className="border-b border-accent-300 border-dashed text-right p-3">
        ${price}
      </Heading>
      <Heading type="h3">{name}</Heading>
      <Subtext>{description}</Subtext>
    </div>
  );
}
