import { aboutSellPoints } from "../constants";
const About = () => {
  return (
    <section className="about | section-max-w section-margin">
      <div className="about-container-left">
        <h2 className="title">What's different about Manage?</h2>
        <p className="intro">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="about-container-right">
        <ul className="numbered-list-container">
          {aboutSellPoints.map((item) => (
            <li key={item.id}>
              <div className="numbered-list | relative">
                <div>
                  <p className="numbered-list-id">{item.id}</p>
                </div>
                <div>
                  <h3 className="numbered-list-title">{item.title}</h3>
                  <p className="numbered-list-content">{item.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
