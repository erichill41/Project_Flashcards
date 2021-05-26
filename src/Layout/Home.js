import React from "react";
import { Link } from "react-router-dom";

import { Button } from "./Buttons";
import DeckList from "./DeckList";

function Home({ loading, setLoading }) {
    const renderPage = (
        <div>
            <Link to="/decks/new">
                <Button> Create Deck </Button>
            </Link>
            <DeckList loading={loading} setLoading={setLoading} />
        </div>
    );

    if (loading) {
        return <p> Loading Homepage... </p>
    } else {
        return <div> {renderPage} </div>
    }
}

export default Home;