// DireccionEvento.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowUpRight,
  Church,
  PartyPopper,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const eventos = [
  {
    titulo: "Ceremonia religiosa",
    hora: "11:00 a. m.",
    lugar: "Parroquia de la Santísima Trinidad",
    direccion: "Sanctorum, Cuautlancingo, Puebla",
    enlace: "https://maps.app.goo.gl/suaJTMQ1ERgjtUwe9",
    Icono: Church,
  },
  {
    titulo: "Recepción",
    hora: "2:00 p. m.",
    lugar: "Recepción",
    direccion: "",
    enlace: "https://maps.app.goo.gl/hS1aapkqcQWQzDbM9",
    Icono: PartyPopper,
  },
];

export default function DireccionEvento() {
  return (
    <motion.section
      id="ubicacion"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="relative isolate w-full overflow-hidden bg-[#D6EDF5] px-5 py-20 text-[#111B21] sm:px-8 sm:py-24 md:py-28"
    >
      {/* FONDO CELESTE */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(150deg,#EAF6FA_0%,#D6EDF5_55%,#BBDDEB_100%)]" />

      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-white/55 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[430px] w-[430px] rounded-full bg-[#A8DFE1]/35 blur-3xl" />

      {/* ORNAMENTACIÓN LATERAL */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 bottom-0 h-64 w-52 text-[#77A7CA]/30 sm:h-80 sm:w-64"
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

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-0 h-64 w-52 rotate-180 text-[#77A7CA]/25 sm:h-80 sm:w-64"
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

      {/* TARJETA PRINCIPAL */}
      <div className="relative mx-auto max-w-5xl border border-[#8FB7D5]/70 bg-white/65 px-5 py-12 text-center shadow-[0_25px_75px_rgba(41,72,90,0.12)] backdrop-blur-sm sm:px-9 md:px-14 md:py-16">
        <div className="pointer-events-none absolute inset-2 border border-[#8FB7D5]/40 sm:inset-3" />

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] uppercase tracking-[0.36em] text-[#29485A]">
            Nuestro gran día
          </p>

          <h2 className="mt-4 font-serif text-4xl font-normal text-[#111B21] sm:text-5xl">
            ¿Cuándo y dónde?
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#8FB7D5] sm:w-20" />
            <span className="h-2 w-2 rotate-45 border border-[#57B9CC]" />
            <span className="h-px w-12 bg-[#8FB7D5] sm:w-20" />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[#26343B]">
            <span className="inline-flex items-center gap-2 text-sm">
              <CalendarDays
                size={17}
                strokeWidth={1.5}
                className="text-[#316477]"
              />
              Sábado 05 de diciembre de 2026
            </span>
          </div>
        </motion.div>

        {/* CEREMONIA Y RECEPCIÓN */}
        <div className="relative mt-10 grid gap-5 md:grid-cols-2">
          {eventos.map(
            (
              { titulo, hora, lugar, direccion, enlace, Icono },
              index
            ) => (
              <motion.article
                key={titulo}
                className="flex h-full flex-col items-center border border-[#8FB7D5]/65 bg-white px-5 py-9 shadow-[0_12px_35px_rgba(41,72,90,0.07)] sm:px-8"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8FB7D5] bg-[#D6EDF5]">
                  <Icono
                    size={24}
                    strokeWidth={1.35}
                    className="text-[#173D50]"
                  />
                </div>

                <p className="mt-6 text-[10px] uppercase tracking-[0.28em] text-[#29485A]">
                  {titulo}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[#29485A]">
                  <Clock3 size={16} strokeWidth={1.5} />
                  <span className="font-serif text-2xl text-[#111B21]">
                    {hora}
                  </span>
                </div>

                <span className="mt-6 h-px w-14 bg-[#57B9CC]/70" />

                <MapPin
                  size={19}
                  strokeWidth={1.4}
                  className="mt-6 text-[#316477]"
                />

                <h3 className="mt-3 max-w-xs font-serif text-xl font-normal leading-snug text-[#111B21] sm:text-2xl">
                  {lugar}
                </h3>

                {direccion && (
                  <p className="mt-2 text-sm leading-relaxed text-[#26343B]">
                    {direccion}
                  </p>
                )}

                <a
                  href={enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ubicación de ${titulo} en Google Maps`}
                  className="group mt-auto inline-flex min-h-12 items-center justify-center gap-2 border border-[#29485A] bg-[#29485A] px-6 py-3 text-[10px] uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#173D50]"
                  style={{ marginTop: "2rem" }}
                >
                  Ver ubicación
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </motion.article>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}