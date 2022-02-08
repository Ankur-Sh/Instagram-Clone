import logo from "./logo.svg";
import "./App.css";
import Post from "./Post";
import "./Post.css";

function App() {
    return (
        <div className="App">
            <div className="app_header">
                <img src="" alt="Insta" />
            </div>
            <h1>Programmer</h1>
            <Post username="Cleverqazi" caption="WOW it works" imageUrl="" />
            <Post username="Aman" caption="Work" imageUrl="" />
            <Post username="Ash" caption="WOWs" imageUrl="" />
            <Post username="Cobra" caption="Wonder" imageUrl="" />
        </div>
    );
}

export default App;
