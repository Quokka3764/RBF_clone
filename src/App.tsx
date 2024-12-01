import Navigation from "./components/navigation";
import Sidebar from "./components/sidebar";
import Contents from "./components/contents";

export default function App() {
  return (
    <>
      <div className="flex flex-col bg-[#0f0f0f] min-h-screen w-screen overflow-auto">
        <Navigation />
        <div className="flex flex-row flex-grow">
          <Sidebar />
          <div className="flex-grow top-20 right-20">
            <Contents />
          </div>
        </div>
      </div>
    </>
  );
}
