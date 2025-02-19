"use client";

import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import { lato } from "../_fonts/fonts";
import MealsGridContainer from "./MealsGridContainer";

export default function PaginatedMenu({ meals, filter }) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(meals.length / itemsPerPage);

  const totalMeals = meals.length <= itemsPerPage ? meals.length : currentPage * itemsPerPage;
  const displayedMeals = meals.slice((currentPage - 1) * itemsPerPage, totalMeals);

  useEffect(() => {
    function resetState() {
      if (filter !== "all") setCurrentPage(1);
    }
    resetState();
  }, [filter]);

  return (
    <section className="grid gap-14">
      <div className="menu-grid">
        {displayedMeals.map((meal, i) => (
          <MealItem meal={meal} key={i} className="menu-grid-item" />
        ))}
      </div>

      <PaginationControl
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}

function PaginationControl({ totalPages, setCurrentPage, currentPage }) {
  return (
    <div className="flex gap-6 w-fit mx-auto px-5 border border-accent-100">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`${
            lato.className
          } text-2xl font-semibold px-6 py-4 text-accent-50 hover:bg-primary-200 ${
            currentPage === i + 1 ? "bg-primary-200" : "bg-primary-100"
          }`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
