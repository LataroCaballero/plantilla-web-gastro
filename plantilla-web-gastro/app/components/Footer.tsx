"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer({ name, colors, data }: any) {
  const contact = data.contact;

  return (
    <footer
      className="py-20 px-6 md:px-16 text-white relative"
      style={{ backgroundColor: colors.primaryColor }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Columna de contacto */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            ¡Visitá <span style={{ color: colors.accentColor }}>Be! Coffee</span>!
          </h2>

          <div className="flex items-start gap-3 text-white/90">
            <FaMapMarkerAlt className="text-lg mt-1" />
            <p>{contact.address}</p>
          </div>

          <div className="flex items-start gap-3 text-white/90">
            <FaClock className="text-lg mt-1" />
            <div>
              <p>{contact.hours.weekdays}</p>
              <p>{contact.hours.weekend}</p>
            </div>
          </div>

          {/* Botón de WhatsApp con borde degradado */}
          <div className="relative mt-6 inline-block p-[2px] rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-400 ">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg relative z-10"
            >
              <FaWhatsapp className="text-xl" />
              Enviar WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Columna de mapa con borde degradado animado */}
        <motion.div
          className="relative p-[3px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="absolute inset-0 rounded-2xl animate-[spin_8s_linear_infinite]"
            style={{
              background: `conic-gradient(from 180deg, ${colors.accentColor}, ${colors.primaryColor}, ${colors.accentColor})`,
              opacity: 0.5,
            }}
          ></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] bg-white/10">
            <iframe
              src={contact.map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Línea inferior */}
      <div className="mt-16 border-t border-white/20 pt-6 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} {name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
