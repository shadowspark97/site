import './App.css';
import Navbar from './components/Navbar/Navbar';  // Direct import, bypass index.js
import ResumeContainer from './components/ResumeContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <ResumeContainer />
      </main>
    </div>
  );
}

export default App;