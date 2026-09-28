// Preguntas.jsx
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Camera,
  Check,
  ChevronRight,
  Crown,
  RotateCcw,
  Sparkles,
  Trophy,
  UserRound,
} from "lucide-react";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";

// Coloca aquí el Apps Script del ranking de Agustín y Berenice.
const API_URL = "https://script.google.com/macros/s/AKfycbzQgz8aGDhjpnba-mJe9tasfZHis1O2noeNOsw8FrfUvaevT5cHSrbcp3qnJULr6WMnJA/exec";

const preguntas = [
  {
    pregunta: "¿Cuántos años llevamos de conocernos?",
    opciones: ["20 años", "25 años", "29 años", "30 años"],
    correcta: 2,
  },
  {
    pregunta: "¿Quién le pidió al otro ser novios?",
    opciones: ["Agustín", "Berenice", "Fue una decisión de ambos"],
    correcta: 0,
  },
  {
    pregunta: "¿Cómo nos conocimos?",
    opciones: [
      "En la escuela",
      "En una fiesta",
      "Al otro lado de la calle; éramos vecinos",
      "Por amigos en común",
    ],
    correcta: 2,
  },
  {
    pregunta: "¿Quién es más paciente de los dos?",
    opciones: ["Agustín", "Berenice", "Los dos por igual"],
    correcta: 0,
  },
  {
    pregunta: "¿Quién es más fiestero?",
    opciones: ["Agustín", "Berenice", "Los dos por igual"],
    correcta: 1,
  },
];

const letras = ["A", "B", "C", "D"];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Preguntas() {
  const [nombre, setNombre] = useState("");
  const [paso, setPaso] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [score, setScore] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const [ranking, setRanking] = useState([]);
  const [cargandoRanking, setCargandoRanking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [errorNombre, setErrorNombre] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const resultadoRef = useRef(null);
  const respuestaBloqueadaRef = useRef(false);
  const temporizadoresRef = useRef([]);

  useEffect(() => {
    const actualizarTamano = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    actualizarTamano();
    window.addEventListener("resize", actualizarTamano);

    return () => {
      window.removeEventListener("resize", actualizarTamano);
      temporizadoresRef.current.forEach(window.clearTimeout);
    };
  }, []);

  const obtenerRanking = async () => {
    if (!API_URL) return;

    setCargandoRanking(true);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("No fue posible obtener el ranking.");
      }

      const data = await response.json();

      const ordenado = Array.isArray(data)
        ? data
            .map((participante) => ({
              nombre: String(participante.nombre || "Invitado"),
              score: Number(participante.score) || 0,
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
        : [];

      setRanking(ordenado);
    } catch (error) {
      console.error("Error obteniendo el ranking:", error);
      setRanking([]);
    } finally {
      setCargandoRanking(false);
    }
  };

  const enviarResultado = async (resultadoFinal) => {
    if (!API_URL) return;

    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          nombre: nombre.trim(),
          score: resultadoFinal,
        }),
      });
    } catch (error) {
      console.error("Error enviando el resultado:", error);
    }

    const rankingTimer = window.setTimeout(obtenerRanking, 1400);
    temporizadoresRef.current.push(rankingTimer);
  };

  const finalizarJuego = (resultadoFinal) => {
    setScore(resultadoFinal);
    setTerminado(true);
    setShowConfetti(true);
    enviarResultado(resultadoFinal);

    const confettiTimer = window.setTimeout(() => {
      setShowConfetti(false);
    }, 6000);

    temporizadoresRef.current.push(confettiTimer);
  };

  const manejarRespuesta = (opcionIndex) => {
    if (respuestaBloqueadaRef.current) return;

    if (!nombre.trim()) {
      setErrorNombre("Escribe tu nombre para comenzar.");
      return;
    }

    setErrorNombre("");
    respuestaBloqueadaRef.current = true;
    setSeleccion(opcionIndex);

    const siguienteScore =
      score + (opcionIndex === preguntas[paso].correcta ? 1 : 0);

    const preguntaTimer = window.setTimeout(() => {
      setSeleccion(null);

      if (paso + 1 < preguntas.length) {
        setScore(siguienteScore);
        setPaso((actual) => actual + 1);
      } else {
        finalizarJuego(siguienteScore);
      }

      respuestaBloqueadaRef.current = false;
    }, 750);

    temporizadoresRef.current.push(preguntaTimer);
  };

  const guardarResultado = async () => {
    if (!resultadoRef.current || guardando) return;

    try {
      setGuardando(true);

      const canvas = await html2canvas(resultadoRef.current, {
        backgroundColor: "#F8FCFD",
        scale: 2,
        useCORS: true,
      });

      const enlace = document.createElement("a");
      enlace.download = `resultado-${nombre.trim() || "invitado"}.png`;
      enlace.href = canvas.toDataURL("image/png");
      enlace.click();
    } catch (error) {
      console.error("No fue posible guardar el resultado:", error);
    } finally {
      setGuardando(false);
    }
  };

  const reiniciar = () => {
    temporizadoresRef.current.forEach(window.clearTimeout);
    temporizadoresRef.current = [];

    setNombre("");
    setPaso(0);
    setSeleccion(null);
    setScore(0);
    setTerminado(false);
    setRanking([]);
    setCargandoRanking(false);
    setShowConfetti(false);
    setErrorNombre("");
    respuestaBloqueadaRef.current = false;
  };

  const progreso = ((paso + 1) / preguntas.length) * 100;

  return (
    <motion.section
      id="preguntas"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="relative isolate overflow-hidden bg-white px-5 py-20 text-[#111B21] sm:px-8 sm:py-24 md:py-28"
    >
      {showConfetti && windowSize.width > 0 && (
        <div className="pointer-events-none fixed inset-0 z-[70]">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={240}
            recycle={false}
            gravity={0.16}
          />
        </div>
      )}

      {/* FONDO BLANCO CON DETALLES DE LA PALETA */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_65%,#F7FBFD_100%)]" />

      <div className="pointer-events-none absolute -bottom-44 -right-32 -z-10 h-[430px] w-[430px] rounded-full bg-[#A8DFE1]/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* ENCABEZADO */}
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8FB7D5] bg-[#D6EDF5]">
            <Sparkles
              size={21}
              strokeWidth={1.3}
              className="text-[#29485A]"
            />
          </div>

          <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-[#29485A]">
            Un reto para nuestros invitados
          </p>

          <h2 className="mt-4 font-serif text-4xl font-normal text-[#111B21] sm:text-5xl md:text-6xl">
            ¿Cuánto nos conoces?
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#8FB7D5] sm:w-20" />
            <span className="h-2 w-2 rotate-45 border border-[#57B9CC]" />
            <span className="h-px w-12 bg-[#8FB7D5] sm:w-20" />
          </div>

          <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#26343B] sm:text-xl">
            Pon a prueba cuánto sabes de nuestra historia y descubre tu lugar
            en el ranking.
          </p>
        </motion.div>

        {/* JUEGO */}
        <div className="relative mx-auto mt-12 w-full max-w-3xl">
          <AnimatePresence mode="wait">
            {!terminado ? (
              <motion.div
                key={`pregunta-${paso}`}
                className="relative overflow-hidden border border-[#8FB7D5] bg-[#F8FCFD] px-6 py-10 shadow-[0_28px_85px_rgba(41,72,90,0.1)] sm:px-10 sm:py-12 md:px-14"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.55 }}
              >
                <div className="pointer-events-none absolute inset-3 border border-[#8FB7D5]/40" />

                <div className="relative z-10">
                  {/* PROGRESO */}
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#29485A]">
                      Pregunta {paso + 1} de {preguntas.length}
                    </p>

                    <p className="font-serif text-sm italic text-[#29485A]">
                      {Math.round(progreso)}%
                    </p>
                  </div>

                  <div className="mt-4 h-1 w-full overflow-hidden bg-[#D6EDF5]">
                    <motion.div
                      className="h-full bg-[#29485A]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progreso}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  {/* NOMBRE */}
                  {paso === 0 && (
                    <div className="mx-auto mt-9 max-w-md">
                      <label
                        htmlFor="nombre-jugador"
                        className="block text-center text-[10px] uppercase tracking-[0.28em] text-[#29485A]"
                      >
                        Antes de comenzar
                      </label>

                      <div className="relative mt-4">
                        <UserRound
                          size={17}
                          strokeWidth={1.4}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#29485A]"
                        />

                        <input
                          id="nombre-jugador"
                          type="text"
                          value={nombre}
                          onChange={(event) => {
                            setNombre(event.target.value);
                            setErrorNombre("");
                          }}
                          placeholder="Escribe tu nombre"
                          maxLength={40}
                          className="w-full border border-[#8FB7D5] bg-white py-3.5 pl-12 pr-4 text-center font-serif text-lg text-[#111B21] outline-none transition placeholder:text-[#647D8B] focus:border-[#29485A]"
                        />
                      </div>

                      {errorNombre && (
                        <p
                          role="alert"
                          className="mt-3 text-center text-xs text-red-700"
                        >
                          {errorNombre}
                        </p>
                      )}
                    </div>
                  )}

                  {/* PREGUNTA */}
                  <div className="mt-9 text-center">
                    <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#8FB7D5] bg-white font-serif text-lg text-[#29485A]">
                      {String(paso + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mx-auto mt-6 max-w-xl font-serif text-2xl font-normal leading-snug text-[#111B21] sm:text-3xl md:text-4xl">
                      {preguntas[paso].pregunta}
                    </h3>
                  </div>

                  {/* OPCIONES */}
                  <div className="mx-auto mt-9 grid max-w-xl grid-cols-1 gap-3">
                    {preguntas[paso].opciones.map((opcion, opcionIndex) => {
                      const seleccionada = seleccion === opcionIndex;

                      return (
                        <motion.button
                          key={opcion}
                          type="button"
                          onClick={() => manejarRespuesta(opcionIndex)}
                          disabled={seleccion !== null}
                          className={`group flex min-h-[58px] w-full items-center gap-4 border px-4 py-3 text-left transition duration-300 sm:px-5 ${
                            seleccionada
                              ? "border-[#29485A] bg-[#29485A] text-white"
                              : "border-[#8FB7D5] bg-white text-[#111B21] hover:border-[#29485A] hover:bg-[#D6EDF5]"
                          } disabled:cursor-default`}
                          whileTap={{
                            scale: seleccion === null ? 0.99 : 1,
                          }}
                        >
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-serif text-sm ${
                              seleccionada
                                ? "border-white/60 text-white"
                                : "border-[#8FB7D5] text-[#29485A]"
                            }`}
                          >
                            {seleccionada ? (
                              <Check size={15} strokeWidth={1.7} />
                            ) : (
                              letras[opcionIndex]
                            )}
                          </span>

                          <span className="flex-1 text-sm sm:text-base">
                            {opcion}
                          </span>

                          <ChevronRight
                            size={16}
                            strokeWidth={1.4}
                            className={
                              seleccionada
                                ? "text-white"
                                : "text-[#29485A] transition group-hover:translate-x-1"
                            }
                          />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                ref={resultadoRef}
                key="resultado"
                className="relative overflow-hidden border border-[#8FB7D5] bg-[#F8FCFD] px-6 py-12 text-center shadow-[0_30px_90px_rgba(41,72,90,0.12)] sm:px-10 md:px-14"
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
              >
                <div className="pointer-events-none absolute inset-3 border border-[#8FB7D5]/40" />

                <div className="relative z-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#8FB7D5] bg-[#D6EDF5]">
                    <Award
                      size={27}
                      strokeWidth={1.25}
                      className="text-[#29485A]"
                    />
                  </div>

                  <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#29485A]">
                    Resultado final
                  </p>

                  <h3 className="mt-4 font-serif text-4xl font-normal text-[#111B21] sm:text-5xl">
                    ¡Muy bien, {nombre.trim()}!
                  </h3>

                  <p className="mx-auto mt-5 max-w-lg font-serif text-lg italic leading-relaxed text-[#26343B] sm:text-xl">
                    Acertaste{" "}
                    <span className="not-italic text-[#29485A]">
                      {score}
                    </span>{" "}
                    de {preguntas.length} preguntas.
                  </p>

                  <div className="mx-auto mt-8 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[#8FB7D5] bg-white">
                    <span className="font-serif text-5xl leading-none text-[#111B21]">
                      {score}
                    </span>

                    <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#29485A]">
                      Aciertos
                    </span>
                  </div>

                  {/* RANKING */}
                  {API_URL && (
                    <div className="mt-12 border-t border-[#8FB7D5] pt-10">
                      <div className="flex items-center justify-center gap-3">
                        <Trophy
                          size={18}
                          strokeWidth={1.3}
                          className="text-[#29485A]"
                        />

                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#29485A]">
                          Ranking de invitados
                        </p>
                      </div>

                      {ranking.length > 0 ? (
                        <div className="mt-9 flex items-end justify-center gap-2 sm:gap-5">
                          {ranking[1] && (
                            <Podio
                              posicion={2}
                              participante={ranking[1]}
                              altura="h-20 sm:h-24"
                              delay={0.15}
                            />
                          )}

                          {ranking[0] && (
                            <Podio
                              posicion={1}
                              participante={ranking[0]}
                              altura="h-28 sm:h-32"
                              principal
                              delay={0.05}
                            />
                          )}

                          {ranking[2] && (
                            <Podio
                              posicion={3}
                              participante={ranking[2]}
                              altura="h-16 sm:h-20"
                              delay={0.25}
                            />
                          )}
                        </div>
                      ) : (
                        <p className="mt-7 font-serif text-base italic text-[#29485A]">
                          {cargandoRanking
                            ? "Actualizando el ranking…"
                            : "Aún no hay resultados para mostrar."}
                        </p>
                      )}
                    </div>
                  )}

                  {/* BOTONES */}
                  <div className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={guardarResultado}
                      disabled={guardando}
                      className="flex flex-1 items-center justify-center gap-3 bg-[#29485A] px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] text-white transition hover:bg-[#173D50] disabled:opacity-60"
                    >
                      <Camera size={15} strokeWidth={1.5} />
                      {guardando ? "Guardando…" : "Guardar resultado"}
                    </button>

                    <button
                      type="button"
                      onClick={reiniciar}
                      className="flex flex-1 items-center justify-center gap-3 border border-[#29485A] px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] text-[#111B21] transition hover:bg-[#D6EDF5]"
                    >
                      <RotateCcw size={15} strokeWidth={1.5} />
                      Jugar de nuevo
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

function Podio({
  posicion,
  participante,
  altura,
  principal = false,
  delay = 0,
}) {
  return (
    <motion.div
      className="flex min-w-0 flex-1 flex-col items-center"
      initial={{ opacity: 0, y: 45 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {principal && (
        <Crown
          size={22}
          strokeWidth={1.25}
          className="mb-3 text-[#29485A]"
        />
      )}

      <p className="mb-3 max-w-full truncate font-serif text-sm text-[#111B21] sm:text-base">
        {participante.nombre}
      </p>

      <div
        className={`flex w-full max-w-[110px] flex-col items-center justify-center border border-[#8FB7D5] ${
          principal
            ? "bg-[#29485A] text-white"
            : "bg-[#D6EDF5] text-[#111B21]"
        } ${altura}`}
      >
        <span className="font-serif text-2xl">{posicion}</span>

        <span
          className={`mt-1 text-[10px] uppercase tracking-[0.12em] ${
            principal ? "text-white" : "text-[#29485A]"
          }`}
        >
          {participante.score} pts
        </span>
      </div>
    </motion.div>
  );
}