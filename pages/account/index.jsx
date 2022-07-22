import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import { ArrowLeft, Monitor, User } from "phosphor-react";
import Img from "react-cool-img";
import Header from "../../components/Header";

export default function Account({ session, userProducts, isActive }) {
  return (
    <>
      <div className="flex justify-start bg-slate-100 dark:bg-slate-900">
        <div className="flex flex-col w-64 h-screen py-8 bg-white border-r dark:bg-slate-800 dark:border-gray-600 rounded-tr-3xl rounded-br-3xl">
          <div className="flex justify-center py-4">
            <Link href="/">
              <a>
                <Img
                  src="/assets/images/logo-h.png"
                  alt="Logo IS com Ciência"
                />
              </a>
            </Link>
          </div>

          <div className="flex flex-col items-center mt-6 -mx-2">
            <Img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
              {session?.user?.fullName || "Seu Nome Aqui"}
            </h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
              {session?.user?.email || "email@email.com"}
            </p>
          </div>

          <div className="flex flex-col mt-6">
            <div className="w-full justify-between space-y-4">
              <Link href="/">
                <a>
                  <button className="w-full flex items-center px-4 py-2 text-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
                    <ArrowLeft size={32} color="#f26321" weight="regular" />

                    <span className="mx-4 font-medium">Voltar</span>
                  </button>
                </a>
              </Link>

              <button className="w-full flex items-center px-4 py-2 text-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
                <Monitor size={32} color="#f26321" weight="regular" />

                <span className="mx-4 font-medium">Dashboard</span>
              </button>

              <button className="w-full flex items-center px-4 py-2 text-slate-800  dark:text-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
                <User size={32} color="#f26321" weight="regular" />

                <span className="mx-4 font-medium">Meu Plano</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-fit h-screen p-8">
          <h1 className="text-3xl dark:text-white text-slate-900 font-bold py-4">
            Dashboard
          </h1>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col p-4 bg-slate-800 w-64 rounded-md justify-between">
              <h2 className="text-lg dark:text-white text-slate-800 pb-4">
                Seus créditos restantes:
              </h2>
              <p className="text-5xl dark:text-white text-slate-800 font-bold">
                5 <span className="text-lg font-normal">créditos</span>
              </p>
            </div>
            <div className="flex flex-col p-4 bg-slate-800 w-64 rounded-md justify-between">
              <h2 className="text-lg dark:text-white text-slate-800 pb-4">
                Conteúdos consumidos este mês:
              </h2>
              <p className="text-5xl dark:text-white text-slate-800 font-bold">
                0 <span className="text-lg font-normal">conteúdos</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login?error=notauthorized",
      },
    };
  } else {
    let d1 = new Date();
    let d2 = new Date(session.expires);
    if (d1 > d2) {
      signOut({
        callbackUrl: `${process.env.NEXT_PUBLIC_API_URL}/login?error=notauthorized`,
      });
    }
    const arrProducts = [];
    session?.user?.products.map((p) => {
      arrProducts.push(p?.id);
    });
    return {
      props: {
        session,
        userProducts: arrProducts || [],
        isActive: session?.user?.subscriptionActive || false,
      },
    };
  }
};
