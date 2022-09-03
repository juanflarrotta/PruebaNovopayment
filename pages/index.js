import Footer from "../components/Footer";
import Header from "../components/Header";
import { urls } from "../utils/constants";

export default function Home(props) {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(urls.apiMenu)
  const data = await res.json()

  return { props: { data } }
}