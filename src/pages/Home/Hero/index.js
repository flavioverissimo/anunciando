import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <div className="relative bg-gray-300">
        <img
          src="./herobg.jpg"
          alt="Faça seu anuncio grátis"
          className="absolute z-0 h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        <div className="relative z-20 bg-gray-50/75 mx-auto py-40 text-center">
          <img
            src="/anunciando.svg"
            alt="Anunciando"
            className="w-72 mx-auto"
          />
          <p className="mt-6 text-lg leading-8 text-gray-600 mx-auto w-3/6">
            Está procurando um site para fazer o seu anúncio? Está no lugar
            certo. Utilize nosso trabalho de forma gratuita.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/novo-anuncio"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Anunciar Grátis &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
