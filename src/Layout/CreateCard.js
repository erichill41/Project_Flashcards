import React from "react";
import { Link, useParams } from "react-router-dom";
import CardForm from "./CardForm";

// Creates new card and sends to API
// Shows on /decks/deckId/cards/new route 

function CreateCard({ currentDeck, loading, setLoading }) {
    const { deckId } = useParams();
    const { name } = currentDeck;
    const initialCardData = {
        deckId,
        front: "",
        back: "",
    };

    const renderPage = (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link to={`/decks/${deckId}`}> View Deck </Link></li>
                    <li class="breadcrumb-item active" aria-current="page"> Create Card </li>
                </ol>
            </nav>
            <h2> Create Card </h2>
            <h3> Deck: {name} </h3>
            <CardForm initialCardData={initialCardData} setLoading={setLoading} />
        </div>
    );

    if (loading) {
        return <p> Create Card Loading... </p>
    } else {
        return <div> {renderPage} </div>
    }
}

export default CreateCard;