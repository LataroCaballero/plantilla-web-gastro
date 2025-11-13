import FadeInSection from "./FadeInSection";

export default function Menu({ data, colors }: any) {
    return (
      <FadeInSection>
      <section className="py-24 px-6 md:px-16 text-center bg-gray-50">
        <h2
          className="text-4xl font-bold mb-10"
          style={{ color: colors.primaryColor }}
        >
          Nuestro Menú
        </h2>
  
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {data.map((item: any, i: number) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 mb-4 flex justify-center items-center text-2xl">
                ☕
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: colors.primaryColor }}
              >
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{item.description}</p>
              <span
                className="text-lg font-bold mt-auto"
                style={{ color: colors.accentColor }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>
    );
  }
  