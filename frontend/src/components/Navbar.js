import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import css file from style sheets directory
 import styles from "../style_sheets/Navbar.module.css";
 import{ BiMenu} from "react-icons/bi"


 
 
 import{ BsFillGridFill} from "react-icons/bs"
 import{FaHotel} from "react-icons/fa"
 
 import{RiAdminFill} from "react-icons/ri"
 
 import{MdFamilyRestroom} from "react-icons/md"
 
 import{GiCarKey} from "react-icons/gi"
 import{FaBuilding} from "react-icons/fa"
 import{GrUpdate} from "react-icons/gr"
 import{ImPrinter} from "react-icons/im"
 import{FaExternalLinkAlt} from "react-icons/fa"
 import photo from "../img/travel.svg"


const navbar = () => {
  return (
   
    <div className={styles.body}>
    <header className={styles.header1}>
        <div id="title" className={styles.title1}>
            <h1 className={styles.ha}>Tour & Travel </h1>
           
        </div>

    
    </header>

    <main className={styles.main2}>
        <aside>
            <h2><span className={styles.span1}>Fuel Mind Travel</span></h2>
            
            <p className={styles.p1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

            </p>
            <form className={styles.form1}>
               {/* <input type="submit" href={"/add"}/> */}
               <a className={styles.inputBtn} href={"/add/hotel"}>
                              <i className={styles.inputBtn}></i>&nbsp;Manager Panel </a>
                
            </form>
            </aside>
            <article>
            <img src={photo} className={styles.travel}></img>
        </article>
            </main>
        
 </div>

  );
};
export default navbar