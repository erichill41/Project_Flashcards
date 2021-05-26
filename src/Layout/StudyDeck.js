import React from "react";
import { Link, useParams } from "react-router-dom";

import Card from "./Card";
import AddMoreCards from "./AddMoreCards";

function StudyDeck({ currentDeck, loading }){
    const { deckId } = useParams();
    const { name, cards } = currentDeck;

    const renderPage = (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/"> Home </Link></li>
                    <li class="breadcrumb-item"><Link to={`/decks/${deckId}`}> View Deck </Link></li>
                    <li class="breadcrumb-item active" aria-current="page"> Study Deck </li>
                </ol>
            </nav>
            <h2> Study Deck: {name} </h2>
            <Card currentDeck={currentDeck} loading={loading} />
        </div>
    );

    if (loading) {
        return <p> Loading Study Deck </p>
    }

    if (cards.length < 3) {
        return (
            <div>
                <AddMoreCards cards={ cards } />
            </div>
        );
    }

    return <div> { renderPage } </div>
}

export default StudyDeck;