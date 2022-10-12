function Card(props) {
    return (
        <div>
      <div className="card">
        <section className="image--section">
        <img src={`${props.item.imageUrl}`} className="card--image" alt="the location."/>
        </section>
        <section className="content--section">
            <div className="card--location">
                <img src="./images/map-icon.png" className="map--icon" alt="A map icon."/>
                <p className="card--country">{props.item.location}</p>
                <a className="map--link" href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
            </div>
    
            <h1 className="card--title">{props.item.title}</h1>
            <p className="card--duration">{props.item.startDate} - {props.item.endDate}</p>
            <p className="card--description">{props.item.description}</p>
        </section>
        
      </div>
      <hr />
      </div>
      
    );
  }
  
  export default Card;