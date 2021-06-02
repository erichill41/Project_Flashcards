import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateCard } from "../utils/api";

function EditCard() {
    const history = useHistory();
    const { deckId, cardId } = useParams();
    
    const [front, setFront] = useState("")
    const [back, setBack] = useState("")
    const [currentDeck, setCurrentDeck] = useState(null)
    const [currentCard, setCurrentCard] = useState(null)

    useEffect(() => {
        async function loadInfo(){
            try {
                const response = await readDeck(deckId);
                setCurrentDeck(response)
                setCurrentCard(response.cards.find((card) => (card.id + "") === cardId))
                setFront((response.cards.find((card) => (card.id + "") === cardId)).front)
                setBack((response.cards.find((card) => (card.id + "") === cardId)).back)
            } catch (error) {console.log(error)}
        }
        loadInfo()
    }, [deckId, cardId])

    const handleCancel = (event) => {
        event.preventDefault();
        history.push(`/decks/${deckId}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const card = {
            ...currentCard,
            front, 
            back
        }
        updateCard(card)
        .then(response => {
            console.log(response);
            setCurrentCard(response)
            history.push(`/decks/${deckId}`)
        })
    }

    if(currentDeck && currentCard){
        return (
            <div>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"> Home </Link></li>
                            <li class="breadcrumb-item"><Link to={`/decks/${deckId}`}> View Deck </Link></li>
                            <li class="breadcrumb-item active" aria-current="page"> Edit Card </li>
                        </ol>
                    </nav>
                </div>
                <h2>Edit Card</h2>
                <form onSubmit={handleSubmit} className="form-group">
                    <label htmlFor="front">Front</label>
                    <br />
                    <textarea
                    className="form-control"
                    rows= "3"
                    required
                    value={front}
                    onChange={(event) => setFront(event.target.value)}
                    />
                    <br />
                    <label htmlFor="back">Back</label>
                    <br />
                    <textarea
                    className="form-control"
                    rows= "3"
                    required
                    value={back}
                    onChange={(event) => setBack(event.target.value)}
                    />
                    <br />
                    <button onClick={handleCancel} className="btn btn-secondary mr-2">Cancel</button>
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                </form>
            </div>
        )
    }
    return <p>Loading...</p>
}
export default EditCard;