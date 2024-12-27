import { Link } from 'react-router-dom';
import '../Styles/Home.css'



function Home(){


    return(

        <div className="home">

            <h1>Vista Builds</h1>
            <h2>"Where Your Dreams Come True… Unless You’re Late on Rent"</h2>

            <Link to="/Apartments">
            <button>View Apartments</button>
            </Link>
            
        </div>
    );

}

export default Home;
