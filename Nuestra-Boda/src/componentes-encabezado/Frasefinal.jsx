// FraseBiblica.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FraseBiblica() {
  return (
    <motion.section
      id="frase-biblica"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative isolate overflow-hidden bg-[#A8DFE1] px-6 py-28 text-[#111B21] sm:py-32"
    >
      {/* FONDO AQUA */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#BCE9EA_0%,#A8DFE1_55%,#8FD1D8_100%)]" />

      {/* LUCES SUAVES */}
      <div className="pointer-events-none absolute -left-40 -top-32 -z-10 h-[450px] w-[450px] rounded-full bg-white/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#77A7CA]/20 blur-3xl" />

      {/* MARCO CLÁSICO */}
      <div className="pointer-events-none absolute inset-4 border border-[#29485A]/35 sm:inset-6" />

      <div className="pointer-events-none absolute inset-[22px] border border-white/40 sm:inset-8" />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#29485A]">
          Una promesa
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-[#29485A]/50" />
          <span className="h-2 w-2 rotate-45 border border-[#29485A]" />
          <span className="h-px w-14 bg-[#29485A]/50" />
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="mt-12 font-serif text-[1.85rem] italic leading-[1.5] text-[#111B21] sm:text-[2.6rem] md:text-[3.2rem]"
        >
          Donde quiera que vayas,
          <br />
          iré yo también.
          <br />
          <br />
          Donde tú permanezcas,
          <br />
          permaneceré contigo.
        </motion.blockquote>

        <div className="mx-auto mt-14 h-px w-28 bg-gradient-to-r from-transparent via-[#29485A] to-transparent" />

        <p className="mt-7 text-xs uppercase tracking-[0.3em] text-[#29485A]">
          Libro de Rut 1:16
        </p>
      </div>
    </motion.section>
  );
}