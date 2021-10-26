import 'normalize.css'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error/Error'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
        <Route path='*' component={Error} />
      </Switch>
    </Layout>
  )
}

export default App
