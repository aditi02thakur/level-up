import level from '../src/images/level.png';
import icon from '../src/images/icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="top">
      <div className="logo">
        <img src={level} className="applogo" alt="logo"/>
      </div>
    </div>
      <div className="head">
        <h1 className="h11">LEVEL UP your positivity</h1>
      </div>
      <div className="ques">
        <h1 className="h22"><span>What's weighing you down?</span>
        <img src={icon} className="ilogo" alt= "logo"/></h1>
      </div>
        <input type="text" placeholder="Type Here" className="writingspace" />
      <div className='cards'>
        <div className='cards_wrapper'>
          <h2>🙂 Self</h2>
        </div>
        <div className='cards_wrapper'>
          <h2>👪 Family & Friends</h2>
        </div>
        <div className='cards_wrapper'>
          <h2>💗 Love</h2>
        </div>
        <div className='cards_wrapper'>
          <h2>💻 Work</h2>
        </div>
      </div>
      <footer >
        <p>
          <span className="foottext">Enter email & Join waiting list for the app that helps you to unleash your potentially</span>
          <button className='btn'>SUBSCRIBE</button>
        </p>
      </footer>
    </div>
  );
}

export default App;
