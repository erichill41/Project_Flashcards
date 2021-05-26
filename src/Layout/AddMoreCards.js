import React from "react";
import { Link, useParams } from "react-router-dom";

import { Button } from "./Buttons";

function AddMoreCards({ currentDeck, cards }) {
    const { deckId } = useParams();

    return (
        <div>
            <h3> { currentDeck.name } </h3>
            <h2> Not enough cards. </h2>
            <p>
                You need at least 3 cards to study. There are { cards.length } cards in this deck.
            </p>
            <Link to={`/decks/${deckId}/cards/new`}>
                <Button> Add More Cards </Button>
            </Link>
        </div>
    );
}

export default AddMoreCards;