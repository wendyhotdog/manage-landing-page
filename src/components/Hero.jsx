import heroImg from "../assets/static/images/illustration-intro.svg";
const Hero = () => {
  return (
    <section className="hero | section-max-w section-margin">
      <div className="container-left">
        <h1 className="title">
          Bring everyone <br /> together to build <br /> better products.
        </h1>
        <p className="intro">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <a href="#get_started" className=" hero-cta cta">
          Get Started
        </a>
      </div>
      <div className="container-right">
        <img src={heroImg} alt="Illustration of three graphs." />
      </div>
    </section>
  );
};

export default Hero;
