import { FunctionComponent } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Login } from '../pages/login/Login';



export const IndexRoutes: FunctionComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Login/>}/>
          <Route path='/dashboard' element= {<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}
