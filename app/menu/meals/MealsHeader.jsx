import Header from "@/app/_components/Header";
import Heading from "@/app/_components/Heading";
import mealsImg from "@/public/images/menu/meals-header.jpg";

export default function MealsHeader() {
  return (
    <div>
      <Header img={mealsImg} position="object-bottom">
        <Heading type="hero" className="text-center">
          All the meals
        </Heading>
      </Header>
    </div>
  );
}
