import Link from "next/link";
import { Article, CheckCircle, File, FilePdf, Headphones, Image, MonitorPlay } from "phosphor-react";

export default function Lesson({lessons, course, historico}) {

  function verifica(id){
    let v = historico.find( (e) => {
      if(e == id){
        return true;
      }else{
        return false;
      }
    });
    return v;
  }

  return (
    <>
      {lessons !== [] &&
        lessons?.map((lesson) =>
          lesson?.lesson?.data?.attributes?.content[0]?.__typename ===
          "ComponentContentsArticle" ? (
            <Link
                href={{
                    pathname: '/[slug]/lesson/[lesson]',
                    query: { slug: course, lesson: lesson?.lesson?.data?.attributes?.slug},
                }}
              className="group" key={lesson.lesson.data.id}
            >
              <a>
                <div className={`${verifica(lesson?.lesson?.data?.id) ? 'bg-green-500 border-green-600 hover:bg-green-600' : 'hover:border-orange-is'} transition-all delay-75 flex border rounded-md items-center gap-1 px-4 py-6 `}>
                  <div className={`rounded-full ${verifica(lesson?.lesson?.data?.id) ? ' text-white' : 'bg-orange-100 text-orange-is'} p-2 `}>
                    {verifica(lesson?.lesson?.data?.id) ? (
                      <CheckCircle size={32} color="#ffffff" weight="fill" />
                    ): (
                      <Article size={32} weight="fill" />
                    )}
                  </div>

                  <strong className={`${verifica(lesson?.lesson?.data?.id) ? 'text-white' : 'text-gray-700'} block `}>
                    {lesson?.lesson?.data?.attributes?.title}
                  </strong>
                </div>
              </a>
            </Link>
          ) : lesson?.lesson?.data?.attributes?.content[0]?.__typename ===
            "ComponentContentsVideoLocal" ? (
            <Link
              href={{
                    pathname: '/[slug]/lesson/[lesson]',
                    query: { slug: course, lesson: lesson?.lesson?.data?.attributes?.slug},
                }}
              className="group" key={lesson.lesson.data.id}
              replace
            >
              <a>
                <div className={`${verifica(lesson?.lesson?.data?.id) ? 'bg-green-500 border-green-600 hover:bg-green-600' : 'hover:border-orange-is'} transition-all delay-75 flex border rounded-md items-center gap-1 px-4 py-6 `}>
                  <div className={`rounded-full ${verifica(lesson?.lesson?.data?.id) ? ' text-white' : 'bg-orange-100 text-orange-is'} p-2 `}>
                    {verifica(lesson?.lesson?.data?.id) ? (
                      <CheckCircle size={32} color="#ffffff" weight="fill" />
                    ): (
                      <MonitorPlay size={32} weight="bold" />
                    )}
                  </div>

                  <strong className={`${verifica(lesson?.lesson?.data?.id) ? 'text-white' : 'text-gray-700'} block `}>
                    {lesson?.lesson?.data?.attributes?.title}
                  </strong>
                </div>
              </a>
            </Link>
          ) : lesson?.lesson?.data?.attributes?.content[0]?.__typename ===
            "ComponentContentsVideoExternal" ? (
            <Link
              href={{
                    pathname: '/[slug]/lesson/[lesson]',
                    query: { slug: course, lesson: lesson?.lesson?.data?.attributes?.slug},
                }}
              className="group" key={lesson.lesson.data.id}
              replace
            >
              <a>
              <div className={`${verifica(lesson?.lesson?.data?.id) ? 'bg-green-500 border-green-600 hover:bg-green-600' : 'hover:border-orange-is'} transition-all delay-75 flex border rounded-md items-center gap-1 px-4 py-6 `}>
                  <div className={`rounded-full ${verifica(lesson?.lesson?.data?.id) ? ' text-white' : 'bg-orange-100 text-orange-is'} p-2 `}>
                    {verifica(lesson?.lesson?.data?.id) ? (
                      <CheckCircle size={32} color="#ffffff" weight="fill" />
                    ): (
                      <MonitorPlay size={32} weight="bold" />
                    )}
                  </div>

                  <strong className={`${verifica(lesson?.lesson?.data?.id) ? 'text-white' : 'text-gray-700'} block `}>
                    {lesson?.lesson?.data?.attributes?.title}
                  </strong>
                </div>
              </a>
            </Link>
          ) : lesson?.lesson?.data?.attributes?.content[0]?.__typename ===
            "ComponentContentsImage" ? (
            <Link
              href={{
                    pathname: '/[slug]/lesson/[lesson]',
                    query: { slug: course, lesson: lesson?.lesson?.data?.attributes?.slug},
                }}
              className="group" key={lesson.lesson.data.id}
              replace
            >
              <a>
                <div className={`${verifica(lesson?.lesson?.data?.id) ? 'bg-green-500 border-green-600 hover:bg-green-600' : 'hover:border-orange-is'} transition-all delay-75 flex border rounded-md items-center gap-1 px-4 py-6 `}>
                  <div className={`rounded-full ${verifica(lesson?.lesson?.data?.id) ? ' text-white' : 'bg-orange-100 text-orange-is'} p-2 `}>
                    {verifica(lesson?.lesson?.data?.id) ? (
                      <CheckCircle size={32} color="#ffffff" weight="fill" />
                    ): (
                      <Image size={32} weight="bold" />
                    )}
                  </div>

                  <strong className={`${verifica(lesson?.lesson?.data?.id) ? 'text-white' : 'text-gray-700'} block `}>
                    {lesson?.lesson?.data?.attributes?.title}
                  </strong>
                </div>
              </a>
            </Link>
          ) : lesson?.lesson?.data?.attributes?.content[0]?.__typename ===
            "ComponentContentsPdf" ? (
            <Link
              href={{
                    pathname: '/[slug]/lesson/[lesson]',
                    query: { slug: course, lesson: lesson?.lesson?.data?.attributes?.slug},
                }}
              className="group" key={lesson.lesson.data.id}
              replace
            >
              <a>
                <div className={`${verifica(lesson?.lesson?.data?.id) ? 'bg-green-500 border-green-600 hover:bg-green-600' : 'hover:border-orange-is'} transition-all delay-75 flex border rounded-md items-center gap-1 px-4 py-6 `}>
                  <div className={`rounded-full ${verifica(lesson?.lesson?.data?.id) ? ' text-white' : 'bg-orange-100 text-orange-is'} p-2 `}>
                    {verifica(lesson?.lesson?.data?.id) ? (
                      <CheckCircle size={32} color="#ffffff" weight="fill" />
                    ): (
                      <FilePdf size={32} weight="bold" />
                    )}
                  </div>

                  <strong className={`${verifica(lesson?.lesson?.data?.id) ? 'text-white' : 'text-gray-700'} block `}>
                    {lesson?.lesson?.data?.attributes?.title}
                  </strong>
                </div>
              </a>
            </Link>
          ) : lesson?.lesson?.data?.attributes?.content[0]?.__typename ===
            "ComponentContentsAudio" ? (
            <Link
              href={{
                    pathname: '/[slug]/lesson/[lesson]',
                    query: { slug: course, lesson: lesson?.lesson?.data?.attributes?.slug},
                }}
              className="group" key={lesson.lesson.data.id}
              replace
            >
              <a>
                <div className={`${verifica(lesson?.lesson?.data?.id) ? 'bg-green-500 border-green-600 hover:bg-green-600' : 'hover:border-orange-is'} transition-all delay-75 flex border rounded-md items-center gap-1 px-4 py-6 `}>
                  <div className={`rounded-full ${verifica(lesson?.lesson?.data?.id) ? ' text-white' : 'bg-orange-100 text-orange-is'} p-2 `}>
                    {verifica(lesson?.lesson?.data?.id) ? (
                      <CheckCircle size={32} color="#ffffff" weight="fill" />
                    ): (
                      <Headphones size={32} weight="bold" />
                    )}
                  </div>

                  <strong className={`${verifica(lesson?.lesson?.data?.id) ? 'text-white' : 'text-gray-700'} block `}>
                    {lesson?.lesson?.data?.attributes?.title}
                  </strong>
                </div>
              </a>
            </Link>
          ) : (
            <Link
              href={{
                    pathname: '/[slug]/lesson/[lesson]',
                    query: { slug: course, lesson: lesson?.lesson?.data?.attributes?.slug},
                }}
              className="group" key={lesson.lesson.data.id}
              replace
            >
              <a>
                <div className={`${verifica(lesson?.lesson?.data?.id) ? 'bg-green-500 border-green-600 hover:bg-green-600' : 'hover:border-orange-is'} transition-all delay-75 flex border rounded-md items-center gap-1 px-4 py-6 `}>
                  <div className={`rounded-full ${verifica(lesson?.lesson?.data?.id) ? ' text-white' : 'bg-orange-100 text-orange-is'} p-2 `}>
                    {verifica(lesson?.lesson?.data?.id) ? (
                      <CheckCircle size={32} color="#ffffff" weight="fill" />
                    ): (
                      <File size={32} weight="bold" />
                    )}
                  </div>

                  <strong className={`${verifica(lesson?.lesson?.data?.id) ? 'text-white' : 'text-gray-700'} block `}>
                    {lesson?.lesson?.data?.attributes?.title}
                  </strong>
                </div>
              </a>
            </Link>
          )
        )}
    </>
  );
}
