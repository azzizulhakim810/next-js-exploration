import SharedButton from "./components/SharedButton";
import SortProducts from "./components/SortProducts";

export const metadata = {
  title: "Home",
  description: "This is next arena",
};
export default function Home() {
  return (
    <>
      <div className="flex justify-center align-middle">
        <h1 className="text-5xl py-10">Welcome to our arena</h1>
      </div>

      <div className="flex justify-center gap-5">
        <SharedButton path="/dashboard/settings">Go to settings</SharedButton>
        <SharedButton path="/dashboard/analytics">Go to Analytics</SharedButton>
        <SortProducts />
      </div>
    </>
  );
}
