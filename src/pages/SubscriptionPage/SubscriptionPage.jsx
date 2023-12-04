import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Quiz from "../../components/Quiz";
import Section from "../../components/Section";
import SubscriptionCard from "../../components/SubscriptionCard";
import TopButton from "../../components/TopButton";
import { sectionsData, subscriptionScrdsData } from "../../data";
import './SubscriptionPage.scss'

function SubscriptionPage() {
    return (
        <>
            <Header/>
                <div className="wrapper sections">
                    {sectionsData.map(obj=><Section img={obj.img} h={obj.h} p={obj.p} reverse={obj.reverse}/>)}
                </div>
                <div className="wrapper s2-wrapper">
                    <div className="s2">
                        <h2>Абонементы Волны</h2>
                        <div className="s2-cards">
                            {subscriptionScrdsData.map(obj=><SubscriptionCard h={obj.h} price={obj.price} p={obj.p}/>)}
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="s3">
                        <h2>
                            Калькулятор абонемента
                        </h2>
                        <p>
                            Ответь на 5 вопросови получи свою цену
                        </p>
                        <Quiz/>
                    </div>
                </div>
            <Footer/>
            {/* <TopButton/> */}
        </>
    );
}

export default SubscriptionPage;