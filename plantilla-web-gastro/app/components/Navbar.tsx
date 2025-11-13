"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ colors }: any) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-sm"
          : "bg-transparent text-white"
      }`}
      style={{ color: scrolled ? colors.primaryColor : "#fff" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          className="text-2xl font-extrabold tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ color: scrolled ? colors.primaryColor : "#fff" }}
        >
          Be! <span style={{ color: colors.accentColor }}>Coffee</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <button
            onClick={() => scrollTo("about")}
            className="hover:opacity-70 transition"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollTo("menu")}
            className="hover:opacity-70 transition"
          >
            Menú
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:opacity-70 transition"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X
              className="w-6 h-6"
              style={{ color: scrolled ? colors.primaryColor : "#fff" }}
            />
          ) : (
            <Menu
              className="w-6 h-6"
              style={{ color: scrolled ? colors.primaryColor : "#fff" }}
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center gap-4 py-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => scrollTo("about")}
              className="text-lg font-medium text-gray-800 hover:text-gray-500 transition"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollTo("menu")}
              className="text-lg font-medium text-gray-800 hover:text-gray-500 transition"
            >
              Menú
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-lg font-medium text-gray-800 hover:text-gray-500 transition"
            >
              Contacto
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
