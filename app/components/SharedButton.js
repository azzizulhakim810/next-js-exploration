"use client";
import { useRouter } from "next/navigation";

function SharedButton({ children, path }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(path);
  };
  return (
    <button
      onClick={handleClick}
      className=" px-3 py-2 text-white bg-green-700"
    >
      {children}
    </button>
  );
}

export default SharedButton;
