import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <main>
      <div className="hero">
        <div className="info">
          <h1>
            Reliable, efficient delivery
            <br />
            <strong>Powered by Technology</strong>
          </h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="flex">
          <Card
            category={{
              title: "Supervisor",
              description: "Monitors activity to identify project roadblocks",
              iconPath: "icon-supervisor.svg",
              iconDescription: "Magnifying Lense with Eyeball",
            }}
            borderColor="cyan"
          />
          <div className="col">
            <Card
              category={{
                title: "Team Builder",
                description:
                  "Scans our talent network to create the optimal team for your project",
                iconPath: "icon-team-builder.svg",
                iconDescription: "Homepage with home in front",
              }}
              borderColor="red"
            />
            <Card
              category={{
                title: "Karma",
                description: "Regularly evaluates our talent to ensure quality",
                iconPath: "icon-karma.svg",
                iconDescription: "Lightbulb turned on",
              }}
              borderColor="orange"
            />
          </div>
          <Card
            category={{
              title: "Calculator",
              description:
                "Uses data from past projects to provide better delivery estimates",
              iconPath: "icon-calculator.svg",
              iconDescription: "Computer monitor",
            }}
            borderColor="blue"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
