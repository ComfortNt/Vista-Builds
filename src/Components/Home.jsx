import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import { Flats } from './Flasts';


export const Home=()=>{



    return(
        <div className="home">
            
            <div className="home-head">
                Vista Builds Agency
            </div>

            <div className="home-description">

            Discover your new home in this beautifully updated 2-bedroom, 1-bath apartment located in the heart of downtown. Enjoy an open-concept living space filled with natural light, a modern kitchen with stainless steel appliances, and easy access to local shops and restaurants. With convenient in-unit laundry and a cozy balcony perfect for morning coffee, this apartment is ideal for both relaxation and entertaining. Don’t miss out on this opportunity—schedule a viewing today!
            </div>

            <Link to={"flats"}>View Our Homes</Link>
        </div>
    );
};