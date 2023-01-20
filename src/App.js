import './App.css';
import {Users} from "./components/Users/Users";
import {User} from "./components/User/User";
import {UserDetails} from "./components/UserDetails/UserDetails";

function App() {


    return (
        <div className="App">

            <Users/>
            <User/>
            {/*<UserDetails onShowUserDetails={onShowUserDetails}/>*/}


        </div>
    );
}

export default App;
