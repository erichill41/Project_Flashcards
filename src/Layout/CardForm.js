import React, { useEffect, useState } from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import { createCard, updateCard } from "../utils/api";

import { Button } from "./Buttons";

function CardForm({ initialCardData, setLoading }) {
    const { deckId } = useParams();
    const { url } = useRouteMatch();
    const [cardData, setCardData] = useState({});
    const history = useHistory();

    useEffect(() => {
        const abortController = new AbortController();

        async function loadCardData() {
            try {
                setCardData(initialCardData);
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
    }, [url]);

    const handleChange = ({ target }) => {
        setCardData({
            ...cardData,
            [target.name]: target.value,
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const abortController = new AbortController();

        try {
            if (cardData.id) {
                await updateCard(cardData, abortController.signal);
                history.push(`/decks/${deckId}`);
            } else {
                await createCard(deckId, cardData, abortController.signal);
                setCardData(initialCardData);
            }
        } catch (error) {
            if (error.name === "AbortError") {
                console.log("CardForm Aborted");
            } else {
                throw error;
            }
        }
        setLoading(true);
        return () => abortController.abort();
    }

    const renderPage = (
        <div>
            <form onSubmit={handleSubmit} className="form-group">
                <label htmlFor="front"> Front </label>
                <textarea
                    className="form-control"
                    id="front"
                    name="front"
                    rows="3"
                    onChange={handleChange}
                    value={initialCardData.front}
                />

                <label htmlFor="back"> Back </label>
                <textarea
                    className="form-control"
                    id="back"
                    name="back"
                    rows="3"
                    onChange={handleChange}
                    value={initialCardData.back}
                />

                <Button onClick={() => {
                    setLoading(true);
                    history.push(`/decks/${deckId}`)
                }}
                >
                    Finished
                </Button>

                <Button type="submit"> Save Card </Button>
            </form>
        </div>
    );

    return renderPage;
}

export default CardForm;