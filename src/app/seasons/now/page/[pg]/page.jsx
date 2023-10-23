import AnimeList from "@/components/AnimeList"
import PageHeader from "@/components/Utilities/PageHeader"
import Pagination from "@/components/Utilities/Pagination"

const Page = async ({params}) => {

  // console.log(params)
  const {pg} = params

  const apiurl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?page=${pg}`
  const response = await fetch(apiurl, {next: { revalidate: 86400 }})
  const nowanime = await response.json()

  const prev = (parseInt(pg) - 1).toString()
  const next = (parseInt(pg) + 1).toString()
  const prevurl = '/seasons/now/page/' + prev
  const nexturl = '/seasons/now/page/' + next
  const lastpage = nowanime.pagination.last_visible_page

  // console.log(nowanime.pagination)
  // console.log(lastpage)

  return (
    <>
      <section>
        <PageHeader title={`This Season Anime Shows | Page #${pg}`} />
        <AnimeList api={nowanime} />
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