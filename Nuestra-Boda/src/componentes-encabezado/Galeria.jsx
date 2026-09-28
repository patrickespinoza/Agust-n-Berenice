// NuestraHistoria.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";

const images = [
  "/Carrusel01v.jpg",
  "/Carrusel02.jpg",
  "/Carrusel04.jpg",
  "/Carrusel05.jpg",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function NuestraHistoria() {
  const [index, setIndex] = useState(0);

  // Precarga las imágenes para evitar destellos al cambiar de foto.
  useEffect(() => {
    images.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const nextImage = () => {
    setIndex((current) => (current + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <motion.section
      id="nuestra-historia"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="relative isolate w-full overflow-hidden bg-white px-5 py-20 text-[#111B21] sm:px-8 sm:py-24 md:py-28"
    >
      {/* FONDO BLANCO, DIFERENTE AL CELESTE DE UBICACIÓN */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_65%,#F7FBFD_100%)]" />

      {/* DETALLE DE LUZ AQUA */}
      <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[450px] w-[450px] rounded-full bg-[#A8DFE1]/20 blur-3xl" />

      {/* DECORACIÓN BOTÁNICA */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -left-12 h-64 w-52 text-[#77A7CA]/25 sm:h-80 sm:w-64"
        viewBox="0 0 250 320"
        fill="none"
      >
        <path
          d="M28 310C73 242 96 177 113 97C121 59 137 30 164 8"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M96 176C67 159 43 167 25 194M107 133C81 112 58 116 39 140M117 92C98 70 81 65 60 74M86 216C114 208 135 219 149 244M108 146C135 144 153 157 165 180M128 67C149 69 164 81 174 101"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* ENCABEZADO */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8FB7D5]/70 bg-[#D6EDF5]/55"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Heart
              size={18}
              strokeWidth={1.35}
              className="text-[#316477]"
            />
          </motion.div>

          <motion.p
            className="mt-6 text-[9px] uppercase tracking-[0.36em] text-[#29485A] sm:text-[10px]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Un recorrido por nuestros recuerdos
          </motion.p>

          <motion.h2
            className="mt-4 font-serif text-4xl font-normal text-[#111B21] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Nuestra historia
          </motion.h2>

          <motion.div
            className="mt-6 flex items-center gap-4"
            initial={{ opacity: 0, scaleX: 0.7 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            <span className="h-px w-12 bg-[#8FB7D5] sm:w-20" />
            <span className="h-2 w-2 rotate-45 border border-[#57B9CC]" />
            <span className="h-px w-12 bg-[#8FB7D5] sm:w-20" />
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#26343B] sm:text-xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Cada imagen guarda un instante, una sonrisa y un recuerdo que nos
            trajo hasta aquí.
          </motion.p>
        </div>

        {/* CARRUSEL */}
        <motion.div
          className="relative mx-auto mt-12 w-full max-w-4xl"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="absolute inset-x-10 bottom-5 h-16 rounded-full bg-[#29485A]/15 blur-2xl" />

          {/* MARCO CLÁSICO */}
          <div className="relative border border-[#8FB7D5]/70 bg-[#F8FCFD] p-3 shadow-[0_28px_85px_rgba(41,72,90,0.13)] sm:p-5 md:p-6">
            <div className="pointer-events-none absolute inset-2 border border-[#8FB7D5]/35 sm:inset-3" />

            <span className="pointer-events-none absolute left-2 top-2 h-7 w-7 border-l border-t border-[#57B9CC]/70 sm:left-3 sm:top-3" />
            <span className="pointer-events-none absolute right-2 top-2 h-7 w-7 border-r border-t border-[#57B9CC]/70 sm:right-3 sm:top-3" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-7 w-7 border-b border-l border-[#57B9CC]/70 sm:bottom-3 sm:left-3" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-7 w-7 border-b border-r border-[#57B9CC]/70 sm:bottom-3 sm:right-3" />

            <div className="relative z-10">
              {/* FOTOS */}
              <div className="relative mx-auto h-[390px] w-full max-w-[600px] overflow-hidden bg-[#D6E8F3] sm:h-[470px] md:h-[540px]">
                <div
                  className="flex h-full transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                  }}
                >
                  {images.map((src, imageIndex) => (
                    <div
                      key={src}
                      className="h-full w-full shrink-0"
                      aria-hidden={index !== imageIndex}
                    >
                      <img
                        src={src}
                        alt={`Recuerdo de Agustín y Berenice ${imageIndex + 1}`}
                        className="h-full w-full object-contain"
                        loading={imageIndex === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTROLES DEBAJO DE LAS FOTOS */}
              <div className="mt-5 flex items-center justify-center gap-5">
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Ver foto anterior"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8FB7D5] bg-white text-[#29485A] transition hover:bg-[#D6EDF5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29485A]"
                >
                  <ArrowLeft size={17} strokeWidth={1.5} />
                </button>

                <div
                  className="flex items-center justify-center gap-2"
                  aria-label={`Foto ${index + 1} de ${images.length}`}
                >
                  {images.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      type="button"
                      onClick={() => setIndex(dotIndex)}
                      aria-label={`Ver foto ${dotIndex + 1}`}
                      aria-current={index === dotIndex ? "true" : undefined}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === dotIndex
                          ? "scale-125 bg-[#29485A]"
                          : "bg-[#8FB7D5]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Ver foto siguiente"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8FB7D5] bg-white text-[#29485A] transition hover:bg-[#D6EDF5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29485A]"
                >
                  <ArrowRight size={17} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXTO FINAL */}
        <motion.div
          className="mx-auto mt-10 flex max-w-xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#57B9CC] to-transparent" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-[#29485A]">
            Y lo mejor de nuestra historia
          </p>

          <p className="mt-3 font-serif text-xl italic text-[#111B21] sm:text-2xl">
            apenas está por comenzar
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}