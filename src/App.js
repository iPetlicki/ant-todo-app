import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import TodoPage from "./Pages/todoPage/todoPage";
import PrivateRoute from "./Helpers/PrivateRoute";



function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<PrivateRoute/>}>
                <Route path='/todo' element={<TodoPage />} />
            </Route>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationPage />} />
        </Routes>
    </div>
  );
}

export default App;
