import Info from "@/components/Utilities/Info"
import Lbl from "@/components/Utilities/Lbl"
import NotFound from "@/components/NotFound"
import Image from "next/image"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Link from "next/link"

const Page = async ({ params }) => {
    const { animeId } = params

    const apiurl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${animeId}/full`
    const response = await fetch(apiurl)
    const anime = await response.json()

    if (anime.status === 404) {
        return (
            <NotFound />
        )
    }
    else {

        let producers = ''
        for (let i in anime.data.producers) { producers = producers.concat(anime.data.producers[i].name + ', ') }
        producers = producers.slice(0, producers.length - 2)

        let licensors = ''
        for (let i in anime.data.licensors) { licensors = licensors.concat(anime.data.licensors[i].name + ', ') }
        licensors = licensors.slice(0, licensors.length - 2)

        let studios = ''
        for (let i in anime.data.studios) { studios = studios.concat(anime.data.studios[i].name + ', ') }
        studios = studios.slice(0, studios.length - 2)

        let genres = ''
        for (let i in anime.data.genres) { genres = genres.concat(anime.data.genres[i].name + ', ') }
        genres = genres.slice(0, genres.length - 2)

        let airfrom = anime.data.aired.from
        const datefrom = airfrom.slice(8, 10)
        const mthfrom = airfrom.slice(5, 7)
        const yrfrom = airfrom.slice(0, 4)

        let airto = anime.data.aired.from
        const dateto = airto.slice(8, 10)
        const mthto = airto.slice(5, 7)
        const yrto = airto.slice(0, 4)

        const aired = datefrom + '-' + mthfrom + '-' + yrfrom + ' to ' + dateto + '-' + mthto + '-' + yrto

        const trailer = anime.data.trailer.url
        const streaming = anime.data.streaming
        const extlinks = anime.data.external

        return (
            <>
                <div className="w-full p-4 bg-indigo-200 font-bold text-xl text-a-primary">
                    <h2>{anime.data.title}</h2>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 p-4">
                    <div className="w-full flex flex-col justify-start items-center">
                        <div className="flex justify-center items-center">
                            <Image
                                src={anime.data.images.webp.image_url}
                                alt={`${anime.data.title} poster`}
                                width={250} height={250}
                                className="w-auto max-w-xs object-cover p-2"
                            />
                        </div>

                        <div className="pb-4 w-full">
                            <div className="border-b-2 text-a-primary">
                                <Lbl txt={'Information'} />
                            </div>
                            <div>
                                <Lbl txt={'Type : '} />
                                <Info txt={anime.data.type} />
                            </div>
                            <div>
                                <Lbl txt={'Episodes : '} />
                                <Info txt={anime.data.episodes} />
                            </div>
                            <div>
                                <Lbl txt={'Status : '} />
                                <Info txt={anime.data.status} />
                            </div>
                            <div>
                                <Lbl txt={'Aired : '} />
                                <Info txt={aired} />
                            </div>
                            <div>
                                <Lbl txt={'Producer : '} />
                                <Info txt={producers} />
                            </div>
                            <div>
                                <Lbl txt={'Licensors : '} />
                                <Info txt={licensors} />
                            </div>
                            <div>
                                <Lbl txt={'Studios : '} />
                                <Info txt={studios} />
                            </div>
                            <div>
                                <Lbl txt={'Source : '} />
                                <Info txt={anime.data.source} />
                            </div>
                            <div>
                                <Lbl txt={'Genres : '} />
                                <Info txt={genres} />
                            </div>
                            <div>
                                <Lbl txt={'Duration : '} />
                                <Info txt={anime.data.duration} />
                            </div>
                            <div>
                                <Lbl txt={'Rating : '} />
                                <Info txt={anime.data.rating} />
                            </div>
                        </div>


                        <div className="pb-4 w-full">
                            <div className="border-b-2 text-a-primary">
                                <Lbl txt={'Statistics : '} />
                            </div>
                            <div>
                                <Lbl txt={'Score : '} /><Info txt={anime.data.score} />
                            </div>
                            <div>
                                <Lbl txt={'Ranked : '} /><Info txt={anime.data.rank} />
                            </div>
                            <div>
                                <Lbl txt={'Popularity : '} /><Info txt={anime.data.popularity} />
                            </div>
                            <div>
                                <Lbl txt={'Members : '} /><Info txt={anime.data.members} />
                            </div>
                            <div>
                                <Lbl txt={'Favorites : '} /><Info txt={anime.data.favorites} />
                            </div>
                        </div>

                    </div>

                    <div className="p-4 col-span-2 ">

                        {trailer ?
                            <div className="pb-4 ">
                                <div className="border-2 border-b-0 w-fit text-a-primary p-2">
                                    <h3>Trailer</h3>
                                </div>
                                <div className="p-2 border-2 text-a-primary flex justify-center">
                                    <VideoPlayer link={trailer} />
                                </div>
                            </div>
                            :
                            <div className="pb-4 flex flex-col items-center justify-center">
                                <p>--[ Vidio trailer tidak tersedia ]--</p>
                            </div>
                        }

                        <div className="pb-4">
                            <div className="border-2 border-b-0 w-fit text-a-primary p-2">
                                <h3>Synopsis</h3>
                            </div>
                            <div className="p-2 border-2 text-a-primary text-sm">
                                <p>{anime.data.synopsis}</p>
                            </div>
                        </div>

                        {streaming ?
                            <div className="pb-4">

                                <div className="border-2 border-b-0 w-fit text-a-primary p-2">
                                    <h3>Watch Online</h3>
                                </div>

                                <div className="p-2 border-2 text-a-primary text-sm flex flex-row flex-wrap gap-2 justify-evenly">
                                    {streaming.map((link, i) => {
                                        return (
                                            <Link href={link.url} className="w-fit border-2 p-2 hover:bg-a-accent hover:text-a-dark transition-all" key={i}>{link.name}</Link>
                                        )
                                    })}
                                </div>
                            </div>
                            :
                            null
                        }

                        {extlinks ?
                            <div className="pb-4">

                                <div className="border-2 border-b-0 w-fit text-a-primary p-2">
                                    <h3>External Links</h3>
                                </div>

                                <div className="p-2 border-2 text-a-primary text-sm flex flex-row flex-wrap gap-2 justify-evenly">
                                    {extlinks.map((link, i) => {
                                        return (
                                            <Link href={link.url} className="w-fit p-2 text-a-accent hover:underline transition-all" key={i}>{link.name}</Link>
                                        )
                                    })}
                                </div>
                            </div>
                            :
                            null
                        }

                    </div>


                </div>
            </>
        )
    }

}

export default Page