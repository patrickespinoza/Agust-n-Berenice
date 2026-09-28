// Padrinos.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Padrinos() {
  return (
    <section
      id="padrinos"
      className="relative overflow-hidden bg-[#F3FAFC] px-6 py-20 text-center text-[#173D50] sm:py-28"
    >
      <div className="pointer-events-none absolute inset-4 border border-[#8FB7D5]/45 sm:inset-7" />
      <div className="pointer-events-none absolute inset-[22px] border border-[#8FB7D5]/20 sm:inset-9" />

      <motion.div
        className="relative mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-serif text-2xl text-[#8FB7D5]" aria-hidden="true">
          ✦
        </span>

        <h2 className="mt-4 font-serif text-4xl font-normal sm:text-5xl">
          Padrinos
        </h2>

        <div
          className="mx-auto my-9 flex items-center justify-center gap-4"
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-[#8FB7D5] sm:w-20" />
          <span className="h-2 w-2 rotate-45 border border-[#57B9CC]" />
          <span className="h-px w-12 bg-[#8FB7D5] sm:w-20" />
        </div>

        <div className="space-y-5 font-serif text-2xl leading-relaxed sm:text-3xl">
          <p>Miguel Ángel Munguía Galán</p>
          <p>Erika Díaz Tecocoatzi</p>
        </div>
      </motion.div>
    </section>
  );
}