import Image from 'next/image';

export default function Time() {
  return (
    <main className="w-[90%] mx-auto my-5">
      <div className="text-center">
        <h2 className="text-[#40a1e0] text-2xl">Quem somos?</h2>
        <h3 className="text-[#40a1e0] text-xl font-normal mt-3">
          Nossa <span className="font-bold">Equipe</span>
        </h3>

        <div className="flex justify-center flex-wrap gap-5 mt-10 mb-16">
          <div className="member bg-[#40a1e0] shadow-md p-5 rounded-lg w-full sm:w-[calc(33.333%-20px)] text-center flex flex-col items-center">
            <Image
              src="/img/leonardobianchii.jpeg"
              alt="Leonardo Bianchi"
              width={100}
              height={100}
              className="rounded-full mb-2"
            />
            <h4>Leonardo Bianchi</h4>
            <p>RM: 558576</p>
            <p>Scrum Master/Product Owner</p>
            <div className="social-links mt-2">
              <a href="https://github.com/leonardobianchii" target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-700">GitHub</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-700">Instagram</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-700">LinkedIn</a>
            </div>
          </div>

          <div className="member bg-[#40a1e0] shadow-md p-5 rounded-lg w-full sm:w-[calc(33.333%-20px)] text-center flex flex-col items-center">
            <Image
              src="/img/HeitorOrtega.png"
              alt="Heitor Ortega"
              width={100}
              height={100}
              className="rounded-full mb-2"
            />
            <h4>Heitor Ortega</h4>
            <p>RM: 557825</p>
            <p>Full Stack Developer</p>
            <div className="social-links mt-2">
              <a href="https://github.com/HeitorOrtega" target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-700">GitHub</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-700">Instagram</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-700">LinkedIn</a>
            </div>
          </div>

          <div className="member bg-[#40a1e0] shadow-md p-5 rounded-lg w-full sm:w-[calc(33.333%-20px)] text-center flex flex-col items-center">
            <Image
              src="/img/robert.jpeg"
              alt="Robert Daniel"
              width={100}
              height={100}
              className="rounded-full mb-2"
            />
            <h4>Robert Daniel</h4>
            <p>RM: 555881</p>
            <p>Back-End Developer</p>
            <div className="social-links mt-2">
              <a href="https://github.com/danie-anx" target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-700">GitHub</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-700">Instagram</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-700">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="repositorio text-center mt-6 w-full">
          <a
            href="https://github.com/HeitorOrtega/Sprint4_React"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-5 bg-[#40a1e0] text-white rounded transition duration-300 ease-in-out hover:bg-[#32b9cd]"
          >
            Repositório no GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
