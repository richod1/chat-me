import Header from './components/Header'
import Section from './components/Section'
import './App.css';
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user]=useAuthState(auth)
  console.log(user);
  return (
    <div className="App">
      <Header/>
      <Section/>
      
    </div>
  );
}

export default App;
