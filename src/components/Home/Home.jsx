import "./Home.css";
import jeff from "../../assets/jeff.jpg";

function Home() {
  return (
    <div className="home" id="home">
      <img src={jeff} alt="" />
      <div className="home__container">
        <h1>Hi, I'm Sammy</h1>
        <p>Your one-stop shop for all your grooming needs!</p>
      </div>
    </div>
  );
}

export default Home;
