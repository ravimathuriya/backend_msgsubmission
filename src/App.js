
import './App.css';
import Feedbackform from './Components/Feedbackform';
import Navbar from './Components/Navbar';
import MsgState from './Components/ContextState/MsgState';


function App() {
  return (
    <>
    <MsgState>
      <Navbar/>
      <Feedbackform/>
    </MsgState>
    </>
  );
}

export default App;
