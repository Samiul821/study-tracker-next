import Link from "next/link";
import {
  IoRocketSharp,
  IoStatsChartSharp,
  IoTimeSharp,
  IoTrophySharp,
} from "react-icons/io5";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <main className="relative">Home</main>
    </div>
  );
}
