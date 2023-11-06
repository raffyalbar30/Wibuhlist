import React from 'react';
import Typed from 'typed.js';
import { Link, useLocation } from "react-router-dom";

const Navigation = (props) => {
    const {active ="bg-slate-50 lg:px-4 lg:py-2 px-2 py-2 rounded-md text-gray-950 font-semibold", noactive="text-white font-semibold", classnamenav="text-white lg:text-xl text-sm font-semibold ml-2"} = props
    let location = useLocation();
    const el = React.useRef(null);
    
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`Animelist Raffy Samaa`],
      typeSpeed: 120,
      loop: true,
      showCursor: false

    });
    return () => {
        typed.destroy(el);
      };
    }, []);
  

    return (
        <div className="flex justify-between items-center bg-indigo-600 w-full py-4">
            <div className='items-center flex'>
              <h1 className={classnamenav} ref={el}/>
            </div>
             {/* <h1 className="text-white lg:text-xl text-sm font-semibold ml-2">AnimeList Raffy sama</h1> */}
             <ul className="flex items-center gap-x-4 cursor-pointer lg:mr-4 mr-2">
                <li><Link to={'/'} className={location.pathname === '/' ? `${active}` : `${noactive}`}>Top Anime</Link></li>
                <li><Link to={'/Mangaka'} className={location.pathname === '/Mangaka' ? `${active}` : `${noactive}`}>Top Mangaka</Link></li>
             </ul> 
        </div>
    );
}
export default Navigation