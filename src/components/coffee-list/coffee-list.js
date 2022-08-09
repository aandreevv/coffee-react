import {Component} from "react";
import './coffee-list.scss';
import CoffeeListItem from "../coffee-list-item/coffee-list-item";

class CoffeeList extends Component {

    state = {
        term: '',
        filter: ''
    }

    onChange = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onSearch(term);
    }

    onFilterToggle = (event) => {
        const filter = event.currentTarget.name;
        if (this.state.filter === filter) {
            this.setState({filter: ''});
            this.props.onFilter('');
        } else {
            this.setState({filter});
            this.props.onFilter(filter);
        }
    }

    render() {
        const listItems = this.props.data.map(item => {
            return (
                <CoffeeListItem key={item.id} name={item.name} country={item.country} price={item.price}/>
            )
        })

        return (
            <section>
                <div className="toggle">
                    <div className="search">
                        Looking for
                        <input  type="text"
                                placeholder="start typing here..."
                                onChange={this.onChange}
                                value={this.state.term}/>
                    </div>
                    <div className="filter">
                        Or filter
                        <button className={this.state.filter === 'brazil' ? 'active' : ''}
                                onClick={this.onFilterToggle}
                                name='brazil'>
                            Brazil
                        </button>
                        <button className={this.state.filter === 'kenya' ? 'active' : ''}
                                onClick={this.onFilterToggle}
                                name='kenya'>
                            Kenya
                        </button>
                        <button className={this.state.filter === 'columbia' ? 'active' : ''}
                                onClick={this.onFilterToggle}
                                name='columbia'>
                            Columbia
                        </button>
                    </div>
                </div>

                <ul className="coffee-list">
                    {listItems}
                </ul>
            </section>
        )
    }
}

export default CoffeeList;