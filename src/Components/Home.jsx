import '../Styles/Home.css';
import '../index.css';
import { Link } from 'react-router-dom';
import { Flats } from './Flasts';


export const Home=()=>{



    return(

        
        <div className="home">
            
            <div className="home-head">
                Vista Builds Agency
            </div>

            <div className="home-description">

            Step into a spacious living room filled with natural light from large windows that offer stunning views of the city skyline. The open-concept kitchen features stainless steel appliances, granite countertops, and ample cabinet space, ideal for cooking and entertaining. Both bedrooms are generously sized, providing plenty of room for relaxation and personalization.
            </div>

            <Link to={"flats"}>View Our Homes</Link>
        </div>
    );
};