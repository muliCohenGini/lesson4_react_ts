import { useState } from "react";
import "../styles.css";

export const App = () => {

  const [sentence, setSentence] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSentence(value);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSentence("");
    event.currentTarget.style.backgroundColor = "purple";
    event.currentTarget.style.color = "white";
  }
  
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <img style={{width: "35rem"}} src="https://www.rd.com/wp-content/uploads/2020/06/GettyImages-185330333-edit.jpg" alt="" />
      <input value={sentence} style={{display: "block"}} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Clear input box</button>
      <h1>{ sentence }</h1>
    </div>
  );
}
