import { Nav, Hero, About } from "./components";

const App = () => {
  return (
    <article>
      <div className="nav-hero-container">
        <Nav />
        <Hero />
      </div>
      <About />
    </article>
  );
};

export default App;
