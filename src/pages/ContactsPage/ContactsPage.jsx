import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './ContactsPage.scss'
import { useState } from "react";
import Modal from "../../components/Modal";

function ContactsPage() {
    const [modal, setModal] = useState(false)
    return ( 
        <>
            <Header/>
                <div className="wrapper wrapper-s1">
                    <div className="s1-contacts">
                        <h1>Контакты</h1>
                        <p>Телефон: <a href="tel:+78123375538">(812) 337-55-38</a><br/>Отдел по работе с юр. лицами и образовательными учреждениями: <a href="tel:+78123691283">(812) 369-12-83</a></p>
                        <p>Адрес: 196084, Санкт-Петербург, Московский проспект, д. 150 к. 2<br/>E-mail: <a href="mailo:basseyn.volna@mail.ru">basseyn.volna@mail.ru</a></p>
                        <p>Режим работы:<br/>понедельник - пятница: c 6:45 до 23:00; суббота: с 06:45 до 22:00; воскресенье: c 8:00 до 22:00</p>
                        <div className="map">
                            <YMaps>
                                <Map
                                    defaultState={{ center: [59.885033, 30.321761], zoom: 13 }}
                                    width="100%"
                                    height="100%"
                                >
                                <Placemark geometry={[59.885033, 30.321761]} />
                                </Map>
                            </YMaps>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="s2 contactas">
                        <p>С другой стороны постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют от нас анализа соответствующий условий активизации. Равным образом реализация намеченных плановых заданий способствует подготовки и реализации форм развития.</p>
                        <h1>Фитнес клуб в Московском районе</h1>
                        <p>Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки соответствующий условий активизации. Товарищи! рамки и место обучения кадров позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Таким образом рамки и место обучения кадров играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом новая модель организационной деятельности позволяет оценить значение существенных финансовых и административных условий. Не следует, однако забывать, что рамки и место обучения кадров представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач.</p>
                        <form action="">
                            <p>Обратная связь</p>
                            <div className="form-middle">
                                <div className="form-left">
                                    <p>Имя:</p>
                                    <p>Email:</p>
                                    <p>Телефон:</p>
                                    <p>Сообщение:</p>
                                </div>
                                <div className="form-right">
                                    <input type="name" />
                                    <input type="email" />
                                    <input type="phone" />
                                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <div className="checkbox"><input type="checkbox" name="agree" id="agree" /><label htmlFor="agree">Я согласен с <a href="">пользовательским соглашением</a></label></div>
                            <button onClick={(e)=>{
                                        window.scrollTo({
                                            top: 0,
                                          });
                                e.preventDefault()
                                setModal(true)
                                }}>Отправить</button>
                        </form>
                    </div>
                </div>
            <Footer/>
            {modal&&<Modal setModal={setModal}/>}
        </>
     );
}

export default ContactsPage;