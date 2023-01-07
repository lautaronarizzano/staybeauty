import React from "react";
import { useState } from "react";
import Carrusel from "../../Carrusel/Carrusel";
import Loading from '../../Loading/Loading'
import './ItemListContainer.css'

const ItemListContainer = () => {

    const [ loading, setLoading ] = useState(true)
return <main className="itemList-main">
    <Carrusel />
    <section className="listContainer">
        {
            loading ?
            <Loading />
            :
            <ItemList />
        }
    </section>
</main>;
};

export default ItemListContainer;
