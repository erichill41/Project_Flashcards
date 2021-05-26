import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readCard } from "../utils/api/index";

import CardForm from "./CardForm";

function EditCard({ loading, setLoading }) {
    const { cardId, deckId } = useParams();
    const [initialCardData, setInitialCardData] = useState({});

    useEffect(() => {
        const abortController = new AbortController();

        async function loadCardData() {
            try {
                const currentCard = await readCard(cardId, abortController.signal);
                setInitialCardData(currentCard);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("loadCardData Aborted");
                } else {
                    throw error;
                }
            }
        }
        loadCardData();
        return () => abortController.abort();
    }, [deckId, cardId]);

    const renderPage = (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/"> Home </Link></li>
                    <li class="breadcrumb-item"><Link to={`/decks/${deckId}`}> View Deck </Link></li>
                    <li class="breadcrumb-item active" aria-current="page"> Edit Card </li>
                </ol>
            </nav>
            <h2> Edit Card </h2>
            <CardForm initialCardData={initialCardData} setLoading={setLoading} />
        </div>
    );

    if (loading) {
        return <p> Edit Card Loading... </p>
    } else {
        return <div> {renderPage} </div>
    }
}

export default EditCard;