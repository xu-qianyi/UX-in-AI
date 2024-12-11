import Accordion from "./Accordion";
import "./MainArea.css";
import Card from "./Card";

function MainArea({ navigateToPage }) {
  const aiUXDesignPrinciples = [
    {
      title: "Transparency and Explainability",
      content:
        "AI systems should provide clear explanations of their decision-making processes. Users need to understand how and why an AI arrived at a particular recommendation or conclusion. This builds trust and helps users make informed decisions about whether to follow the AI's guidance.",
    },
    {
      title: "Human-Centered Design",
      content:
        "Design AI interfaces that augment human capabilities rather than replace them. Focus on creating collaborative experiences where AI serves as a supportive tool. Ensure that users maintain control and can easily override or modify AI suggestions. The goal is to empower users, not make them feel subordinate to the technology.",
    },
    {
      title: "Ethical Consideration and Bias Mitigation",
      content:
        "Proactively identify and minimize potential biases in AI systems. Design interfaces that are inclusive and representative of diverse user groups. Implement mechanisms for users to provide feedback on potentially biased recommendations. Regularly audit and update AI models to ensure fairness and reduce discriminatory outcomes.",
    },
    {
      title: "Contextual Awareness and Adaptability",
      content:
        "Create AI interfaces that understand and adapt to user context. This means developing systems that can recognize user preferences, skill levels, and changing needs. Implement adaptive interfaces that provide personalized experiences while maintaining flexibility for user customization and manual intervention.",
    },
    {
      title: "Cognitive Load Management",
      content:
        "Design AI interfaces that simplify complex tasks without overwhelming users. Use progressive disclosure, clear visual hierarchies, and intuitive interactions. Provide AI-powered suggestions that reduce cognitive burden, but always allow users to dive deeper into details if they choose. The key is to make complex information digestible and actionable.",
    },
    {
      title: "Predictive and Proactive Assistance",
      content:
        "Develop AI systems that anticipate user needs before they arise. This involves using predictive algorithms to offer timely, relevant suggestions. However, balance proactivity with user autonomy – suggestions should feel helpful, not intrusive. Implement clear opt-out mechanisms and allow users to customize the level of proactive assistance.",
    },
  ];
  return (
    <main className="main-area">
      <div className="main-introduction">
        <h1 className="main-title">
          Exploring how UX will evolve with the growth of Artificial
          Intelligence.
        </h1>
        <p className="main-description">
          The rise of AI has caused a paradigm shift in how people interact with
          technology. Our interfaces may evolve, but the foundations of great
          design are more relevant than ever.
        </p>
      </div>
      <div className="main-content">
        <div className="pattern-sections">
          <div className="pattern-section__panel">
            <img
              src="src/assets/wayfinder-icon.png"
              alt="way finder icon"
              className="icons"
            />
            <div className="pattern-section-content">
              <h3>Way finders</h3>
              <p>
                Give us cludes about how to interact with the model,
                particularly when getting started
              </p>
            </div>
          </div>
          <div className="pattern-section__cards">
            <Card
              className="card"
              imgSrc="src/assets/follow-up.png"
              imgAlt="follow up UI mockup"
              title="Follow up"
              description="Get more information from the user
              when the initial prompt isn't sufficiently clear"
            />
            <Card
              imgSrc="src/assets/nudges.png"
              imgAlt="nudges UI mockup"
              title="Nudges"
              description="Alert users to actions they can take to use AI, especially if they are just getting strated"
            />
            <Card
              imgSrc="src/assets/suggestions.png"
              imgAlt="follow up UI mockup"
              title="Suggestions"
              description="Solves the blank canvas dilemma with clues for how to prompt the AI in a more pokilled way"
            />
            <Card
              imgSrc="src/assets/templates.png"
              imgAlt="templates UI mockup"
              title="Templates"
              description="Structured templates that can be filled by the user or pre-filled by the AI"
            />
          </div>
        </div>
        <div className="pattern-sections">
          <div className="pattern-section__panel">
            <img
              src="src/assets/input-icon.png"
              alt="input icon"
              className="icons"
            />
            <div className="pattern-section-content">
              <h3>Inputs</h3>
              <p>
                Submit user's prompt to the AI within its surrounding context
              </p>
            </div>
          </div>
          <div className="pattern-section__cards">
            <Card
              className="card"
              imgSrc="src/assets/auto-fill.png"
              imgAlt="auto fill UI mockup"
              title="Auto Fill"
              description="Make it easy for users to extend a prompt to multiple inputs at once"
            />
            <Card
              imgSrc="src/assets/inline-action.png"
              imgAlt="In-line UI mockup"
              title="Inline action"
              description="Ask ot interact with AI based on sth at the point of need"
            />
            <Card
              imgSrc="src/assets/madlibs.png"
              imgAlt="Madlibs UI mockup"
              title="Madlibs"
              description="Repeatedly run generative tasks without compromising on the format"
            />
          </div>
        </div>
        <div className="design-sections">
          <div className="pattern-section__panel">
            <img src="src/assets/ai-icon.png" alt="AI icon" className="icons" />
            <div className="pattern-section-content">
              <h3>Design Principles in AI</h3>
              <p>
                The principles that guide the design of AI-powered interfaces
              </p>
            </div>
          </div>
          <div className="ai-ux-design-principles">
            <section className="principles-section">
              <Accordion items={aiUXDesignPrinciples} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainArea;
