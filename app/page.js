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
        <div className="text-center py-10">
          <h1 className="text-5xl pb-4">Welcome to our arena</h1>
          <p>Keep your eye on</p>
        </div>
      </div>

      <div className="flex justify-center gap-5">
        <SharedButton path="/dashboard/settings">Go to settings</SharedButton>
        <SharedButton path="/dashboard/analytics">Go to Analytics</SharedButton>
        <SortProducts />
      </div>
    </>
  );
}
