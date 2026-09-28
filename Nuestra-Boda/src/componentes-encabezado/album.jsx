// AlbumCompartido.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, ArrowUpRight, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AlbumCompartido() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.section
        id="album-compartido"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative isolate overflow-hidden bg-[#D6EDF5] px-5 py-20 text-[#111B21] sm:px-8 sm:py-24 md:py-28"
      >
        {/* FONDO CELESTE */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(145deg,#EAF6FA_0%,#D6EDF5_55%,#BBDDEB_100%)]" />

        <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[460px] w-[460px] rounded-full bg-white/45 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[430px] w-[430px] rounded-full bg-[#A8DFE1]/35 blur-3xl" />

        {/* ORNAMENTO BOTÁNICO */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 -left-16 h-72 w-60 text-[#29485A]/20 sm:h-96 sm:w-80"
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

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          {/* ENCABEZADO */}
          <motion.div
            className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#29485A]">
              Comparte tus recuerdos
            </p>

            <h2 className="mt-4 font-serif text-4xl font-normal text-[#111B21] sm:text-5xl md:text-6xl">
              Álbum compartido
            </h2>

            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#29485A]/45 sm:w-20" />
              <span className="h-2 w-2 rotate-45 border border-[#29485A]" />
              <span className="h-px w-12 bg-[#29485A]/45 sm:w-20" />
            </div>

            <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#26343B] sm:text-xl">
              Cada fotografía será parte de los recuerdos que guardaremos de
              este día.
            </p>
          </motion.div>

          {/* IMAGEN Y CONTENIDO */}
          <motion.div
            className="relative mx-auto grid w-full max-w-5xl grid-cols-1 overflow-hidden border border-[#8FB7D5] bg-white shadow-[0_28px_80px_rgba(41,72,90,0.14)] md:grid-cols-[1.2fr_0.8fr]"
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="pointer-events-none absolute inset-3 z-20 border border-[#8FB7D5]/35" />

            {/* IMAGEN */}
            <motion.div
              className="relative min-h-[390px] overflow-hidden border-b border-[#8FB7D5]/50 bg-[#D6E8F3] md:min-h-[600px] md:border-b-0 md:border-r"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src="/albun.png"
                alt="Fotografías del álbum compartido"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 border border-white/60 bg-black/20 px-5 py-4 text-center text-white backdrop-blur-sm sm:bottom-10 sm:left-10 sm:right-10">
                <p className="text-[10px] uppercase tracking-[0.25em]">
                  Un día para recordar
                </p>
              </div>
            </motion.div>

            {/* TEXTO */}
            <motion.div
              className="relative flex min-h-[390px] flex-col items-center justify-center px-8 py-14 text-center sm:px-12 md:min-h-[600px]"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8FB7D5] bg-[#D6EDF5]">
                <Images
                  size={22}
                  strokeWidth={1.3}
                  className="text-[#29485A]"
                />
              </div>

              <p className="mt-7 text-[10px] uppercase tracking-[0.3em] text-[#29485A]">
                Nuestros recuerdos
              </p>

              <h3 className="mt-4 font-serif text-4xl font-normal text-[#111B21] sm:text-5xl">
                Comparte tus fotos
              </h3>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#8FB7D5]" />
                <span className="h-2 w-2 rotate-45 border border-[#57B9CC]" />
                <span className="h-px w-10 bg-[#8FB7D5]" />
              </div>

              <p className="mt-7 max-w-sm text-sm leading-7 text-[#26343B] sm:text-base">
                Captura cada instante especial y súbelo a nuestro álbum para
                revivir esta celebración junto a nosotros.
              </p>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group mt-9 inline-flex min-h-12 items-center justify-center gap-3 border border-[#29485A] bg-[#29485A] px-8 py-3 text-[10px] uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#173D50]"
              >
                Abrir álbum
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* MODAL DEL ÁLBUM */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#173D50]/65 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="album-modal-title"
              className="relative my-auto w-full max-w-md overflow-hidden border border-[#8FB7D5] bg-[#F3FAFC] shadow-[0_35px_100px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,#F8FCFD_0%,#D6EDF5_100%)]" />

              <div className="pointer-events-none absolute inset-3 z-10 border border-[#8FB7D5]/50" />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar álbum compartido"
                className="absolute right-5 top-5 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-[#8FB7D5] bg-white text-[#29485A] transition hover:bg-[#29485A] hover:text-white"
              >
                <X size={17} strokeWidth={1.5} />
              </button>

              <div className="relative z-20 max-h-[88vh] overflow-y-auto px-7 py-10 text-center sm:px-9">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#8FB7D5] bg-white">
                  <Images
                    size={21}
                    strokeWidth={1.3}
                    className="text-[#29485A]"
                  />
                </div>

                <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#29485A]">
                  Comparte tus recuerdos
                </p>

                <h2
                  id="album-modal-title"
                  className="mt-4 font-serif text-4xl font-normal text-[#111B21]"
                >
                  Álbum compartido
                </h2>

                <div className="mt-6 flex items-center justify-center gap-4">
                  <span className="h-px w-10 bg-[#8FB7D5]" />
                  <span className="h-2 w-2 rotate-45 border border-[#57B9CC]" />
                  <span className="h-px w-10 bg-[#8FB7D5]" />
                </div>

                {/* APLICACIÓN */}
                <div className="mt-9">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#29485A]">
                    Aplicación
                  </p>

                  <p className="mt-3 font-serif text-2xl text-[#111B21]">
                    Wedshoots
                  </p>

                  <a
                    href="https://apps.apple.com/mx/app/wedshoots/id660256196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center justify-center border border-[#29485A] bg-[#29485A] px-7 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#173D50]"
                  >
                    Descargar app
                  </a>
                </div>

                {/* CÓDIGO */}
                <div className="mt-9">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#29485A]">
                    Código del álbum
                  </p>

                  <div className="mt-4 border border-[#8FB7D5] bg-white px-4 py-4 font-mono text-xl tracking-[0.2em] text-[#111B21] shadow-inner sm:text-2xl sm:tracking-[0.3em]">
                    MX3b8a838b
                  </div>
                </div>

                {/* QR */}
                <div className="mt-9 flex justify-center">
                  <div className="border border-[#8FB7D5] bg-white p-3 shadow-[0_16px_40px_rgba(41,72,90,0.12)]">
                    <img
                      src="/qr.jpg"
                      alt="Código QR del álbum compartido"
                      className="h-40 w-40 object-contain sm:h-44 sm:w-44"
                      loading="lazy"
                    />
                  </div>
                </div>

                <p className="mx-auto mt-7 max-w-xs font-serif text-base italic leading-7 text-[#26343B]">
                  Escanea el código QR o utiliza la aplicación para compartir
                  tus fotografías con nosotros.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}