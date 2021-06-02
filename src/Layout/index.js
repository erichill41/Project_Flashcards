import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateDeck from "./CreateDeck";
import Deck from "./Deck";
import StudyDeck from "./StudyDeck";
import EditDeck from "./EditDeck";
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";


function Layout() {

  return (
    <div className="container">
      <Header />
    <hr></hr>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path="/decks/new">
          <CreateDeck />
        </Route>

        <Route exact path="/decks/:deckId">
          <Deck />
        </Route>

        <Route exact path="/decks/:deckId/study">
          <StudyDeck />
        </Route>

        <Route exact path="/decks/:deckId/edit">
          <EditDeck />
        </Route>

        <Route exact path="/decks/:deckId/cards/new">
          <CreateCard />
        </Route>

        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Layout;
