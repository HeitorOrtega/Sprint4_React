import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white">
      <section
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/banner-oficial.png')" }}
      >
        <div className="container mx-auto h-full flex items-center justify-center text-center text-4xl text-white">
          <div>
            <p className='mb-3'>
              Dirija com <span className="font-extrabold">Confiança</span>, Diagnostique com <span className="font-extrabold">Inteligência.</span>
            </p>
            <p className='mb-3'>
              Clique para conhecer nosso produto.
            </p>
            <a 
              href="/produto" 
              className="mt-4 inline-block bg-[#56a3e0] text-white px-4 py-2 rounded transition duration-200 ease-in-out hover:bg-[#40a1e0] mx-auto"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-10">
        <div className="container mx-auto flex justify-center">
          <div className="flex space-x-24">
            {/* Bloco de ícones e textos */}
            <div className="flex flex-col items-center max-w-xs">
              <Image src="/img/planet-earth_color.png" alt="Ícone da missão" width={170} height={170} className="mb-4" />
              <h4 className="font-bold text-lg text-center">Missão</h4>
              <p className="text-center text-sm leading-relaxed">
                Nossa missão é revolucionar a manutenção veicular, oferecendo uma forma simples e eficiente para proprietários de automóveis monitorarem e manterem seus veículos com tecnologia avançada e acessível.
              </p>
            </div>

            <div className="flex flex-col items-center max-w-xs">
              <Image src="/img/lightbulb_color.png" alt="Ícone da visão" width={170} height={170} className="mb-4" />
              <h4 className="font-bold text-lg text-center">Visão</h4>
              <p className="text-center text-sm leading-relaxed">
                Nosso objetivo é liderar globalmente em soluções de autodiagnóstico veicular, tornando o cuidado com o carro integrado e intuitivo, antecipando e prevenindo problemas para garantir a segurança dos motoristas.
              </p>
            </div>

            <div className="flex flex-col items-center max-w-xs">
              <Image src="/img/planet-earth_color.png" alt="Ícone dos valores" width={170} height={170} className="mb-4" />
              <h4 className="font-bold text-lg text-center">Valores</h4>
              <p className="text-center text-sm leading-relaxed">
                Valorizamos a inovação, a confiabilidade, o empoderamento do usuário, a sustentabilidade e o fortalecimento da comunidade, pois acreditamos que esses fundamentos contribuem não apenas para a longevidade dos veículos, mas também para um ambiente mais sustentável e um suporte comunitário robusto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
