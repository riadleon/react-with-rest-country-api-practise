import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">

        <Countries></Countries>

    </div>
  );
}

// function LoadCountries(){
//   const [Countries, setCountries] = useState([]);

//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data => setCountries(data))
//   },[])
//   return (
//     <div>
//        <h1>Visiting Every Country</h1>
//        <h3>Available Countries : {Countries.length}</h3>
//        {
//         Countries.map(country => <Country name={country.name.common} population={country.population} ></Country>)
//        }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h2>Name : {props.name}</h2>
//       <h4>Population : {props.population}</h4>
//     </div>
//   )
// }

export default App;
