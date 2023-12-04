function Cards({data}) {
    return ( 
        <div className="cards-block">
            {data.map(obj=><div className={"card n"+obj.n}>
                <h3>{obj.h}</h3>
                <p>{obj.p}</p>
                </div>)}
        </div>
     );
}

export default Cards;