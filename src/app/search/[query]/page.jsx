import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/ListHeader"

const Page = async ({params}) => {
  const {query} = params
  // const textquery = query.replaceAll('%20',' ')
  const decodedQuery = decodeURI(query)

  const apiurl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedQuery}`
  
  // console.log(apiurl)
  const response = await fetch(apiurl, {next: { revalidate: 10 }})
  const searchanime = await response.json()

  return (
    <>
      <section>
        <Header title={`Search result for ${decodedQuery}`} />
        <AnimeList api={searchanime} />
      </section>
    </>
  )
}

export default Page