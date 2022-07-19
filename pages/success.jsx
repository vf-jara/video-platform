import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Img from "react-cool-img";
import Link from "next/link";
import axios from "axios";

export default function SuccessPage({ sessionData, customer }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router?.query?.error) {
      setError(router?.query?.error);
    }
  }, []);

  return (
    <div className="md:grid md:grid-cols-12 h-screen">
      <Head>
        <title>Crie a sua conta | IS com Ciência</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error && error === "notauthorized" ? (
        <div
          id="toast-danger"
          className="animate-fade-in-down absolute top-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs sm:max-w-lg text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-50"
          role="alert"
        >
          <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="ml-3 text-base sm:text-lg font-normal">
            <strong className="font-bold">Ooops! </strong>
            <span className="block sm:inline">
              Você precisa estar logado para acessar a plataforma.
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              setError("");
            }}
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-danger"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      ) : (
        error === "invalid" && (
          <div
            id="toast-danger"
            className="animate-fade-in-down absolute top-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs sm:max-w-lg text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-50"
            role="alert"
          >
            <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ml-3 text-base sm:text-lg font-normal">
              <strong className="font-bold">Ooops! </strong>
              <span className="block sm:inline">
                Usuário ou senha inválidos.
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setError("");
              }}
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-danger"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        )
      )}
      <div className="hidden md:block h-screen relative md:col-span-8">
        <Img
          src="/assets/images/fundo-2.jpg"
          className="object-cover absolute h-full"
        />
      </div>
      <div className="md:col-span-4 h-screen px-8 2xl:px-5 align-middle">
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-screen flex flex-col justify-center items-center align-middle">
            <Img src="/assets/images/logo.png" style={{ height: "100px" }} />
            {sessionData && customer && (
              <>
                <Head>
                  <title>Agradecemos a sua compra!</title>
                </Head>
                <h1 className="text-base text-center 2xl:text-lg text-blue-is font-semibold mt-8">
                  Deu tudo certo com sua assinatura, <br/><strong>{customer.name}</strong>!
                </h1>
              </>
            )}

            <p className="text-base text-center 2xl:text-lg text-blue-is font-semibold mt-8 mb-8">
              Clique no botão abaixo para acessar a plataforma
            </p>
            <Link
                href={{
                  pathname: "/login",
                }}
              >
                <a>
                  <button className="flex items-center justify-center text-center text-base 2xl:text-lg w-full px-6 py-4 bg-orange-is rounded-lg text-white font-bold hover:bg-orange-hv-is transition-all">
                    Clique aqui para entrar!
                  </button>
                </a>
              </Link>
          </div>
        </div>

        <footer className=""></footer>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/check`, { query: query });
  const { sessionData, customer } = data;
    return {
      props: {
        sessionData,
        customer,
      }
    }

};
