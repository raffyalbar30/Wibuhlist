import CardDetail from "../components/animelist/Animelist";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Sectionlisted = (props) =>{
    const {children} = props
    useEffect(()=>{
        AOS.init();
    }, [])
    return(
        <div className="mt-6 ml-4">
        <h1 data-aos="fade-right"  data-aos-duration="1300" className="text-2xl font-semibold">{children}</h1>
        <CardDetail></CardDetail>
        </div>
    );
}

export default Sectionlisted