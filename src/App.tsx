import Navigation from "./components/navigation";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <>
      <div className="flex flex-col bg-[#0f0f0f] w-screen">
        <Navigation />
        <Sidebar />
      </div>
    </>
  );
}
