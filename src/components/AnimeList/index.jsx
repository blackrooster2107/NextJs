import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 pb-6 border-b-2 text-a-primary">
            {api.data?.map(anime => {
                return (
                    <div key={anime.mal_id} className="shadow-xl">
                        <Link href={`/anime/${anime.mal_id}`} className='cursor-pointer grid grid-rows-3 h-60 hvr120 txtglw hover:text-a-accent'>
                            <Image 
                                src={anime.images.webp.image_url} 
                                alt={anime.title} 
                                width={350} 
                                height={350}
                                className="w-full max-h-60 object-cover" 
                                />
                            <div className="row-start-3 flex items-center">
                                <h3 className="font-bold bgtr30 text-center sm:text-base text-sm px-4 w-full">
                                    {anime.title}
                                </h3>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>

    )
}

export default AnimeList