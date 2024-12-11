import "./Card.css";

function Card({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
