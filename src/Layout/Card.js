import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "./Buttons";

function Card({ currentDeck, loading }) {
    const { cards } = currentDeck;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [front, setFront] = useState(true);
    const history = useHistory();

    const nextCardHandler = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setFront(true);
        } else {
            if (window.confirm("Restart cards?\n\nClick 'Cancel' to return to the home page")) {
                setCurrentIndex(0);
                setFront(true);
            } else {
                history.push("/");
            }
        }
    };

    const turnCardHandler = () => {
        setFront(!front);
    };

    const renderPage = (
        <div className="card border-primary mb-3">
            <div className="card-body">
                <h4 className="card-title"> Card {currentIndex + 1} of {cards.length} </h4>
                <p className="card-text">
                    {front ? cards[currentIndex].front : cards[currentIndex].back}
                </p>
                <Button onClick={turnCardHandler}> Turn Card </Button>
                {!front ? <Button onClick={nextCardHandler}> Next Card </Button>: null}
            </div>
        </div>
    );

    if (loading) {
        return <p> Loading Card... </p>
    } else {
        return <div> {renderPage} </div>
    }
}

export default Card;