import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateDeck from "./CreateDeck";
import Deck from "./Deck";


function Layout() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <Header />
    <hr></hr>
      <Switch>
        <Route exact path="/">
          <Home loading={loading} setLoading={setLoading} />
        </Route>
        
        <Route path="/decks/new">
          <CreateDeck  loading={loading} setLoading={setLoading} />
        </Route>

        <Route path="/decks/:deckId">
          <Deck loading={loading} setLoading={setLoading} />
        </Route>

        <Route>
          <NotFound loading={loading} />
        </Route>
      </Switch>
    </div>
  );
}

export default Layout;
