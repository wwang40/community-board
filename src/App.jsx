import "./App.css";
import { events } from "./assets/events";
import { EventCard } from "./EventBox";

export default function App() {
  return (
    <div className="app-container">
      <h1>Community Events Board</h1>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}
