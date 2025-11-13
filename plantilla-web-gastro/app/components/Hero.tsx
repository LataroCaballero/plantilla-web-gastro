"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero({ data, colors }: any) {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Movimiento sutil del fondo (parallax)
  const yBg = useTransform(scrollY, [0, 500], [0, 100]); // moverá el fondo 100px al hacer scroll

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Fondo con efecto parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${data.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: yBg,
        }}
      />

      {/* Overlay cálido */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      {/* Contenido */}
      <motion.div
        className="relative z-10 text-white px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {data.headline}
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {data.subtext}
        </motion.p>

        <motion.button
          onClick={() => {
            const el = document.getElementById("menu");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          style={{
            backgroundColor: colors.accentColor,
            color: "#fff",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Ver menú
        </motion.button>
      </motion.div>

      {/* Efecto de grano sutil */}
      <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-10 mix-blend-overlay"></div>
    </section>
  );
}
