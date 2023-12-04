function Slide({h, r1, r2, r3, r4, n}) {
    return ( 
        <div className="slide">
            <h3>{h}</h3>
            <div className="radios">
                <div>
                    <input type="radio" id="r1" name={'rad'} checked />
                    <label for="r1">{r1}</label>
                </div>
                <div>
                    <input type="radio" id="r2" name={'rad'} checked />
                    <label for="r2">{r2}</label>
                </div>
                <div>
                    <input type="radio" id="r3" name={'rad'} checked />
                    <label for="r3">{r3}</label>
                </div>
                {r4&&
                    <div>
                        <input type="radio" id="r5" name={'rad'} checked />
                        <label for="r5">{r4}</label>
                    </div>
                }
            </div>
            <div className={"number" + " n" + n}>
                {n}
            </div>
        </div>
     );
}

export default Slide;