import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateDeck } from "../utils/api/index";

import { Button } from "./Buttons";

function EditDeck({ currentDeck, loading, setLoading }) {
    const { deckId } = useParams();
    const [ editDeckData, setEditDeckData ] = useState({});
    const { name, description } = currentDeck;
    const history = useHistory();
    const initialDeckData = {
        name, description,
        id: deckId,
    };

    useEffect(() => {
        setEditDeckData(initialDeckData);
    }, []);

    const handleChange = ({ target }) => {
        setEditDeckData({
            ...editDeckData,
            [ target.name ]: target.value,
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const abortController = new AbortController();
        
        await updateDeck(editDeckData, abortController.signal);
        history.push(`/decks/${deckId}`);
        setLoading(true);
        return () => abortController.abort();
    }

    const renderPage = (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active"><Link to={`/decks/${deckId}`}> View Deck </Link></li>
                    <li class="breadcrumb-item active" aria-current="page"> Edit Deck </li>
                </ol>
            </nav>
            <h2> Edit Deck </h2>
            <form onSubmit={handleSubmit} className="form-group">
                <label className="col=form-label" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={editDeckData.name}
                    onChange={handleChange}
                    className="form-control"
                />
                <label htmlFor="description"> Description </label>
                <textarea 
                    name="description"
                    id="description"
                    rows="3"
                    value={editDeckData.description}
                    onChange={handleChange}
                    className="form-control"
                />
                <Link to={`/decks/${deckId}`}>
                    <Button> Cancel </Button>
                </Link>
                <Button type="submit"> Submit </Button>
            </form>
        </div>
    );

    if (loading) {
        return <p> Loading Edit Deck... </p>
    } else {
        return <div> {renderPage} </div>
    }
}

export default EditDeck;