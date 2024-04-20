import './App.css';
import Nav from './sections/nav';
import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/section3';

function App() {
  return (
    <div className="w-full">
      <Nav/>
      <Section1 />
      <Section2/>
      <Section3/>
    </div>
  );
}

export default App;
