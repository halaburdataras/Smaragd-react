import './App.css';
import BottomNavbar from './Components/BottomNavbar/BottomNavbar';
import ContentContainer from './Components/ContentContainer/ContentContainer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="appWrapper">
      <Header />
      
      <ContentContainer />

      <BottomNavbar />
    </div>
  );
}

export default App;
