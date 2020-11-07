import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

// $ npm install react-router-dom
// if we dont use Switch, /:post_id wd be shown for other pages too, as
// in this case post_id would be assigned the value about
// To prevent this, we use Switch
// Like Switch stmt, here it checks from top to bottom, and if URL matches, it stops there

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route exact path="/:post_id" component={Post} />
                        {/* Here : is used to create variable link */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
