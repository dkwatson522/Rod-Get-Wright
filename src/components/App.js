import '../App.css';
import Schedule from './Schedule';
import { v4 as uuidv4 } from 'uuid';


function App() {
  let title = 'Fit Fellas'
  console.log(uuidv4())

  return (
    <div className="flex flex-col justify-center items-center h-full my-6">
      <h1 className="text-4xl my-4 font-extrabold underline">{title}</h1>
      <Schedule/>
    </div>
  );
}

export default App;
