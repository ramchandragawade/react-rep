import PropertyItem from "./PropertyItem";
import PropTypes from 'prop-types';
function PropertyList ({properties}) {
    return <ul style={{display:"flex"}}>
        {properties.map((itm)=>(<PropertyItem key={itm.id} {...itm}/>))}
    </ul>
}

PropertyList.propTypes = {
    properties: PropTypes.array
}

export default PropertyList;