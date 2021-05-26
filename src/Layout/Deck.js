import React, { useEffect, useState } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";

import CreateCard from "./CreateCard";
import EditDeck from "./EditDeck";
import EditCard from "./EditCard";
import ViewDeck from "./ViewDeck";
import StudyDeck from "./StudyDeck";
import NotFound from "./NotFound";

function Deck({ loading, setLoading }) {
    const { deckId } = useParams();
    const [ currentDeck, setCurrentDeck ] = useState(undefined);

    useEffect(() => {
        const abortController = new AbortController();

        async function loadCurrentDeck() {
            try {
                const deckToSet = await readDeck(deckId, abortController.signal);
                setCurrentDeck(deckToSet);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("loadCurrentDeck Aborted");
                } else {
                    throw error;
                }
            }
        }
        loadCurrentDeck();
        setLoading(false);
        return () => abortController.abort();
    }, [ deckId, loading ]);


// todo: set route paths to use params variable ${deckId} so they are followed correctly to render the correct page
// current render shows not found when any button is clicked 


    if (currentDeck) {
        return (
            <div>
                <Switch>
                    <Route exact path="/decks/:deckId">
                        <ViewDeck currentDeck={currentDeck} loading={loading} setLoading={setLoading} />
                    </Route>

                    <Route path="/decks/:deckId/edit">
                        <EditDeck currentDeck={currentDeck} loading={loading} setLoading={setLoading} />
                    </Route>

                    <Route path="/decks/:deckId/cards/new">
                        <CreateCard currentDeck={currentDeck} loading={loading} setLoading={setLoading} />
                    </Route>

                    <Route path="/decks/:deckId/cards/:cardId/edit">
                        <EditCard currentDeck={currentDeck} loading={loading} setLoading={setLoading} />
                    </Route>

                    <Route path="/decks/:deckId/study">
                        <StudyDeck currentDeck={currentDeck} loading={loading} />
                    </Route>
                </Switch>
            </div>
        );
    } else {
        return (
            <div>
                <NotFound />
            </div>
        );
    }
}

export default Deck;