import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

import { Button, DeleteButton } from "./Buttons";
import CardList from "./CardList";

function ViewDeck({ currentDeck, loading, setLoading }) {
    const { name, description, cards, id } = currentDeck;
    const { url } = useRouteMatch();
    const history = useHistory();
    const abortController = new AbortController();

    async function deleteHandler() {
        if (window.confirm("Delete this deck?\n\nYou will not be able to recover it.")) {
            try {
                await deleteDeck(id, abortController.signal);
                setLoading(true);
                history.push("/");
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("ViewDeck Delete Aborted");
                } else {
                    console.log(error);
                }
            }
            return () => abortController.abort();
        }
    }

    const renderPage = (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">View Deck</li>
                </ol>
            </nav>
            
            <h2> { name } </h2>
            <h4> { description } </h4>
            <Link to={`${ url }/edit`}>
                <Button> Edit Deck </Button>
            </Link>
            <Link to={`${ url }/study`}>
                <Button> Study Deck </Button>
            </Link>
            <Link to={`${ url }/cards/new`}>
                <Button> Add Cards </Button>
            </Link>
            <DeleteButton onClick={deleteHandler}> Delete Deck </DeleteButton>
            <CardList cards={ cards } loading={loading} setLoading={setLoading} />
        </div>
    );

    if (loading) {
        return <p> View Deck Loading... </p>
    } else {
        return <div> { renderPage } </div>
    }
}

export default ViewDeck;