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
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/amanda-cristina-blankenburg-81b410213/"
              target="_blank"
              rel="noreferrer"
            >
              Amanda Cristina Blankenburg
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
