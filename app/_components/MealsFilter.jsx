"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { lato } from "../_fonts/fonts";
import { mealsFilter } from "../_lib/placeholderData";

export default function MealsFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex gap-9 w-fit mx-auto">
      {mealsFilter.map((filter, i) => (
        <FilterButton key={i} filterFunction={handleFilter} filter={filter} />
      ))}
    </div>
  );
}

function FilterButton({ filterFunction, filter }) {
  const { title, type } = filter;

  return (
    <button className={`${lato.className} text-xl`} onClick={() => filterFunction(type)}>
      {title}
    </button>
  );
}
