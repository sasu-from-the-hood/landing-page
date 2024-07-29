import React from "react";

const happyClients = [
  {
    clientTestimony:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    clientName: "- Natalia Lowe",
  },
  {
    clientTestimony:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    clientName: "- Natalia Lowe",
  },
  {
    clientTestimony:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    clientName: "- Natalia Lowe",
  },
];

const HappyClients = () => {
  return (
    <section id="happy-client" className="section">
      <div className="testimony-container">
        <h1 className="title">Happy Clients</h1>
        <div className="testimony-grid ">
          {happyClients.map((client, index) => (
            <ClientTestimonyCard
              key={index}
              testimony={client.clientTestimony}
              name={client.clientName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
function ClientTestimonyCard({ testimony, name }) {
  return (
    <section>
      <div className="clients">
        <div className="client-header">
          <strong className="quote-symbol">‘’</strong>
          <hr className="divider" />
        </div>
        <p className="client-text">{testimony}</p>
        <span className="client-name">{name}</span>
      </div>
    </section>
  );
}
export default HappyClients;
