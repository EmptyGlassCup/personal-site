import Pull_Tab from "./pull_tab";

export default function Card() {
    return (
        <div className = "w-90 h-150 p-10 border-solid border-black border flex flex-col items-center justify-between relative">
            <div className = "rounded-full border-solid border-black border w-40 h-40"></div>

            <div>
                <p>Hyunjae Ha</p>
                <a href="https://www.linkedin.com/in/hyunjaeha/" target="_blank">LinkedIn</a>
            </div>

            <div>
                <button className = "border hover:bg-blue-600">
                    a
                </button>
                <button className = "border hover:bg-blue-600">
                    a
                </button>
                <button className = "border hover:bg-blue-600">
                    a
                </button>
            </div>

            <Pull_Tab />
        </div>
    );
};