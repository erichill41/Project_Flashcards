import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import { readDeck } from "../utils/api";
import Card from "./Card";

function StudyDeck() {
    const params = useParams();
    const [currentDeck, setCurrentDeck] = useState(null)
    const [currentCards, setCurrentCards] = useState(null);

    useEffect(() => {
        async function loadDeck() {
            setCurrentDeck([]);
            setCurrentCards([]);
            try {
                const response = await readDeck(params.deckId);
                setCurrentDeck(response);
                const { cards } = response;
                setCurrentCards(cards);
            } catch (error) {console.log(error)}
        }
        loadDeck()
    }, [params])

    
    if(currentDeck){
        return (
            <div>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"> Home </Link></li>
                            <li class="breadcrumb-item"><Link to={`/decks/${currentDeck.id}`}> View Deck </Link></li>
                            <li class="breadcrumb-item active" aria-current="page"> Study Deck </li>
                        </ol>
                    </nav>
                </div>
                <div>
                    <h1>{currentDeck.name}: Study</h1>
                </div>
                    <Card currentCards={currentCards} />
            </div>
        )
    
    }
    return (
        <p>Loading...</p>
    );
}
export default StudyDeck;



// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { readDeck } from "../utils/api/index";

// import Card from "./Card";

// function StudyDeck(){
//     const { deckId } = useParams();
//     const [currentDeck, setCurrentDeck] = useState(undefined);
//     const [currentCards, setCurrentCards] = useState(null);

//     useEffect(() => {
//         async function loadCurrentDeck() {
//             setCurrentDeck([]);
//             setCurrentCards([]);
//             try {
//                 const response = await readDeck(deckId);
//                 setCurrentDeck(response);
//                 const { cards } = response;
//                 setCurrentCards(cards);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         loadCurrentDeck();
//     }, [deckId]);

//     if (currentDeck) {
//         return (
//         <div>
            // <nav aria-label="breadcrumb">
            //     <ol class="breadcrumb">
            //         <li class="breadcrumb-item"><Link to="/"> Home </Link></li>
            //         <li class="breadcrumb-item"><Link to={`/decks/${deckId}`}> View Deck </Link></li>
            //         <li class="breadcrumb-item active" aria-current="page"> Study Deck </li>
            //     </ol>
            // </nav>
//             <h2> {currentDeck.name} </h2>
//             <Card currentCards={currentCards} />
//         </div>
//         );
//     } else {
//         return <p> Loading... </p>
//     }
// }

// export default StudyDeck;