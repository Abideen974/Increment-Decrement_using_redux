import logo from './logo.svg';
import './App.css';
import {useSelector ,useDispatch} from 'react-redux'
import {incNumber, decNumber} from './action/index'

function App() {
  const myState = useSelector((state) => state.onChangeNumber)
  const dispatch = useDispatch();
  return (
    <div className="App">
       <div className="container">
         <h1>Increament & Decrement</h1>
         <h3>Using redux </h3>

         <div>
           <button onClick={()=> dispatch(decNumber())}> - </button>
           <input type="text" name="" id="" value={myState}/>
           <button onClick={() =>dispatch(incNumber(10))}> + </button>
         </div>
       </div>
    </div>
  );
}

export default App;
