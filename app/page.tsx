import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import MouseEffect from "@/components/MouseEffect";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <MouseEffect />
      <Hero />
     <AboutMe />
    </div>
  )
}