import { useState } from "react";
import Input from "./components/Input";

function App() {

  const [people, setPeople] = useState([])
  console.log(people)
  return (
    
    <div className="App">
      <Input people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
