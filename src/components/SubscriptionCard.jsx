function SubscriptionCard({h, price, p}) {
    return ( 
        <div className="card">
            <div className="card-cover">
                <h3>{h}</h3>
                <p>{price}</p>
            </div>
            <div className="card-back">
                <p>{p}</p>
            </div>
        </div>
     );
}

export default SubscriptionCard;