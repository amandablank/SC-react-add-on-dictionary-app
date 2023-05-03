import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <section>
            <h1>English Dictionary</h1>
          </section>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Amanda Cristina Blankenburg</small>
        </footer>
      </div>
    </div>
  );
}
