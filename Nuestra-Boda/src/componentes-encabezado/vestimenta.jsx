// Vestimenta.jsx
import React from "react";
import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Vestimenta() {
  return (
    <motion.section
      id="vestimenta"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative overflow-hidden bg-white px-6 py-24 text-center text-[#111B21] sm:py-28"
    >
      {/* MARCO CLÁSICO */}
      <div className="pointer-events-none absolute inset-4 border border-[#8FB7D5]/45 sm:inset-6" />

      <div className="relative mx-auto max-w-xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#8FB7D5] bg-[#D6EDF5]">
          <Shirt
            size={24}
            strokeWidth={1.35}
            className="text-[#29485A]"
          />
        </div>

        <p className="mt-7 text-[10px] uppercase tracking-[0.32em] text-[#29485A]">
          Para nuestro gran día
        </p>

        <h2 className="mt-4 font-serif text-4xl font-normal text-[#111B21] sm:text-5xl">
          Código de vestimenta
        </h2>

        <div className="mt-7 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#8FB7D5] sm:w-16" />
          <span className="h-2 w-2 rotate-45 border border-[#57B9CC]" />
          <span className="h-px w-12 bg-[#8FB7D5] sm:w-16" />
        </div>

        <p className="mt-9 font-serif text-3xl italic text-[#29485A] sm:text-4xl">
          Casual
        </p>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#26343B] sm:text-base">
          Queremos que te sientas cómodo y disfrutes cada momento con nosotros.
          Puedes elegir un atuendo casual que te haga sentir bien.
        </p>

        <div className="mx-auto mt-8 max-w-sm border-t border-[#8FB7D5]/60 pt-7">
          <p className="text-sm leading-7 text-[#26343B] sm:text-base">
            Solo te pedimos evitar los colores{" "}
            <strong className="font-semibold text-[#29485A]">
              azul y blanco
            </strong>
            .
          </p>
        </div>
      </div>
    </motion.section>
  );
}