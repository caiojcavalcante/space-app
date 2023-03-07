import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/sections/banner";
import Trajectory from "@/sections/trajectory";
import Abilities from "@/sections/abilities";
import Projects from "@/sections/projects";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Caio's space"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="This is caio's space" />
      </Head>
      <Banner />
      <Trajectory />
      {/* <Abilities /> */}
      <Projects />
      <Contact />
    </>
  );
}
