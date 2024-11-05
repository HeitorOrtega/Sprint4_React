import Link from 'next/link';
import Image from 'next/image';

export default function Home(){
  return (
    <header className="border-b-4 border-teal-500">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
      <Image src="/img/smart.png" alt="Ícone da empresa" width={200} height={200} />
        <ul className="flex space-x-8 text-blue-600">
          <li><Link href="/">Inicial</Link></li>
          <li><Link href="/about">Quem Somos</Link></li>
          <li><Link href="/cadastro">Cadastro</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </div>
    </header>
  );
}
