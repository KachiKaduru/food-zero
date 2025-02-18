import Container from "@/app/_components/Container";
import MealsHeader from "./MealsHeader";
import MealsFilter from "@/app/_components/MealsFilter";
import MealsList from "./MealsList";
import { Suspense } from "react";

export const metadata = {
  title: "Meals",
};

export default async function MealsPage({ searchParams }) {
  const { category } = await searchParams;
  const filter = category ?? "all";

  return (
    <div>
      <MealsHeader />

      <Container className="py-[120px] grid gap-7">
        <MealsFilter />

        <MealsList filter={filter} />

        {/* fallback={<Spinner />}  */}
        {/* <Suspense key={filter}>
        </Suspense> */}
      </Container>
    </div>
  );
}
