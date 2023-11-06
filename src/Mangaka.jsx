import Footer from "./components/footer/footer";
import Navigation from "./components/navbar/navigation"
import Listrekomangaka from "./pages/ListRekomangaka";
import Listopmanga from "./pages/Listtopmanga"

const Mangakapage = () => {
    return (
        <>
        <Navigation/>
        <Listopmanga/>
        <Listrekomangaka/>
        <br />
        <br />
        <br />
        <Footer/>
        </>
    );
}

export default Mangakapage