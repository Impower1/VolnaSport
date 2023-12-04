function SliderSlide({n, h1, h2, p, p2}) {
    return ( 
        <div className={"slide n"+n}>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <p>{p}<br/><br/>{p2}</p>
        </div>
     );
}

export default SliderSlide;