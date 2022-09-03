import Footer from "../components/Footer";
import Header from "../components/Header";
import { urls } from "../utils/constants";

export default function Complex(props) {
    const { data } = props;
    return (
        <>
            <Header data={data} />
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    let data = null;
    try {
        const res = await fetch(urls.complex)
        data = await res.json()
    } catch (error) {
        console.log('Menu fetching error');
        console.log(error);
    }
    return { props: { data } }
}