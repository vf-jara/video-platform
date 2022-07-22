import { getSession, signOut } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SliderPadrao from "../components/Slider";
import { homeInfo } from "../lib/api";
import ProductContext from "../context/ProductContext";


export default function Home({ session, courses, homepageInfo, isActive, userProducts }) {
  const router = useRouter();
  if (isActive) {
    return (
      <>
        <ProductContext.Provider
            value={{
                state: {
                  session,
                  courses,
                  homepageInfo,
                  isActive,
                  userProducts
                }
            }}>
          <Head>
            <title>{homepageInfo?.seoTitle || "Dashboard"}</title>
            <meta
              name="description"
              content={homepageInfo?.seoDescription || "Description"}
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="bg-[#000303] pb-16 min-h-screen">
            <div
              className="bg-top xl:bg-bottom bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${homepageInfo?.heroImage?.data?.attributes?.url})`,
              }}
            >
              <Header name={session.user.fullName} email={session.user.email} isActive={isActive} />
              <div className="md:w-2/3 2xl:flex 2xl:flex-col 2xl:justify-center px-8 md:px-20 2xl:h-[55vh] pt-8 2xl:pt-0">
                <h1 className="text-white font-bold text-5xl md:text-6xl pb-4 fadeInUp">
                  {homepageInfo?.heroTitle || "[Hero Title] As bases da IS"}
                </h1>
                <p className="text-white text-base md:text-lg lg:text-xl py-5 lg:w-4/5 mb-12 fadeInUp delay-200">
                  {homepageInfo?.heroDescription ||
                    "[Hero Description] Lorem Ipsum"}
                </p>
                <button
                  className="delay-600 fadeIn text-base flex 2xl:w-1/4 align-middle ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 text-white px-10 pt-[16px] pb-[17px] bg-orange-is hover:bg-white hover:text-orange-is justify-center rounded-md font-medium"
                  onClick={() => {
                    router.push(homepageInfo?.heroButtonLink || "/");
                  }}
                >
                  {homepageInfo?.heroButtonText || "[Button] Assistir"}
                  <svg
                    className="w-5 h-5 ml-2 -mr-1 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="px-5 md:px-16 pt-16 w-full">
                <h2 className="px-4 text-2xl font-bold text-white pb-7">
                  Conteúdos Recentes
                </h2>
                {courses && <SliderPadrao cursos={courses} />}
              </div>
            </div>

            {/* <div className="pt-16 px-5 md:px-16 w-full">
              <h2 className="px-4 text-2xl font-bold text-white pb-7">
                Cursos Completos
              </h2>
              {courses && <SliderPadrao cursos={courses} />}
            </div> */}
          </div>
        </ProductContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>{homepageInfo?.seoTitle || "Dashboard"}</title>
          <meta
            name="description"
            content={homepageInfo?.seoDescription || "Description"}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-[#000303] pb-16 h-screen">
          <div
            className=" bg-slate-800"
          >
            <Header name={session.user.fullName} email={session.user.email} isActive={isActive} />
            <div className="md:w-4/5 2xl:pt-32 pt-16 px-8 md:px-20 2xl:pb-20 h-screen items-center justify-center mx-auto">
              <div
                className="p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
                role="alert"
              >
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-5 h-5 text-red-700 dark:text-red-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <h3 className="text-lg font-medium text-red-700 dark:text-red-800">
                    Sua conta não está ativa
                  </h3>
                </div>
                <div className="mt-2 mb-4 text-base text-red-700 dark:text-red-800">
                  Identificamos inconsistências no seu pagamento. Se a sua assinatura for via Boleto aguarde até a compensação do mesmo.
                  <br />
                  <br />
                  Caso tenha dúvidas sobre o faturamento da sua conta, clique no botão abaixo e entre em contato com a nossa equipe pelo WhatsApp.
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-4 py-2 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900"
                  >
                    Falar com o Suporte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
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
    if (!session?.user?.subscriptionActive) {
      return {
          redirect: {
              destination: '/'
          }
      }
    }
    let d1 = new Date();
    let d2 = new Date(session.expires);
    if(d1 > d2){
      signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_API_URL}/login?error=notauthorized` })
    }
    const arrProducts = [];
    session?.user?.products.map((p) => {
      arrProducts.push(p?.id);
    })
    const home = await homeInfo(session);
    return {
      props: {
        session,
        userProducts: arrProducts || [],
        courses: home?.data?.courses?.data || [],
        homepageInfo: home?.data?.homepage?.data?.attributes || [],
        isActive: session?.user?.subscriptionActive || false,
      },
    };
  }
};
