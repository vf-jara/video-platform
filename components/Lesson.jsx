import Link from "next/link";
import { Article, Headphones, MonitorPlay, Play } from "phosphor-react";

export default function Lesson(props) {
    const lessons = props.lessons;
    const course = props.course;
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
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                  <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                    <Article size={32} weight="fill" />
                  </div>

                  <strong className="block text-gray-700 underline">
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
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                  <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                    <MonitorPlay size={32} weight="bold" />
                  </div>
                  <div className="">
                    <strong className="text-gray-700 underline">
                      {lesson?.lesson?.data?.attributes?.title}
                    </strong>
                  </div>
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
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                  <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                    <MonitorPlay size={32} weight="bold" />
                  </div>
                  <div className="">
                    <strong className="text-gray-700 underline">
                      {lesson?.lesson?.data?.attributes?.title}
                    </strong>
                  </div>
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
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                  <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                    <Article size={32} weight="fill" />
                  </div>

                  <strong className="block text-gray-700 underline">
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
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                  <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                    <Article size={32} weight="fill" />
                  </div>

                  <strong className="block text-gray-700 underline">
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
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                  <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                    <Headphones size={32} weight="fill" />
                  </div>

                  <strong className="block text-gray-700 underline">
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
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                  <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                    <Article size={32} weight="fill" />
                  </div>

                  <strong className="block text-gray-700 underline">
                    {lesson?.lesson?.data?.attributes?.title}
                  </strong>
                </div>
              </a>
            </Link>
          )
        )}
      {/* <Link href="#" className="group" key={lesson.lesson.data.id}>
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                    <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                        <MonitorPlay size={32} weight="bold" />
                    </div>
                    <div className="">
                        <strong className="text-gray-700 underline">
                            Conteúdo em Vídeo
                        </strong>
                    </div>
                </div>
            </Link>

            <Link href="#" className="group" key={lesson.lesson.data.id}>
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                    <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                        <Headphones size={32} weight="fill" />
                    </div>

                    <strong className="block text-gray-700 underline">
                        Conteúdo em Áudio
                    </strong>
                </div>
            </Link>
            <Link href="#" className="group" key={lesson.lesson.data.id}>
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                    <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                        <Article size={32} weight="fill" />
                    </div>

                    <strong className="block text-gray-700 underline">
                        Conteúdo em Artigo
                    </strong>
                </div>
            </Link> */}
    </>
  );
}
