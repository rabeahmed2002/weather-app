
import './App.css';
import Search from "./Components/Search"

function App() {

  const handleOnSearchChange=(searchData)=>{
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
