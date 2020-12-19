import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import "./styles.css";

const About = () => (
  <div className="About">
    <h1> About Page </h1>
    <hr />
    <p>Informaion about your app or who you are would go here</p>
  </div>
);

const Homepage = () => (
  <div className="HomepageAbout">
    <h1> Homepage </h1>
    <hr />
    <p>This is our Home Page</p>
  </div>
);

const Search = (props) => {
  const query = new URLSearchParams(useLocation().search);
  const term = query.get("q");
  const returned = DoSearch(term);
  return (
    <div>
      <h1>Search Page </h1>
      <hr />
      Found items for: {term}:
      <ul>
        {returned.map((t) => {
          return <li key={t}>{t}</li>;
        })}
      </ul>
    </div>
  );
};

const items = [
  "Lorem Ipsum",
  "Ipsum Dipsum",
  "Foo Bar",
  "A little black cat",
  "A lazy Fox",
  "A jumping dog"
];
const DoSearch = (term) => {
  if (!term) {
    return items;
  }
  return items.filter(
    (item) => item.toLowerCase().indexOf(term.toLowerCase()) !== -1
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="*">
        <h1>Page Not Found </h1>
        <a href="/">Return Home </a>
      </Route>
    </Switch>
  </Router>
);
export default App;
