import FadeInSection from "./FadeInSection";

export default function Experience({ colors }: any) {
  return (
    <FadeInSection>
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <h2
              className="text-4xl font-bold"
              style={{ color: colors.primaryColor }}
            >
              La Experiencia Be! Coffee
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              En Be! Coffee no solo servimos café, creamos momentos.  
              Desde la música suave hasta el aroma del espresso recién molido,  
              todo está diseñado para que cada visita sea especial.
            </p>
            <p className="text-gray-600 text-lg">
              Vení a desconectarte, inspirarte y compartir algo más que una bebida.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/experience.jpg"
                alt="Experiencia Be! Coffee"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white shadow-lg rounded-xl p-4 w-48 text-center">
              <p
                className="font-bold text-lg"
                style={{ color: colors.primaryColor }}
              >
                +500 tazas al día
              </p>
              <p className="text-sm text-gray-500">de pura felicidad ☕</p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
