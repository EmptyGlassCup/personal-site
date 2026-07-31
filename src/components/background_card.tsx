export default function Background_Card(){
    return(
        <div id = "background-card" className = {`
        w-75 h-110 md:h-145 p-10
        border-solid border-[#0B3954] border-5 border-l-0 rounded-4xl md:rounded-l-none dark:border-[#3dccc7]
        bg-white dark:bg-[#0B3954]
        [transition:width_400ms,background-color_100ms]
        md:w-90 z-0
        absolute md:right-0
        flex flex-col justify-center items-center
        dark:text-[#3dccc7]`}>
        </div>
    );
}