import './App.css';
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar';
import Video from './Video/Video';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="wrapper">
        <Sidebar className="slidebar_position"/>
        <Video/>  
      </div>
    </div>
  );
}

export default App;
