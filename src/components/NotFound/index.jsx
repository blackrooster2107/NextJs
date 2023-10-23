import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const NotFound= () => {
    return (
        <div className="min-h-screen text-a-accent flex flex-col justify-center items-center">
            <div className="border-4 p-4 flex flex-col justify-center items-center text-center">
                <div><FileSearch size={64} /></div>
                <div className="text-xl">Page Not Found</div>
                <Link href={'/'} className="underline">Back to home</Link>
            </div>
        </div>
    )
}

export default NotFound