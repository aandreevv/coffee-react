import './coffee-list-item.scss'
import image from './coffee-image.png';

const CoffeeListItem = (props) => {
    const {name, country, price} = props

    return (
        <li className="coffee-item">
            <img src={image} alt='coffee'/>
            <p>{name}</p>
            <p>{country}</p>
            <p className="price">${price}</p>
        </li>
    )
}

export default CoffeeListItem;