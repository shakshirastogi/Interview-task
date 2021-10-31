import TableState from './ContextApi/AllStates';
import Create from './component/Create';
import EmpList from './component/EmpList';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Edit from './component/Edit';
function App() {
  return (
  <TableState>
    <Router>
        <Navbar />
        <Switch>
        <Route  component={Edit} path='/edit/:id' />
        {/* <Route component={Edit} path="/edit"/> */}
        <Route component={EmpList} path="/emplist" />
        <Route component={Create} path="/add" />
        
          </Switch>
      </Router>
</TableState>




  

    
  )
}

export default App;
