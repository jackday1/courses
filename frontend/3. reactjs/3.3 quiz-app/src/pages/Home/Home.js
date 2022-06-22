import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../contexts/app.context";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useContext(AppContext);

  return (
    <div className="home-container">
      <h3 className="home-title">Quiz app</h3>
      <input
        className="home-input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="home-btn" onClick={() => navigate(`/questions/0`)}>
        Do quiz!
      </button>
    </div>
  );
};

export default Home;
