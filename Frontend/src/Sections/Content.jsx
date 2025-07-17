import { useNavigate } from 'react-router-dom';
import '../Styles/Content.css';
import port1 from '../assets/port1.png';
import port2 from '../assets/port2.png';

export default function Content() {
    const navigate = useNavigate();

  return (
    <section className="content">
      <div className="content-text">
        <h1>Portyours</h1>
        <p>
          Tired of digging through broken GitHub repos or confusing code just to make a portfolio?
          <br />
          With no coding skills required, Portyours makes it simple, fast, and clean.
          <br />
          Others are already building theirs — why wait?
        </p>
        <div className="buttons">
          <button className="btn" onClick={() => navigate("/CreatePortfolio")}>Create Yours</button>
          <button className="btn secondary">See Examples</button>
        </div>
      </div>
      <div className="portfolio-image">
        <img src={port1} alt="Portfolio Preview" />
        <img src={port2} alt="Portfolio Preview" />
      </div>
    </section>
  );
}
