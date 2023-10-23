import AnimeList from "../components/AnimeList"
import Header from "@/components/AnimeList/ListHeader"

const Home = async () => {

  const restopanime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topanime = await restopanime.json()
  const resnowanime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=8`)
  const nowanime = await resnowanime.json()

  //   if error disable ipv6 with '''sudo sysctl net.ipv6.conf.all.disable_ipv6=1''' in terminal

  return (
    <>
      <section>
        <Header title={'Popular Anime'} linkHref={'/popular/page/1'} linkTitle={'see all'} />
        <AnimeList api={topanime} />
      </section>

      <section>
        <Header title={'Ongoing Anime'} linkHref={'/seasons/now/page/1'} linkTitle={'see all'} />
        <AnimeList api={nowanime} />
      </section>
    </>
  )
}

export default Home