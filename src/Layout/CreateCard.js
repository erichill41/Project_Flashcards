import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";

function CreateCard() {
    const params = useParams();
    const history = useHistory();

    const [front, setFront] = useState("Front side of card")
    const [back, setBack] = useState("Back side of card")
    const [currentDeck, setCurrentDeck] = useState(null)
    
    useEffect(() => {
        async function loadDeck() {
            setCurrentDeck([])
            try {
                const response = await readDeck(params.deckId)
                setCurrentDeck(response)
            } catch (error) {console.log(error)}
        }
        loadDeck();
    }, [params])

    const handleDone = (e) => {
        e.preventDefault();
        history.push(`/decks/${params.deckId}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const card = {
            front: front,
            back: back,
            deckId: params.deckId
        }
        createCard(params.deckId, card)
        .then(response => {
            console.log(response)
            setFront("Front side of card")
            setBack("Back side of card")
        })
        history.push(`/decks/${currentDeck.id}`)
    }

    if(currentDeck){
        return (
            <div>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item"><Link to={`/decks/${currentDeck.id}`}> View Deck </Link></li>
                            <li class="breadcrumb-item active" aria-current="page"> Create Card </li>
                        </ol>
                    </nav>
                </div>
                <div>
                    <h2>{currentDeck.name}: Add Card</h2>
                </div>
                <form onSubmit={handleSubmit} className="form-group">
                    <label htmlFor="front">Front</label>
                    <textarea
                    className="form-control"
                    rows="3"
                    required
                    value={front}
                    onChange={(e) => setFront(e.target.value)}
                    />
                    <br />
                    <label>Back</label>
                    <textarea
                    className="form-control"
                    rows="3"
                    required
                    value={back}
                    onChange={(e) => setBack(e.target.value)}
    
                    />
                    <br />
                    <button onClick={handleDone} className="btn btn-primary mr-2"> Done </button>
                    <button type="submit" className="btn btn-primary"> Save </button>
                </form>
            </div>
        )
    }
    return <p>Loading...</p>
}
export default CreateCard;

// import React, { useEffect, useState } from "react";
// import { Link, useParams, useHistory } from "react-router-dom";
// import { createCard, readDeck } from "../utils/api/index";

// // Creates new card and sends to API
// // Shows on /decks/deckId/cards/new route 

// function CreateCard() {
//     const { deckId } = useParams();
//     const history = useHistory();
//     const [currentDeck, setCurrentDeck] = useState(undefined);
//     const [cardData, setCardData] = useState({});
    

//     useEffect(() => {
//         async function loadCurrentDeck() {
//             try {
//                 const response = await readDeck(deckId);
//                 setCurrentDeck(response);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         loadCurrentDeck();
//     }, [deckId]);

//     const finishedHandler = (event) => {
//         event.preventDefault();
//         history.push(`/decks/${deckId}`);
//     };

//     const submitHandler = (event) => {
//         event.preventDefault();
//         const card = {
//             deckId,
//             front: "",
//             back: "",
//         }
//         createCard(deckId, card)
//         .then(response => {
//             setCardData.front("");
//             setCardData.back("");
//         })
//     }

//     if (currentDeck) {
//         return (
//             <div>
//                 <div>
                    // <nav aria-label="breadcrumb">
                    //     <ol class="breadcrumb">
                    //         <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    //         <li class="breadcrumb-item"><Link to={`/decks/${deckId}`}> View Deck </Link></li>
                    //         <li class="breadcrumb-item active" aria-current="page"> Create Card </li>
                    //     </ol>
                    // </nav>
//                 </div>
//                 <div>
//                     <h2> {currentDeck.name}: Add Card </h2>
//                 </div>
//                 <form onSubmit={submitHandler}>
//                     <label> Front </label>
//                     <textarea 
//                         value={cardData.front}
//                         onChange={(event) => setCardData.front(event.target.value)}
//                     />
//                     <br />
//                     <label> Back </label>
//                     <textarea
//                         value={cardData.back}
//                         onChange={(event) => setCardData.back(event.target.value)}
//                     />

//                     <button onClick={finishedHandler}> Finished </button>
//                     <button onClick={submitHandler}> Submit </button>
//                 </form>
//             </div>
//         );
//     } else {
//         return <p> Loading... </p>
//     }
// }

// export default CreateCard;