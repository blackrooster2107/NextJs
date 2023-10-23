'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event)=>{
        event.preventDefault()
        const keyword = searchRef.current.value
        if(!keyword) {
            return }
        router.push(`/search/${keyword}`)
    }

    return (
        <form className="relative">
            <input
                placeholder="search anime ..."
                className="text-sm rounded p-1 w-full"
                ref={searchRef} 
            />
            <button className="absolute top-0.5 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </form>
    )
}

export default InputSearch