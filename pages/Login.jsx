import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Img from "react-cool-img";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from 'next/router';

export default function Login({ session }) {
  const router = useRouter();
  if(session){
    router.push('/home');
  }
  const [enterMail, setEnterMail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("credentials", { email: enterMail, password: enterPassword, callbackUrl: '/' });
  };

  return (
    <div className="md:grid md:grid-cols-12 h-screen">
      <Head>
        <title>Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden md:block h-screen relative md:col-span-8">
        <Img
          src="/assets/images/fundo-2.jpg"
          className="object-cover absolute h-full"
        />
      </div>
      <div className="md:col-span-4 h-screen px-5 md:px-0">
        <div className="w-full flex items-center justify-center">
          <div className="w-full md:w-[400px] h-screen flex flex-col justify-center items-center">
            <Image src="/assets/images/logo.png" width={136} height={138} />
            <p className="text-blue-is font-semibold mt-8">
              Acesse sua conta com seu e-mail e senha
            </p>
            <form
              className="w-full mb-8 mt-8 lg:mb-16"
              onSubmit={handleSubmit}
            >
              <label htmlFor="mail" className="block font-bold text-blue-is">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@email.com"
                className="w-full border border-[#C1C1C1] px-4 py-3 rounded-lg mt-2 mb-5"
                value={enterMail}
                onChange={(e) => setEnterMail(e.target.value)}
                required
              ></input>

              <div className="flex flex-row justify-end -mb-6">
                <a href="#" className="text-purple-is underline">
                  Esqueceu sua senha?
                </a>
              </div>

              <label
                htmlFor="password"
                className="block font-bold text-blue-is"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="**********"
                className="w-full border border-[#C1C1C1] px-4 py-3 rounded-lg mt-2 mb-5"
                value={enterPassword}
                onChange={(e) => setEnterPassword(e.target.value)}
                required
              ></input>

              <button
                type="submit"
                className="block text-center text-lg w-full px-6 py-4 bg-orange-is rounded-lg text-white font-bold hover:bg-orange-hv-is transition-colors"
              >
                Entrar
              </button>
            </form>
            <p className="mb-5 text-blue-is">
              Ainda não faz parte? ‎
              <button href="" className="text-orange-is underline">
                Assine agora!
              </button>
            </p>
          </div>
        </div>

        <footer className=""></footer>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return {
    props: {
      session,
    },
  };
};
