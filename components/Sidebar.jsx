import Lesson from "./Lesson"

export default function Sidebar({lessons, course, session, courseId, historico}) {
    return (
        <aside className="w-[385px] shadow-lg">
            <div className="bg-orange-is p-6">
                <span className="font-bold text-2xl text-white block">
                    Conteúdos
                </span>
            </div>
            <div className="flex flex-col gap-2 p-3">
                <Lesson lessons={lessons} course={course} courseId={courseId} session={session} historico={historico} />
            </div>
        </aside>
    )
}