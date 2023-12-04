import CoachesCard from '../../components/CoachesCard';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { coachList } from '../../data';
import './CoachesPage.scss'

function CoachesPage() {
    return ( <>
    <Header/>
    <div className="wrapper">
        <div className="s1 coach-s1">
            <p>Самое главное, у людей, работающих в Волне - требования, которые они предъявляют своей профессии. Эти требования полностью совпадают с теми внутренними требованиями, которые каждый человек предъявляет самому себе. Тогда каждое достижение клиента, каждый шаг к желаемому результату, приносит удовольствие и радость не только клиенту, но и тренеру. Волна не работает со случайными людьми, наши тренеры - это и наше лицо и наша гордость.</p>
            <div className="coaches-cards">
                {coachList.map(obj=><CoachesCard img={obj.img} name={obj.name} direction={obj.direction}/>)}
            </div>
        </div>
    </div>
    <Footer/>
    </> );
}

export default CoachesPage;