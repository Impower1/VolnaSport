function CoachesCard({img, name, direction}) {
    return ( 
        <div className="coaches-card">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{direction}</p>
        </div>
     );
}

export default CoachesCard;