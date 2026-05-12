export default function Card() {
    return (
        <div id = "main-card" className = {`
        w-90 h-150 p-10 pt-20
        border-solid border-black border-5 rounded-l-4xl
        bg-white
        flex flex-col items-center justify-between
        relative z-2`}>

            <div id="main-top" className="flex flex-col items-center gap-4">
                <div className = {`rounded-full border-solid border-black border-5 w-40 h-40`}></div>
                <p className = "text-4xl font-bold font-mono">Hyunjae Ha</p>
            </div>

            <div id = "content" className="text-4xl font-bold font-mono">
            </div>

            <div id = "bottom-links">
                <p>Hello. Welcome to my Notebook! :-)</p>
            </div>
        </div>
    );
};