import AnimeList from "@/components/AnimeList"
import PageHeader from "@/components/Utilities/PageHeader"
import Pagination from "@/components/Utilities/Pagination"

const Page = async ({params}) => {

  // console.log(params)
  const {pg} = params

  const apiurl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${pg}`
  const response = await fetch(apiurl, {next: { revalidate: 86400 }})
  const popularanime = await response.json()

  const prev = (parseInt(pg) - 1).toString()
  const next = (parseInt(pg) + 1).toString()
  const prevurl = '/popular/page/' + prev
  const nexturl = '/popular/page/' + next
  const lastpage = popularanime.pagination.last_visible_page

  // console.log(popularanime.pagination)
  // console.log(lastpage)

  return (
    <>
      <section>
        <PageHeader title={`Popular Anime Page #${pg}`} />
        <AnimeList api={popularanime} />
        <Pagination 
          page={pg} 
          lastPage={lastpage}
          prevpage={prevurl}
          nextpage={nexturl}
          />
      </section>
    </>
  )
}

export default Page