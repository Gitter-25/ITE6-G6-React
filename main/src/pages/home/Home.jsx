import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
    <div className="container">
        <h2> ITE6-2A  Group6 </h2>
        <p>This is a simple home page for the group.</p>
        <ol>
            <li>John Gitter Perito</li>
            <li>Matthew Stephen Delda</li>
            <li>Mary Annjellyn Laduiana</li>
            <li>Ace Blixen Rubante</li>
        </ol>

       <Link to="/count">
        <button className='btn'>Go to Counter</button>
      </Link>
    </div>
    
)

export default Home