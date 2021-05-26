import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, DeleteButton } from "./Buttons";
import { deleteDeck, listDecks } from "../utils/api/index";

function DeckList ({ loading, setLoading }) {
    const history = useHistory();
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        async function loadDecks() {
            try {
                const deckContent = await listDecks(abortController.signal);
                setDecks(deckContent);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("loadDecks Aborted");
                } else {
                    throw error;
                }
            }
        }
        loadDecks();
        setLoading(false);
        return () => abortController.abort();
    }, [loading, setLoading]);

    
    async function deleteHandler({ target }) {
        const id = target.id;
        const abortController = new AbortController();
        if (
            window.confirm("Delete this deck?\n\nYou wil not be able to recover it.")
        ) {
            try {
                await deleteDeck(id, abortController.signal);
                setLoading(true);
                setLoading(false);
                history.push("/");
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("ViewDeck Delete Aborted")
                } else {
                    console.log(error);
                }
            }
            return () => abortController.abort();
        }
    }

    const renderPage = decks.map(({ id, name, description, cards }) => {
        return (
            <div key={id} className="card mb-3">
                <div className="card-body">
                    <h4 className="card-title text-danger"> {name} </h4>
                    <h6 className="card-subtitle mb-2 text-muted"> {cards.length} cards </h6>
                    <p className="card-text"> {description} </p>
                    <br />
                    <Link to={`/decks/${id}`}>
                        <Button> View </Button>
                    </Link>
                    <DeleteButton onClick={deleteHandler} id={id}>
                        Delete
                    </DeleteButton>
                </div>
            </div>
    );
});
if (loading) {
    return <p> Loading List of Decks </p>
} else {
    return <div> {renderPage} </div>
    }
}

export default DeckList;