import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Navigator from '../Pages/Navigator'
import RippleAnimation from '../components/RippleAnimation'

const App = () => {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navigator />
        <RippleAnimation />
      </Router>
    </div>
  )
}

export default App
