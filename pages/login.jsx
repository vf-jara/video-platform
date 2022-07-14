import Head from "next/head";
import { useRouter } from 'next/router';
import Image from "next/image";
import { useEffect, useState } from "react";
import Img from "react-cool-img";
import { signIn, getSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const [enterMail, setEnterMail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signIn("credentials", { email: enterMail, password: enterPassword, redirect: false })
      .then(({ ok, error }) => {
        setTimeout(function() { //Start the timer
          setLoading(false);
        }, 1000);
        // setLoading(false);
        if(ok){
            router.push("/");
        }else{
            setError("invalid");
        }
      });
  };

  useEffect(()=> {
    if(router.query.error){
      setError(router.query.error);
    }
  }, []);

  return (
    <div className="md:grid md:grid-cols-12 h-screen">
      <Head>
        <title>Login | IS com Ciência</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error && error === 'notauthorized' ? (
          <div id="toast-danger" className="animate-fade-in-down absolute top-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs sm:max-w-lg text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-50" role="alert">
              <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </div>
              <div className="ml-3 text-base sm:text-lg font-normal">
                <strong className="font-bold">Ooops! </strong>
                <span className="block sm:inline">Você precisa estar logado para acessar a plataforma.</span>
              </div>
              <button type="button" onClick={()=> {setError("")}} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
                  <span className="sr-only">Close</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
          </div>
        ): error === 'invalid' && (
          <div id="toast-danger" className="animate-fade-in-down absolute top-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs sm:max-w-lg text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-50" role="alert">
              <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </div>
              <div className="ml-3 text-base sm:text-lg font-normal">
                <strong className="font-bold">Ooops! </strong>
                <span className="block sm:inline">Usuário ou senha inválidos.</span>
              </div>
              <button type="button" onClick={()=> {setError("")}} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
                  <span className="sr-only">Close</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
          </div>
        )}
      <div className="hidden md:block h-screen relative md:col-span-8">
        <Img
          src="/assets/images/fundo-2.jpg"
          className="object-cover absolute h-full"
        />
      </div>
      <div className="md:col-span-4 h-screen px-5 md:px-0 align-middle">
        <div className="w-full flex items-center justify-center">
          <div className="w-full md:w-[400px] h-screen flex flex-col justify-center items-center align-middle">
            <Image src="/assets/images/logo.png" width={136} height={138} />
            <p className="text-lg text-blue-is font-semibold mt-8">
              Acesse sua conta com seu e-mail e senha
            </p>
            <form
              className="w-full mb-8 mt-8 lg:mb-16"
              onSubmit={handleSubmit}
            >
              <label htmlFor="mail" className="block font-bold text-lg text-blue-is">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@email.com"
                className="w-full border border-[#C1C1C1] px-4 py-3 rounded-lg mt-2 mb-5 text-blue-is"
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
                className="block font-bold text-blue-is text-lg"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="**********"
                className="w-full border border-[#C1C1C1] px-4 py-3 rounded-lg mt-2 mb-5 text-blue-is"
                value={enterPassword}
                onChange={(e) => setEnterPassword(e.target.value)}
                required
              ></input>
              {loading && (
                <button
                  type="submit"
                  disabled
                  className="flex items-center justify-center text-center text-lg w-full px-6 py-4 bg-orange-is rounded-lg text-white font-bold hover:bg-orange-hv-is transition-colors"
                >
                  <svg className="animate-spin h-7 w-7 mr-5 flex" fill="transparent" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Aguarde...
                </button>
              )}
              {!loading && (
                <button
                  type="submit"
                  className="flex items-center justify-center text-center text-lg w-full px-6 py-4 bg-orange-is rounded-lg text-white font-bold hover:bg-orange-hv-is transition-all"
                >
                  Entrar
                </button>
              )}
            </form>
            <p className="mb-5 text-blue-is text-center text-lg">
              Ainda não faz parte da comunidade?
              <br/>
              <button href="" className="text-orange-is underline hover:font-bold transition-all">
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
  if(session){
    return{
      redirect: {
        destination: '/'
      }
    }
  }else{
    return {
      props: {},
    }
  }
};
