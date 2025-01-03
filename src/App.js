
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1>Testing First Case</h1>
      <input type="text" placeholder="Enter your name" value={data} onChange={(e) => setData(e.target.value)} /> <br />
      <button onClick={() => setData("update Data")}>Updated Data</button>
      <h1>{data}</h1>
      <br />
      <br />
      <br />
      <button>Click 1</button><br /><br />
      <label htmlFor="input 1">User Name:</label>&nbsp;&nbsp;
      <input type="text" id='input 1' />
      <div role='trail'>Person</div>
      {/* <img title="ai generated" src="https://wheon.com/wp-content/uploads/2024/12/RowImageSlider18.webp" /><br /> */}
      <br />
      <button>Click Me</button>
      <button>Click Me</button><br /><br />
      <select name="cars" id="" >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <div>Hello World</div>
      <br />
    </div>
  );
}

export default App;
