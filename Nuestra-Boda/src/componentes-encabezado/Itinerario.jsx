// Itinerario.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  Camera,
  PartyPopper,
  UtensilsCrossed,
  Martini,
  GlassWater,
  Cake,
  Gift,
  Candy,
  Music2,
  Flower2,
  Sparkles,
} from "lucide-react";

const events = [
  {
    time: "11:00",
    period: "a. m.",
    title: "Ceremonia religiosa",
    icon: Church,
  },
  {
    time: "12:00",
    period: "p. m.",
    title: "Sesión de fotos de los novios",
    icon: Camera,
  },
  {
    time: "2:00",
    period: "p. m.",
    title: "Recepción",
    icon: PartyPopper,
  },
  {
    time: "2:00 – 5:00",
    period: "p. m.",
    title: "Comida",
    icon: UtensilsCrossed,
  },
  {
    time: "4:00",
    period: "p. m.",
    title: "Apertura de coctelería",
    icon: Martini,
  },
  {
    time: "5:00",
    period: "p. m.",
    title: "Brindis",
    icon: GlassWater,
  },
  {
    time: "5:20",
    period: "p. m.",
    title: "Partida de pastel",
    icon: Cake,
  },
  {
    time: "5:30",
    period: "p. m.",
    title: "Entrega de canastos",
    icon: Gift,
  },
  {
    time: "6:00",
    period: "p. m.",
    title: "Apertura de mesa de dulces",
    icon: Candy,
  },
  {
    time: "7:00",
    period: "p. m.",
    title: "Primer baile de los novios",
    description: "Después, vals familiar.",
    icon: Music2,
  },
  {
    time: "7:30",
    period: "p. m.",
    title: "Lanzamiento de ramo y corbata",
    icon: Flower2,
  },
  {
    time: "7:45",
    period: "p. m.",
    title: "Bailes tradicionales",
    icon: Music2,
  },
  {
    time: "8:30",
    period: "p. m.",
    title: "Hora loca",
    description: "¡Es tu momento de brillar!",
    icon: Sparkles,
  },
];

export default function Itinerario() {
  return (
    <section
      id="itinerario"
      className="relative isolate overflow-hidden bg-[#A9C5DF] px-5 py-20 text-[#111B21] sm:px-8 sm:py-24 md:py-28"
    >
      {/* FONDO SERENITY */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#BDD4E8_0%,#A9C5DF_50%,#94B6D4_100%)]" />

      {/* LUCES DISCRETAS */}
      <div className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[430px] w-[430px] rounded-full bg-white/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[430px] w-[430px] rounded-full bg-[#A8DFE1]/25 blur-3xl" />

      {/* ORNAMENTOS BOTÁNICOS */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-16 h-72 w-60 text-[#29485A]/20 sm:h-96 sm:w-80"
        viewBox="0 0 250 320"
        fill="none"
      >
        <path
          d="M28 310C73 242 96 177 113 97C121 59 137 30 164 8"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M96 176C67 159 43 167 25 194M107 133C81 112 58 116 39 140M117 92C98 70 81 65 60 74M86 216C114 208 135 219 149 244M108 146C135 144 153 157 165 180M128 67C149 69 164 81 174 101"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-10 h-72 w-60 rotate-180 text-[#29485A]/15 sm:h-96 sm:w-80"
        viewBox="0 0 250 320"
        fill="none"
      >
        <path
          d="M28 310C73 242 96 177 113 97C121 59 137 30 164 8"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M96 176C67 159 43 167 25 194M107 133C81 112 58 116 39 140M117 92C98 70 81 65 60 74M86 216C114 208 135 219 149 244M108 146C135 144 153 157 165 180M128 67C149 69 164 81 174 101"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* ENCABEZADO */}
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#29485A]">
            Programa de celebración
          </p>

          <h2 className="mt-4 font-serif text-4xl font-normal text-[#111B21] sm:text-5xl md:text-6xl">
            Itinerario
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#29485A]/50 sm:w-20" />
            <span className="h-2 w-2 rotate-45 border border-[#29485A]" />
            <span className="h-px w-12 bg-[#29485A]/50 sm:w-20" />
          </div>

          <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#26343B] sm:text-xl">
            Cada momento ha sido preparado para compartirlo contigo.
          </p>
        </motion.div>

        {/* PROGRAMA */}
        <div className="relative mx-auto mt-12 max-w-4xl border-y border-[#29485A]/40 sm:mt-16">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.article
                key={`${event.time}-${event.title}`}
                className={`relative grid grid-cols-[94px_minmax(0,1fr)] gap-4 px-1 py-6 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-9 sm:px-6 sm:py-8 md:grid-cols-[190px_minmax(0,1fr)] ${
                  index !== events.length - 1
                    ? "border-b border-[#29485A]/25"
                    : ""
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(index * 0.04, 0.25),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* HORA */}
                <div className="flex flex-col items-center justify-center border-r border-[#29485A]/35 pr-3 text-center sm:pr-9">
                  <time className="font-serif text-[21px] leading-tight text-[#111B21] sm:text-3xl md:text-4xl">
                    {event.time}
                  </time>

                  <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#29485A] sm:mt-2">
                    {event.period}
                  </span>
                </div>

                {/* EVENTO */}
                <div className="flex min-w-0 items-center gap-4 sm:gap-6">
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#29485A]/35 bg-white/65 sm:flex">
                    <Icon
                      size={20}
                      strokeWidth={1.4}
                      className="text-[#29485A]"
                    />
                  </div>

                  <div className="min-w-0">
                    <Icon
                      size={18}
                      strokeWidth={1.4}
                      className="mb-2 text-[#29485A] sm:hidden"
                    />

                    <h3 className="font-serif text-xl font-normal leading-snug text-[#111B21] sm:text-2xl md:text-3xl">
                      {event.title}
                    </h3>

                    {event.description && (
                      <p className="mt-2 text-sm leading-relaxed text-[#26343B]">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>


              </motion.article>
            );
          })}
        </div>

        {/* CIERRE */}
        <motion.div
          className="mx-auto mt-14 flex max-w-xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#29485A] to-transparent" />

          <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[#29485A]">
            Te esperamos
          </p>

          <p className="mt-3 font-serif text-xl italic text-[#111B21] sm:text-2xl">
            para celebrar juntos cada instante
          </p>
        </motion.div>
      </div>
    </section>
  );
}