import './App.css';
import Body from './component/Body/Body';
function App() {
  return (
    <div className="App">
      <div className="header">
            <h1><span style={{color: 'rgba(251, 201, 27, 1)'}}>HACKER</span><span style={{color: 'rgba(0, 0, 0, 1)'}}>NEWS</span><span style={{color: 'rgba(251, 201, 27, 1)'}}>.</span></h1>
        </div>
      <Body/>
    </div>
  );
}
export default App;