import FadeInSection from "./FadeInSection";

export default function About({ data, colors }: any) {
  return (
    <FadeInSection>
      <section
        id="about"
        className="py-20 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12"
      >
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: colors.primaryColor }}
          >
            {data.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            {data.text}
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-[300px] md:w-[380px] h-[300px] md:h-[380px] bg-[url('/images/about-cafe.jpg')] bg-cover bg-center rounded-2xl shadow-lg"></div>
        </div>
      </section>
    </FadeInSection>
  );
}
