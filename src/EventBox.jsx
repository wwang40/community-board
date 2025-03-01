import "./App.css";
export function EventCard({ title, date, description, link }) {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p>{description}</p>
      <a href={link} className="learn-more">
        Learn More
      </a>
    </div>
  );
}
