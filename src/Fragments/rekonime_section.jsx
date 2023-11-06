import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Rekomen from "../components/animelist/Rekomendasianime";

const Rekonimesection = (props) =>{
    const {children} = props
    useEffect(()=>{
        AOS.init();
         }, [])
    return(
        <div className="mt-6 ml-4">
        <h1 data-aos="fade-right"  data-aos-duration="2000"  className="text-2xl font-semibold">{children}</h1>
        <Rekomen></Rekomen>
        </div>
    );
}
export default Rekonimesection;