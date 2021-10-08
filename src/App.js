import {
    BrowserRouter as Router, Redirect, Route, Switch,
} from "react-router-dom";
import ChatPage from "./pages/chatPage/ChatPage";

function App() {
    return (
        <Router>
            <Switch>
                {/*<Route path={'/login'} component={Login}/>*/}
                <Route path={'/'} component={ChatPage}/>
            </Switch>
        </Router>
    );
};

export default App;
