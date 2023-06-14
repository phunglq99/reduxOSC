
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1 className="text-bg-info p-4 text-light">Personal Digital Assistants</h1>

      <section className="section">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Alexa was created by Amazon and helps you buy things." />
            </div>
            <div className="col">
              <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} description="Cortana was made by Microsoft. Who knows what it does?" />
            </div>
            <div className="col">
              <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="Siri was made by Apple and is being phased out" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
