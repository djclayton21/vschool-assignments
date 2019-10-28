import React, {useContext} from 'react';
import { UserContext } from '../Context/UserProvider.js';

const Home = () => {
    const { logout } = useContext(UserContext);
    return (
        <div className="home">
            <button className="logout" onClick={logout} >Logout</button>
        </div>
    );
}
 
export default Home;