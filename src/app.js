import {Component} from "react";
import Header from "./components/header/header";
import CoffeeList from "./components/coffee-list/coffee-list";

class App extends Component {
    state = {
        data: [
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 1},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, id: 2},
            {name: 'AROMISTICO Coffee 0.75 kg', country: 'Columbia', price: 6.99, id: 3},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 4},
            {name: 'NESCAFE Coffee 0.5 kg', country: 'Brazil', price: 6.99, id: 5},
            {name: 'NESCAFE Coffee 1 kg', country: 'Brazil', price: 6.99, id: 6}
        ],
        term: '',
        filter: ''
    }

    searchData = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => item.name.toUpperCase().indexOf(term.toUpperCase()) > -1);
    }

    onToggleSearch = (term) => {
        this.setState({term});
    }

    filter = (items, filter) => {
        switch (filter) {
            case 'brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'columbia':
                return items.filter(item => item.country === 'Columbia');
            case 'kenya':
                return items.filter(item => item.country === 'Kenya');
            default:
                return items
        }
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filter(this.searchData(data, term), filter);
        return (
            <div className="App">
                <Header/>
                <CoffeeList data={visibleData} onSearch={this.onToggleSearch} onFilter={this.onFilterChange}/>
            </div>
        )
    }
}

export default App;