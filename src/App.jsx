import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Index from 'pages/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import PublicLayout from 'layout/PublicLayout';
import PrivateLayout from 'layout/PrivateLayout';
import AuthLayout from 'layout/AuthLayout';
import Admin from 'pages/admin/Admin';
import Vehiculos from 'pages/admin/Vehiculos';
import Clientes from 'pages/admin/Clientes';
import Ejercicio2 from 'pages/Ejercicio2'
import Ejercicio2opt from 'pages/Ejercicio2opt';
import Ejercicio3 from 'pages/Ejercicio3';
import Ejercicio4 from 'pages/Ejercicio4';


function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/admin', '/admin/vehiculos', '/admin/clientes']}>
          <PrivateLayout>
            <Switch>
              <Route path='/admin/vehiculos'>
                <Vehiculos />
              </Route>
              <Route path='/admin/clientes'>
                <Clientes />
              </Route>
              <Route paht='/admin'>
                <Admin />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path={['/login', '/registro']}>
          <AuthLayout>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/registro'>
                <Registro />
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        <Route path={['/', '/ejercicio2', '/ejercicio2opt', '/ejercicio3', '/ejercicio4']}>
          <PublicLayout>
            <Switch>
              <Route path='/ejercicio4'>
                <Ejercicio4 />
              </Route>
              <Route path='/ejercicio3'>
                <Ejercicio3 />
              </Route>
              <Route path='/ejercicio2'>
                <Ejercicio2 />
              </Route>
              <Route path='/ejercicio2opt'>
                <Ejercicio2opt />
              </Route>
              <Route path='/'>
                <Index />
              </Route>
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
