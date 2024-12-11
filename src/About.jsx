import "./About.css";
import SubscriptionForm from "./SubscriptionForm";
function About() {
  return (
    <div className="about">
      <img
        src="src/assets/google-deepmind-GVGnKgEomlw-unsplash.jpg"
        alt="google deep ming black and white photo"
        className="google-ai-image"
      />
      <div className="about-content">
        <p className="about-content-text">
          <b>The Shape of AI </b>is committed to demystifying the technology and
          implications of artificial intelligence, aiming to guide us towards a
          future where technology augments our lives rather than causing
          detriment.
        </p>
        <p className="about-content-text">
          Artificial Intelligence will fundamentally upend how we work, connect,
          learn, and live. We are only just starting to see how these changes
          will manifest in our digital products, across services and
          experiences, and within our organizations and institutions.
        </p>
        <p className="about-content-text">
          <b>Design is more important now than ever. </b>
        </p>
        <p className="about-content-text">
          As computation develops more rapidly than human adaptation, it's
          impractical to reinvent the wheel for every new product or experience
          in an attempt to balance human motives and algorithmic responses.
          Instead, relying on established frameworks of human interaction and
          cognitive science is crucial for creating a world that prioritizes the
          needs of individuals, communities, and interconnected ecosystems.
        </p>
        <p className="about-content-text">
          With an understanding of human behavior and its adaptation to a
          computational environment, designers are able to create experiences
          that integrate effortlessly with user expectations, rendering advanced
          technology intuitive and accessible.
        </p>
      </div>
      <SubscriptionForm></SubscriptionForm>
    </div>
  );
}

export default About;
