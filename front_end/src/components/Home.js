import logo from '../css/index.css';
import Header from './header'
import '../css/App.css'

export default function Home(){
    return(
        <><Header /><div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    ceci est un test version 2
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div></>
    )
}