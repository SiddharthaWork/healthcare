import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Form from "@/Components/Form";
import Footer from "@/Components/Footer";
import Overview from "@/Components/Overview"; 
import Features from "@/Components/Features";
import Contact from "@/Components/Contact";
import Solutions from "@/Components/Solutions";
import Services from "@/Components/Services";
import Choice from "@/Components/Choice";
import Creative from "@/Components/Creative";
import Things from "@/Components/Things";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Overview />
      <Features/>
      <Contact/>
      <Solutions/>
      <Services/>
      <Choice/>
      <Creative/>
      <Form />
      <Things/>
      <Footer />
    </div>
  );
}