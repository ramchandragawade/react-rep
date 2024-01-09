import PropTypes from 'prop-types';
function PropertyItem({name, rating, price}) {
    return <div style={{border: "1px solid red", margin:"0px px"}}>
        <h2>{name}</h2>
        <h3>${price}/night</h3>
        <h4>{rating}⭐</h4>
    </div>
}

PropertyItem.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.bool
}

export default PropertyItem;