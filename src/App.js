import './App.css';
import {useState, useEffect} from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";



const App = () => {
   const [searchField, setSearchField] = useState(''); // [value, setValue]
   const [monsters, setMonsters] = useState([]);
   const [filteredMonsters, setFilterMonsters] = useState(monsters);


   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then((users) => setMonsters(users));
   }, [])

   useEffect(() => {
      const newFilteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
      setFilterMonsters(newFilteredMonster);
   }, [monsters, searchField])



   const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString)
   };


   return (
      <div className="App">
         <h1 className="app-title">Cat Rolodex</h1>
         <SearchBox onChangeHandler={onSearchChange} className='monster-search-box' placeholder='Search Monster'/>
         <CardList monsters={filteredMonsters} />
      </div>
   );
}

// class App extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          monsters: [],
//          searchField: ''
//
//       };
//    }
//
//    componentDidMount() {
//
//    }
//
//    onSearchChange = (event) => {
//       const searchField = event.target.value.toLowerCase();
//       this.setState(() => {
//          return {searchField};
//       });
//    };
//
//
//    render() {
//       const {monsters, searchField} = this.state;
//       const {onSearchChange} = this;
//
//
//
//
//    }
// }


export default App;
