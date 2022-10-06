import Router from './router'
import GlobalStyle from './components/GlobalStyle'

function App() {
   return (
      <div className="App">
         <GlobalStyle>
            <Router />
         </GlobalStyle>
      </div>
   )
}

export default App
