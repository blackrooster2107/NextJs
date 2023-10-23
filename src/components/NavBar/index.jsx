import Link from "next/link"
import InputSearch from "./InputSearch"

const NavBar = ()=>{
    return (
        <header className="bg-a-accent flex sm:flex-row flex-col gap-2 justify-between p-4">
            <Link href={`/`} className="font-bold text-2xl text-a-dark">My Anime List</Link>
            <InputSearch />
        </header>
    )
}

export default NavBar