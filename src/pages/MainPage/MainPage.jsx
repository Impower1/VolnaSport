import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Infografic from "../../components/Infografic";
import SimpleSlider from "../../components/SimpleSlider";
import { useInView } from 'react-intersection-observer';
import { cardsData } from "../../data";
import s1Img from '../../static/assets/s1Img.png';
import './MainPage.scss'

function MainPage() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Будет вызываться только при первом появлении на экране
      });
    return ( 
        <>
            <Header/>
                <div className="wrapper main-s1-wrapper">
                    <div className="s1">
                        <div className="s1-left">
                            <img src={s1Img} alt="s1Img" />
                        </div>
                        <div className="s1-right">
                            <h1>Дворец спорта Волна - это</h1>
                            <Infografic/>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="s2">
                        <h2 className={inView&&"text-animation"} ref={ref}>Фитнес на современных условиях</h2>
                        <h2 className={inView&&"text-animation"} ref={ref}>Наши условия</h2>
                        <Cards data={cardsData}/>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="slider">
                        <SimpleSlider/>
                    </div>
                </div>
            <Footer/>
            {/* <TopButton/> */}
        </>
     );
}

export default MainPage;