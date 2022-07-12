import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import List from "./components/list";
import { useUserContext } from "./context/userContext";
import {Routes,Route} from "react-router-dom";


function App() {

  const { user } = useUserContext();
  

  return (
    <>
      
     
    <Routes>
      
      <Route path="/" element={<Auth  />} />
      
      <Route path="/dashboard"  element={user ? <Dashboard />:<Auth /> } />
      <Route path="/list"  element={user ? <List />:<Auth /> } />
      
    </Routes>
    </>
    
  );
}

export default App;
