import { FaEnvelope,FaInstagram,FaGithub,FaLinkedin} from "react-icons/fa";
const Footer = (props) => {
   const {classname="font-bold text-xl"} = props
      return (
        <div className="mt-2 w-full pt-10 border-t border-blue-600">
            <div className="flex justify-center items-center gap-x-6 text-center mb-8">
                 <p className={classname}>Home</p>
                 <p className={classname}>Top Anime</p>
                 <p className={classname}>Top Mangaka</p>
            </div>
            <div className="flex gap-x-4 justify-center items-center text-4xl mb-4">
            <FaEnvelope/>
            <FaInstagram/>
            <FaGithub/>
            <FaLinkedin/>
            </div>
            <div className="flex justify-center items-center">
              <p>Build with <a href="https://react.dev/" className="text-blue-600 underline">React.js</a>, <a href="https://tailwindcss.com/" className="text-blue-600 underline">Tailwindcss</a> and ♥</p>
            </div>
            <div className="flex justify-center items-center">
            <p>© 2023 RaffyAlbar | Front-End Developer</p>
            </div>
        </div>
      );
}
// pr 
//membuat random math di rekomendasi anime 

export default Footer;