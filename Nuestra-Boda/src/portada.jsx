import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Volume2,
  VolumeX,
} from "lucide-react";
import Countdown from "./componentes-encabezado/encabeza-cuenta";
export default function Portada() {
  const audioRef = useRef(null);
  const [sobreVisible, setSobreVisible] = useState(true);
  const [sobreAbriendo, setSobreAbriendo] = useState(false);
  const aperturaRef = useRef(null);
  const [musicaActiva, setMusicaActiva] = useState(false);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  useEffect(() => {
    if (!sobreVisible) return;
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = overflowAnterior;
      window.clearTimeout(aperturaRef.current);
    };
  }, [sobreVisible]);

  const abrirInvitacion = () => {
    if (sobreAbriendo) return;

    // El audio comienza directamente con el toque del sobre.
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.volume = 0.45;
      audio.play()
        .then(() => setMusicaActiva(true))
        .catch((error) => console.warn("No fue posible iniciar la música:", error));
    }

    setSobreAbriendo(true);
    aperturaRef.current = window.setTimeout(() => {
      setMostrarContenido(true);
      setSobreVisible(false);
    }, 1650);
  };

  const alternarMusica = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      setMusicaActiva(false);
    } else {
      audio.muted = false;
      audio.play()
        .then(() => setMusicaActiva(true))
        .catch((error) => console.warn("No fue posible reproducir la música:", error));
    }
  };

  const bajarContenido = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* SOBRE DE ENTRADA */}
      <AnimatePresence>
        {sobreVisible && (
          <motion.div
            className="fixed inset-0 z-[60] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#102B3A] px-5 py-10 text-center text-[#F3FAFC]"
            style={{ backgroundImage: "radial-gradient(circle at 50% 40%, #294F64 0%, #173D50 46%, #102B3A 100%)" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55 } }}
          >
            <div className="pointer-events-none absolute inset-4 border border-[#8FB7D5]/45 sm:inset-7" />
            <div className="pointer-events-none absolute inset-[22px] border border-[#8FB7D5]/20 sm:inset-9" />
            <div className="relative mx-auto flex w-full max-w-lg flex-col items-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#BBD6E5]">Nuestra boda</p>
              <h2 className="mt-5 font-serif text-[clamp(2.6rem,8vw,4.4rem)] leading-tight">Agustín <span className="italic text-[#BBD6E5]">&</span> Berenice</h2>
              <p className="mt-2 font-serif text-sm tracking-[0.12em] text-[#D6EDF5]">05 · Diciembre · 2026</p>
              <div className="mt-8 flex items-center gap-3 text-[#8FB7D5]" aria-hidden="true">
                <span className="h-px w-12 bg-current/60" /><span className="h-1.5 w-1.5 rotate-45 border border-current" /><span className="h-px w-12 bg-current/60" />
              </div>

              <button
                type="button"
                onClick={abrirInvitacion}
                disabled={sobreAbriendo}
                aria-label="Abrir invitación de Agustín y Berenice"
                className="group relative mt-8 block w-full max-w-[360px] cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#D6EDF5] disabled:cursor-default"
              >
                <span className="relative block h-[235px] w-full [perspective:900px] sm:h-[255px]">
                  {/* La carta asoma al levantarse la solapa. */}
                  <motion.span
                    className="absolute inset-x-[8%] bottom-4 z-10 flex h-[88%] flex-col items-center justify-start border border-[#A8D9ED] bg-[#F3FAFC] px-5 pt-7 text-center text-[#173D50] shadow-lg"
                    initial={false}
                    animate={{ y: sobreAbriendo ? -108 : 0 }}
                    transition={{ duration: 0.85, delay: sobreAbriendo ? 0.35 : 0, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="text-[9px] uppercase tracking-[0.28em]">Estás invitado a celebrar</span>
                    <span className="mt-5 font-serif text-[1.5rem] leading-tight sm:text-[1.7rem]">Agustín <i>&</i> Berenice</span>
                    <span className="mt-4 h-px w-12 bg-[#8FB7D5]" />
                    <span className="mt-4 font-serif text-sm">05 de diciembre de 2026</span>
                  </motion.span>
                  <span className="absolute inset-x-0 bottom-0 z-20 h-[77%] border border-[#8FB7D5] bg-[#8FB7D5] shadow-[0_22px_50px_rgba(0,0,0,0.28)]" />
                  <span className="absolute inset-x-0 bottom-0 z-30 h-[77%] bg-[#A8CBE0]" style={{ clipPath: "polygon(0 0, 50% 53%, 0 100%)" }} />
                  <span className="absolute inset-x-0 bottom-0 z-30 h-[77%] bg-[#A8CBE0]" style={{ clipPath: "polygon(100% 0, 50% 53%, 100% 100%)" }} />
                  <span className="absolute inset-x-0 bottom-0 z-40 h-[77%] bg-[#BCD7E7]" style={{ clipPath: "polygon(0 100%, 50% 42%, 100% 100%)" }} />
                  <motion.span
                    className="absolute inset-x-0 bottom-[77%] z-50 block h-[45%] origin-bottom bg-[#D6EDF5] [backface-visibility:hidden]"
                    style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
                    initial={false}
                    animate={{ rotateX: sobreAbriendo ? 180 : 0, zIndex: sobreAbriendo ? 5 : 50 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                  {!sobreAbriendo && (
                    <span className="absolute bottom-[41%] left-1/2 z-50 flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-[#BBD6E5] bg-[#173D50] font-serif text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">A<span className="mx-0.5 text-xs">&</span>B</span>
                  )}
                </span>
                <span className="mt-8 block text-center text-[10px] uppercase tracking-[0.29em] text-[#F3FAFC]">
                  {sobreAbriendo ? "Abriendo invitación…" : "Toca el sobre para abrir"}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>
      {/* IMAGEN PRINCIPAL */}
      <motion.img
        src="/portada.jpg"
        alt="Agustín y Berenice"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_40%]
        "
        initial={{
          opacity: 0,
          scale: 1.08,
        }}
        animate={
          mostrarContenido
            ? {
                opacity: 1,
                scale: 1,
              }
            : {
                opacity: 0,
                scale: 1.08,
              }
        }
        transition={{
          opacity: {
            duration: 1.3,
          },
          scale: {
            duration: 8,
            ease: "easeOut",
          },
        }}
      />
      {/* OSCURECIMIENTO GENERAL */}
      <div
        className="
          absolute
          inset-0
          bg-black/20
        "
      />
      {/* DEGRADADO SUPERIOR */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/45
          via-transparent
          to-transparent
        "
      />
      {/* DEGRADADO INFERIOR */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/20
          to-transparent
        "
      />
      {/* OSCURECIMIENTO LATERAL PARA COMPUTADORA */}
      <div
        className="
          absolute
          inset-0
          hidden
          bg-gradient-to-r
          from-black/35
          via-transparent
          to-black/15
          md:block
        "
      />
      {/* MARCOS */}
      <div
        className="
          pointer-events-none
          absolute
          inset-3
          z-20
          border
          border-white/30
          sm:inset-5
          md:inset-7
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          inset-[18px]
          z-20
          border
          border-white/10
          sm:inset-7
          md:inset-9
        "
      />
      {/* CONTENIDO SOBRE LA IMAGEN */}
      <motion.div
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          flex-col
          items-center
          justify-end
          px-6
          pb-10
          pt-28
          text-center
          sm:px-8
          sm:pb-14
          md:justify-center
          md:pb-10
          lg:px-12
        "
        initial={{
          opacity: 0,
        }}
        animate={
          mostrarContenido
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 1.2,
          delay: 0.2,
        }}
      >
        <div
          className="
            flex
            w-full
            max-w-3xl
            flex-col
            items-center
          "
        >
          {/* NOMBRES */}
          <motion.h1
            className="
              mt-6
              font-serif
              text-[3.8rem]
              font-normal
              leading-[0.8]
              tracking-[-0.055em]
              text-white
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
              sm:text-[5rem]
              md:mt-8
              md:text-[6rem]
              lg:text-[7.4rem]
            "
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 1.1,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Agustín
            <span
              className="
                my-2
                block
                font-cursiveDancing
                text-[2.8rem]
                font-normal
                leading-none
                text-[#E6C98D]
                drop-shadow-md
                sm:text-[3.8rem]
                md:my-3
                md:text-[4.4rem]
              "
            >
              &
            </span>
            Berenice
          </motion.h1>
          {/* CUENTA REGRESIVA */}
          <motion.div
            className="
              mt-7
              w-full
              max-w-[620px]
              rounded-[24px]
              border
              border-white/25
              bg-black/20
              px-3
              py-4
              shadow-[0_18px_55px_rgba(0,0,0,0.22)]
              backdrop-blur-md
              sm:mt-9
              sm:px-6
              sm:py-5
            "
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.97,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            <p
              className="
                mb-4
                text-[8px]
                uppercase
                tracking-[0.45em]
                text-white/75
                sm:text-[9px]
              "
            >
              Faltan
            </p>
            <Countdown targetDate="2026-12-05T11:00:00" />
          </motion.div>
          {/* BOTÓN BAJAR */}
          <motion.button
            type="button"
            onClick={bajarContenido}
            aria-label="Continuar hacia la invitación"
            className="
              mt-6
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/50
              bg-black/10
              text-white
              backdrop-blur-sm
              transition
              duration-300
              hover:border-[#E6C98D]
              hover:bg-[#E6C98D]
              hover:text-[#433A34]
              sm:mt-8
            "
            initial={{
              opacity: 0,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: [0, 6, 0],
                  }
                : {
                    opacity: 0,
                  }
            }
            transition={{
              opacity: {
                duration: 0.8,
                delay: 1.2,
              },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <ChevronDown size={18} strokeWidth={1.5} />
          </motion.button>
        </div>
      </motion.div>
      {/* INDICADOR DE MÚSICA */}
      {!sobreVisible && (
        <motion.div
          className="
            absolute
            left-7
            top-7
            z-30
            flex
            items-center
            gap-3
            md:left-12
            md:top-12
          "
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <button
            type="button"
            onClick={alternarMusica}
            aria-label={musicaActiva ? "Pausar música" : "Reproducir música"}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-black/15
              text-white
              shadow-md
              backdrop-blur-md
            "
          >
            {musicaActiva ? <Volume2 size={16} strokeWidth={1.5} /> : <VolumeX size={16} strokeWidth={1.5} />}
          </button>
          <p
            className="
              hidden
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white
              drop-shadow-md
              sm:block
            "
          >
            Nuestra canción
          </p>
        </motion.div>
      )}
    </section>
  );
}