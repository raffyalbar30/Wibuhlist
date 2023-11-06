import Footer from "./components/footer/footer";
import Navigation from "./components/navbar/navigation";
import Listrekomenime from "./pages/ListRekomenime";
import Listtopanime from "./pages/Listtopanime";



function App() {
  
  return (
  
    <>
       <Navigation></Navigation>
       <Listtopanime></Listtopanime>
       <Listrekomenime></Listrekomenime>
       <br />
       <br />
       <br />
      <Footer></Footer>
    </>
      
  );
}


export default App
