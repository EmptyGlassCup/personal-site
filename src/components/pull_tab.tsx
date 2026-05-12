export default function Pull_Tab({ onAddClick }){
    return(
        <div onClick={ onAddClick } className={`
        w-20 h-20
        border-black border-5
        bg-white
        rounded-r-3xl
        absolute -right-20 top-60`}>
        </div>
    )
}