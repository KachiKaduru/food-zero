import PaginatedMenu from "@/app/_components/PaginatedMenu";
import { getMeals } from "@/app/_lib/data-service";
import { mealsFilter } from "@/app/_lib/placeholderData";

export default async function MealsList({ filter }) {
  const meals = await getMeals();
  const { title } = mealsFilter.filter((meal) => meal.type === filter).at(0);
  const displayedMeals = filter === "all" ? meals : meals.filter((meal) => meal.category === title);

  return <PaginatedMenu meals={displayedMeals} filter={filter} />;
}
