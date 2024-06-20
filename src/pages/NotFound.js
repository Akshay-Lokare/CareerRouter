import { Link } from 'react-router-dom';

export default function NotFound() {
    return(
        <div>
            <h2> 404 Page </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>
            <p> Go back <Link to='/'>Home</Link> </p>
        </div>
    );
}