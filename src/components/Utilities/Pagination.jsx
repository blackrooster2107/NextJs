import Link from "next/link";

export default function Pagination ({page, lastPage, prevpage, nextpage}) {

    return (
        <div className="py-4 px-2 flex justify-center items-center gap-8 text-a-primary">
            {page === '1'?
                <p className="text-a-secondary">prev</p>:
                <Link href={prevpage} className="transition-all hover:text-a-accent">prev</Link>
            }
            <p> page {page} of {lastPage} </p>
            {parseInt(page) >= lastPage ?
                <p className="text-a-secondary">next</p>:
                <Link href={nextpage} className="transition-all hover:text-a-accent">next</Link>
            }
        </div>
    )
}