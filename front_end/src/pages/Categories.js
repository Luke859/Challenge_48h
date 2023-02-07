import Header from '../components/header'
import '../css/App.css'

export default function Categories(){
    return(
      <><Header /><div className="App">
        <header className="App-header">
          <p>
            ceci est un test
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