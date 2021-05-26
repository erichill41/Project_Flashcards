import React from "react";
import { Link, useParams } from "react-router-dom";

import { Button } from "./Buttons";

function AddMoreCards({ cards }) {
    const { deckId } = useParams();

    return (
        <div>
            <h3> You Need More Cards </h3>
            <p>
                You need at least 3 cards to study. There are { cards.length } cards in this deck.
                Click below to add more cards.
            </p>
            <Link to={`/decks/${deckId}/cards/new`}>
                <Button> Add More Cards </Button>
            </Link>
        </div>
    );
}

export default AddMoreCards;