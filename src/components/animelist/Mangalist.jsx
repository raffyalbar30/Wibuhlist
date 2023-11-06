import { useEffect,useState } from "react";
import axios from "axios";

export const Getmangaka = () => {
    const [manga,setmanga] = useState([]);
    const [loading,setloading] = useState(true)

    const dataall = async () => {
         try {
            const data = await axios.get(`https://api.jikan.moe/v4/top/manga?limit=10`);
            setmanga(data.data.data);
         } catch (error) {
            console.log(error)
         }
    }
    useEffect(() => {
        setTimeout(()=>{
            dataall()
            setloading(false)
        }, 1500)
    },[]);
    const Loader =() => {
        return(
          <>
           
          <div
          className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >loading</span
          >
        </div>
          </>
      
        );
      }
    return (
      <>
      
      <div className="mt-4 grid md:grid-cols-5 grid-cols-2 gap-2">
        {manga.map(all => ( 
          <div className="bg-white max-w-full shadow-md">
          <div className='pt-4' key={all.mal_id}>
          <img src={all.images.jpg.image_url} alt='' className="mx-auto cursor-pointer hover:scale-75 ease-in duration-500"/>
          <h1 className="text-center text-base font-semibold">{all.title}</h1>
          </div>
          </div>
           ))}
          {loading ? <Loader/> : null}
        </div>
      
      </>
    );
};
export default Getmangaka;