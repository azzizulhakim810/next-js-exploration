"use client";

import { useSearchParams } from "next/navigation";

export default function SortProducts() {
  const searchParams = useSearchParams();
  console.log(searchParams);

  function updateSorting(sortOrder) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", sortOrder);
    // console.log(params.toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <>
      <button
        className="border-[1px] px-3"
        onClick={() => updateSorting("asc")}
      >
        Sort Ascending
      </button>
      <button
        className="border-[1px] px-3"
        onClick={() => updateSorting("desc")}
      >
        Sort Descending
      </button>
    </>
  );
}
