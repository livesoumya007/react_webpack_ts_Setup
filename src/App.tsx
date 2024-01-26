import "./App.css";
import image from "./galaxy.png";

export default function App() {
  return (
    <>
      <h1>
        {" "}
        We can get env variables: {process.env.NODE_ENV} {process.env.name}{" "}
      </h1>
      <div>App</div>
      <img src={image} height={"500px"} width={"500px"} alt="universe" />
    </>
  );
}
