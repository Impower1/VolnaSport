import { useState } from "react";
import Slide from "./Slide";

function Quiz() {
    const [quize, setQuize] = useState(0)
    return ( 
        <div className="quiz">
                {quize===0&&<Slide
                    h={'Сколько раз в неделю планируете посещать фитнесс-клуб?'}
                    r1={'1 раз'}
                    r2={'2 раза'}
                    r3={'3 раза'}
                    r4={'более'}
                    n={'1'}
                />}
                {quize===1&&<Slide
                    h={'В какое время планируете посещать фитнесс-клуб?'}
                    r1={'до 12:00'}
                    r2={'после 12:00'}
                    r3={'другое'}
                    n={'2'}
                />}
                {quize===2&&<Slide
                    h={'В какие дни планируете посещать фитнесс-клуб?'}
                    r1={'будни'}
                    r2={'выходные'}
                    r3={'в любой день'}
                    n={'3'}
                />}
                {quize===3&&<Slide
                    h={'Планируете посещать групповые тренировки?'}
                    r1={'да'}
                    r2={'нет'}
                    r3={'не знаю'}
                    n={'4'}
                />}
                {quize===4&&<Slide
                    h={'Нужна ли вам заморозка абонимента?'}
                    r1={'да'}
                    r2={'нет'}
                    r3={'не знаю'}
                    n={'5'}
                />}
                {quize===5&&
                <form>
                    <input type="tel" placeholder="Введите ваш номер"/>
                    <button className="send" onClick={
                        (e)=>{
                            e.preventDefault()
                            setQuize(prev=>prev+=1)
                        }
                    }>Отправить</button>
                </form>
                }
                {quize===6&&
                    <h2>Спасибо за ваш ответ!</h2>}
                {quize<5&&<div className="progress">
                    <div className="one"></div>
                    <div className={quize>0&&'two'}></div>
                    <div className={quize>1&&'three'}></div>
                    <div className={quize>2&&'four'}></div>
                    <div className={quize>3&&'five'}></div>
                </div>}
                {
                    quize<5&&
                    <button className={`btn-${quize}`} onClick={()=>setQuize((prev)=>prev+1)}>Далее</button>
                }
        </div>
     );
}

export default Quiz;