"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroLogin, setErroLogin] = useState('');
    const [mensagemSucessoLogin, setMensagemSucessoLogin] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

        if (usuario) {
            setMensagemSucessoLogin('Login realizado com sucesso!');
            setErroLogin('');
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

            // Redireciona para a página de agendamento após o login
            setTimeout(() => {
                router.push('/agendamento');
            }, 2000);
        } else {
            setErroLogin('Email ou senha incorretos.');
            setMensagemSucessoLogin('');

            setTimeout(() => {
                setErroLogin('');
            }, 3000);
        }
    };

    return (
        <>
            <section className="banner h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('../img/banner-oficial.png')" }}>
                <div className="h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl font-extrabold">Login</h1>
                    <p className="mt-3 text-xl">Realize seu login abaixo e utilize nossos benefícios.</p>
                </div>
            </section>

            <main className="flex justify-center py-10">
                <div className="login-container w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <form className="login-form text-center">
                        <div className="login-form-group mb-5">
                            <label htmlFor="email" className="login-label block mb-1">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="login-input w-full p-2 border border-gray-300 rounded"
                                placeholder="Insira seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login-form-group mb-5">
                            <label htmlFor="senha" className="login-label block mb-1">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                className="login-input w-full p-2 border border-gray-300 rounded"
                                placeholder="Insira sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                        >
                            Entrar
                        </button>

                        {erroLogin && <p className="text-red-500 mt-2">{erroLogin}</p>}
                        {mensagemSucessoLogin && <p className="text-green-500 mt-2">{mensagemSucessoLogin}</p>}
                    </form>
                </div>
            </main>
        </>
    );
};

export default Login;
