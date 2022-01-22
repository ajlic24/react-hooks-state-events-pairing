import video from "../data/video.js";
import Header from './Header'
import Buttons from "./Buttons.js";

function App() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header data={video} />
      <Buttons data={video} />
    </div>
  );
}

export default App;
