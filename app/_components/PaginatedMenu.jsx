"use client";

import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function PaginatedMenu({ meals, filter }) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(meals.length / itemsPerPage);

  const totalMeals = meals.length < itemsPerPage ? meals.length : currentPage * itemsPerPage;
  const displayedMeals = meals.slice((currentPage - 1) * itemsPerPage, totalMeals);

  useEffect(() => {
    function resetState() {
      if (filter !== "all") setCurrentPage(1);
    }
    resetState();
  }, [filter]);

  return (
    <section>
      <div className="grid grid-cols-3">
        {displayedMeals.map((meal, i) => (
          <MealItem meal={meal} key={i} />
        ))}
      </div>
      <PaginationControl totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </section>
  );
}

function PaginationControl({ totalPages, setCurrentPage }) {
  return (
    <div className="flex gap-2 w-fit mx-auto">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className="text-xl px-3 py-2 bg-primary-100 text-accent-50"
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
