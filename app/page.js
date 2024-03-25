// import Image from "next/image";

import { Nav, Hero, About, Footer } from "./sections";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#e5e5e5]">

      <header className="padding  absolute w-full"><Nav /></header>

      <section className="padding"><Hero /></section>

      <section className="padding"><About /></section>

      <section className="padding bg-black"><Footer /></section>
    </main>
  );
}
