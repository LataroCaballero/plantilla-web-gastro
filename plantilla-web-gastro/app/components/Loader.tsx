"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ colors }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Duración del loader (2s)
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Círculo animado tipo splash */}
          <motion.div
            className="rounded-full flex items-center justify-center mb-6"
            style={{
              width: 90,
              height: 90,
              backgroundColor: colors.accentColor,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.span
              className="text-white text-3xl font-extrabold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              ☕
            </motion.span>
          </motion.div>

          {/* Nombre de marca */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: colors.primaryColor }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Be! <span style={{ color: colors.accentColor }}>Coffee</span>
          </motion.h1>

          {/* Subtexto */}
          <motion.p
            className="text-gray-500 mt-3 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Hecho con pasión.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
