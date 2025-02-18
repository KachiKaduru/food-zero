import Container from "@/app/_components/Container";
import Heading from "@/app/_components/Heading";
import { getMeals } from "@/app/_lib/data-service";
import { mealsFilter } from "@/app/_lib/placeholderData";

export default async function MealsList({ filter }) {
  const meals = await getMeals();
  const { title } = mealsFilter.filter((meal) => meal.type === filter).at(0);
  const displayedMeals = filter === "all" ? meals : meals.filter((meal) => meal.category === title);

  return (
    <div>
      {displayedMeals.map((meal, i) => (
        <div key={i}>
          <p>{i + 1}. </p>
          <Heading type="h4">{meal.name}</Heading>
          <p>
            Categories: {meal.category}, {meal.second_category}
          </p>
        </div>
      ))}
    </div>
  );
}
