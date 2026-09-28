// Confirmacion.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  HeartHandshake,
  LoaderCircle,
  MessageSquareText,
  Send,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

// URL del Apps Script de Agustín y Berenice, terminada en /exec.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzQgz8aGDhjpnba-mJe9tasfZHis1O2noeNOsw8FrfUvaevT5cHSrbcp3qnJULr6WMnJA/exec";

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

export default function Confirmacion() {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);

  const seleccionarAsistencia = (opcion) => {
    setAsistencia(opcion);
    setError("");
    setSolicitudEnviada(false);
  };

  const enviarConfirmacion = async () => {
    if (enviando) return;

    const nombre = nombreInvitado.trim();

    if (!nombre || !asistencia) {
      setError("Escribe tu nombre y selecciona una opción de asistencia.");
      return;
    }

    if (asistencia === "Sí asistiré" && invitados < 1) {
      setError("Selecciona un número válido de invitados.");
      return;
    }

    if (!SCRIPT_URL.trim()) {
      setError("Falta configurar el enlace del registro de confirmaciones.");
      return;
    }

    setError("");
    setSolicitudEnviada(false);
    setEnviando(true);

    const datos = {
      accion: "confirmacion",
      nombre,
      asistencia,
      invitados: asistencia === "Sí asistiré" ? invitados : 0,
      mensaje: mensajeInvitado.trim(),
    };

    try {
      await fetch(SCRIPT_URL.trim(), {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(datos),
      });

      setSolicitudEnviada(true);
    } catch (err) {
      console.error("Error al conectar con el registro:", err);
      setError(
        "No se pudo enviar la solicitud. Revisa tu conexión e inténtalo de nuevo."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <motion.section
      id="confirmacion"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="relative isolate overflow-hidden bg-[#A8DFE1] px-5 py-20 text-[#111B21] sm:px-8 sm:py-24 md:py-28"
    >
      {/* FONDO AQUA */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#BCE9EA_0%,#A8DFE1_55%,#8FD1D8_100%)]" />

      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[460px] w-[460px] rounded-full bg-white/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-44 -right-32 -z-10 h-[430px] w-[430px] rounded-full bg-[#77A7CA]/20 blur-3xl" />

      {/* ORNAMENTO */}
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
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#29485A]/35 bg-white/60">
            <HeartHandshake
              size={23}
              strokeWidth={1.25}
              className="text-[#29485A]"
            />
          </div>

          <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-[#29485A]">
            Nos encantará contar contigo
          </p>

          <h2 className="mt-4 font-serif text-4xl font-normal text-[#111B21] sm:text-5xl md:text-6xl">
            Confirma tu asistencia
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#29485A]/45 sm:w-20" />
            <span className="h-2 w-2 rotate-45 border border-[#29485A]" />
            <span className="h-px w-12 bg-[#29485A]/45 sm:w-20" />
          </div>

          <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#26343B] sm:text-xl">
            Ayúdanos a preparar cada detalle confirmando tu asistencia.
          </p>
        </motion.div>

        {/* FORMULARIO */}
        <motion.div
          className="relative mx-auto mt-12 w-full max-w-3xl overflow-hidden border border-[#29485A]/35 bg-white px-6 py-10 shadow-[0_28px_85px_rgba(41,72,90,0.15)] sm:px-10 sm:py-12 md:px-14"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="pointer-events-none absolute inset-3 border border-[#8FB7D5]/50" />

          <div className="relative z-10">
            {/* NOMBRE */}
            <div>
              <label
                htmlFor="nombre-invitado"
                className="text-[10px] uppercase tracking-[0.28em] text-[#29485A]"
              >
                Nombre y apellido
              </label>

              <div className="relative mt-3">
                <UserRound
                  size={17}
                  strokeWidth={1.4}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#29485A]"
                />

                <input
                  id="nombre-invitado"
                  type="text"
                  placeholder="Escribe tu nombre"
                  value={nombreInvitado}
                  maxLength={60}
                  autoComplete="name"
                  disabled={enviando || solicitudEnviada}
                  onChange={(event) => {
                    setNombreInvitado(event.target.value);
                    setError("");
                  }}
                  className="w-full border border-[#8FB7D5] bg-[#F8FCFD] py-4 pl-12 pr-4 font-serif text-lg text-[#111B21] outline-none transition placeholder:text-[#647D8B] focus:border-[#29485A] disabled:opacity-70"
                />
              </div>
            </div>

            {/* ASISTENCIA */}
            <fieldset className="mt-9">
              <legend className="text-[10px] uppercase tracking-[0.28em] text-[#29485A]">
                ¿Podrás acompañarnos?
              </legend>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => seleccionarAsistencia("Sí asistiré")}
                  aria-pressed={asistencia === "Sí asistiré"}
                  disabled={enviando || solicitudEnviada}
                  className={`flex min-h-[68px] items-center gap-4 border px-5 py-4 text-left transition duration-300 disabled:cursor-default ${
                    asistencia === "Sí asistiré"
                      ? "border-[#29485A] bg-[#29485A] text-white"
                      : "border-[#8FB7D5] bg-[#F8FCFD] text-[#111B21] hover:bg-[#D6EDF5]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                      asistencia === "Sí asistiré"
                        ? "border-white/60"
                        : "border-[#8FB7D5]"
                    }`}
                  >
                    <Check size={16} strokeWidth={1.6} />
                  </span>

                  <span>
                    <span className="block font-serif text-lg">
                      Sí asistiré
                    </span>
                    <span className="mt-1 block text-xs">
                      Será un gusto acompañarlos
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => seleccionarAsistencia("No podré asistir")}
                  aria-pressed={asistencia === "No podré asistir"}
                  disabled={enviando || solicitudEnviada}
                  className={`flex min-h-[68px] items-center gap-4 border px-5 py-4 text-left transition duration-300 disabled:cursor-default ${
                    asistencia === "No podré asistir"
                      ? "border-[#29485A] bg-[#29485A] text-white"
                      : "border-[#8FB7D5] bg-[#F8FCFD] text-[#111B21] hover:bg-[#D6EDF5]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                      asistencia === "No podré asistir"
                        ? "border-white/60"
                        : "border-[#8FB7D5]"
                    }`}
                  >
                    <X size={16} strokeWidth={1.5} />
                  </span>

                  <span>
                    <span className="block font-serif text-lg">
                      No podré asistir
                    </span>
                    <span className="mt-1 block text-xs">
                      Estaré presente de corazón
                    </span>
                  </span>
                </button>
              </div>
            </fieldset>

            {/* NÚMERO DE INVITADOS */}
            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  className="mt-9 overflow-hidden"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <label
                    htmlFor="numero-invitados"
                    className="text-[10px] uppercase tracking-[0.28em] text-[#29485A]"
                  >
                    Número de invitados
                  </label>

                  <div className="relative mt-3">
                    <UsersRound
                      size={17}
                      strokeWidth={1.4}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#29485A]"
                    />

               <input
  id="numero-invitados"
  type="number"
  min="1"
  step="1"
  inputMode="numeric"
  placeholder="Escribe el número de invitados"
  value={invitados}
  disabled={enviando || solicitudEnviada}
  onChange={(event) => {
    const valor = event.target.value;

    setInvitados(valor === "" ? "" : Number(valor));
    setError("");
  }}
  className="w-full border border-[#8FB7D5] bg-[#F8FCFD] py-4 pl-12 pr-4 font-serif text-lg text-[#111B21] outline-none transition placeholder:text-[#647D8B] focus:border-[#29485A] disabled:opacity-70"
/>

                  
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MENSAJE */}
            <div className="mt-9">
              <label
                htmlFor="mensaje-invitado"
                className="text-[10px] uppercase tracking-[0.28em] text-[#29485A]"
              >
                Mensaje para los novios
              </label>

              <div className="relative mt-3">
                <MessageSquareText
                  size={17}
                  strokeWidth={1.4}
                  className="pointer-events-none absolute left-4 top-5 text-[#29485A]"
                />

                <textarea
                  id="mensaje-invitado"
                  placeholder="Escribe un mensaje especial (opcional)"
                  value={mensajeInvitado}
                  maxLength={300}
                  disabled={enviando || solicitudEnviada}
                  onChange={(event) =>
                    setMensajeInvitado(event.target.value)
                  }
                  rows={5}
                  className="w-full resize-none border border-[#8FB7D5] bg-[#F8FCFD] py-4 pl-12 pr-4 text-sm leading-7 text-[#111B21] outline-none transition placeholder:text-[#647D8B] focus:border-[#29485A] disabled:opacity-70"
                />
              </div>

              <p className="mt-2 text-right text-[10px] text-[#29485A]">
                {mensajeInvitado.length}/300
              </p>
            </div>

            {/* ESTADO */}
            <div className="mt-6 min-h-[28px]" aria-live="polite">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.p
                    key="error"
                    role="alert"
                    className="flex items-center justify-center gap-2 text-center text-sm text-red-700"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <X size={15} strokeWidth={1.6} />
                    {error}
                  </motion.p>
                )}

                {!error && solicitudEnviada && (
                  <motion.p
                    key="enviada"
                    className="flex items-center justify-center gap-2 text-center text-sm text-[#29485A]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <Check size={16} strokeWidth={1.6} />
                    Solicitud enviada. Gracias por responder.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* BOTÓN */}
            <button
              type="button"
              onClick={enviarConfirmacion}
              disabled={enviando || solicitudEnviada}
              className={`mx-auto mt-5 flex min-h-[52px] w-full max-w-sm items-center justify-center gap-3 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-white transition duration-300 ${
                enviando || solicitudEnviada
                  ? "cursor-not-allowed bg-[#6C8C9B]"
                  : "bg-[#29485A] hover:-translate-y-0.5 hover:bg-[#173D50]"
              }`}
            >
              {enviando ? (
                <>
                  <LoaderCircle
                    size={16}
                    strokeWidth={1.5}
                    className="animate-spin"
                  />
                  Enviando
                </>
              ) : solicitudEnviada ? (
                <>
                  <Check size={16} strokeWidth={1.5} />
                  Solicitud enviada
                </>
              ) : (
                <>
                  <Send size={16} strokeWidth={1.5} />
                  Enviar confirmación
                </>
              )}
            </button>

            <p className="mx-auto mt-7 max-w-sm text-center font-serif text-sm italic leading-6 text-[#26343B]">
              Gracias por ayudarnos a preparar este día tan especial.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}