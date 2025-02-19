import MealItem from "@/app/_components/MealItem";
import { getMeals } from "@/app/_lib/data-service";
import { mealsFilter } from "@/app/_lib/placeholderData";

export default async function MealsList({ filter }) {
  const meals = await getMeals();
  const { title } = mealsFilter.filter((meal) => meal.type === filter).at(0);
  const displayedMeals = filter === "all" ? meals : meals.filter((meal) => meal.category === title);

  return (
    <div className="grid grid-cols-3 grid-rows-[400px,400px]">
      {displayedMeals.map((meal, i) => (
        <MealItem meal={meal} key={i} />
      ))}
    </div>
  );
}
