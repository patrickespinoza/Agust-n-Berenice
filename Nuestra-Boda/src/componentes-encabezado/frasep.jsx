
import React from "react";
import { motion } from "framer-motion";

export default function FraseP() {
  return (
    <section
      id="frase-biblica"
      aria-labelledby="titulo-frase-biblica"
      className="relative isolate overflow-hidden bg-[#D6EDF5] px-5 py-20 text-center text-[#173D50] sm:px-8 sm:py-28"
    >
      {/* Luces y detalles discretos de la invitación */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-white/65 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#8FB7D5]/35 blur-3xl" />
      <div className="pointer-events-none absolute inset-4 border border-[#8FB7D5]/50 sm:inset-7" />
      <div className="pointer-events-none absolute inset-[22px] border border-white/60 sm:inset-9" />

      <motion.div
        className="relative mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[10px] uppercase tracking-[0.34em] text-[#29485A]">
          Una promesa para siempre
        </p>

        <div className="mx-auto my-7 flex items-center justify-center gap-4" aria-hidden="true">
          <span className="h-px w-12 bg-[#8FB7D5] sm:w-20" />
          <span className="h-2 w-2 rotate-45 border border-[#57B9CC]" />
          <span className="h-px w-12 bg-[#8FB7D5] sm:w-20" />
        </div>

        <h2
          id="titulo-frase-biblica"
          className="font-serif text-3xl font-normal italic leading-tight sm:text-4xl"
        >
          Más valen dos que uno
        </h2>

        <blockquote className="mx-auto mt-8 max-w-2xl font-serif text-lg leading-[1.9] text-[#26343B] sm:text-xl sm:leading-[1.9]">
          <p>
            “Más valen dos que uno, porque obtienen más fruto de su esfuerzo.
            Si caen, el uno levanta al otro. ¡Ay del que cae y no tiene quien
            lo levante! Si dos se acuestan juntos, entrarán en calor; uno solo
            ¿cómo va a calentarse? Uno solo puede ser vencido, pero dos pueden
            resistir. ¡La cuerda de tres hilos no se rompe fácilmente!”
          </p>
          <footer className="mt-8 text-sm font-normal uppercase tracking-[0.18em] text-[#29485A] sm:text-base">
            Eclesiastés 4:9–12
          </footer>
        </blockquote>
      </motion.div>
    </section>
  );
}
