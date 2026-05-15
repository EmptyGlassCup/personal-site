interface Pull_TabProps{
    onAddClick: () => void;
}

export default function Pull_Tab({ onAddClick }: Pull_TabProps){
    return(
        <div onClick={ onAddClick } className={`
        w-15 h-15
        md:w-25 md:h-25
        border-[#0B3954] border-5 dark:border-[#3dccc7]
        bg-white dark:bg-[#0B3954]
        hover:bg-[#9CEAEF]
        duration-100
        rounded-b-3xl md:rounded-l-none md:rounded-r-3xl
        absolute -bottom-15 md:bottom-auto md:-right-25
        flex flex-col justify-center items-center`}>

            <svg className = "w-4 md:w-7 fill-[#0B3954] dark:fill-[#3dccc7]" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"/>
                <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"/>
            </svg>
            <p className = "font-mono text-[8px] md:text-xs text-[#0B3954] dark:text-[#3dccc7]">about me</p>
        </div>
    )
}