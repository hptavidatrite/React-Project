import { Car } from "../lib/car";
import Modal from "./Modal"
import { useState } from "react";

function Product ({name, url, price, description, quantify, id}) {
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(1);

    const add = () =>{
        if (count >= quantify)  return
        setCount((prev) => prev + 1)
    }

    const subtract = () =>{
        if (count <= 1)  return
        setCount((prev) => prev - 1)
    }

    const save = () =>{
        const productSave = {
            id: id,
            quantify: count
        }

        Car.add(productSave)
    }

    return(
        <div className="product-card">
            {name} 
            <img src={url} alt={name} />
            {price}
            <div className="addtocar">
                <button onClick={() => setShowModal((prev) => !prev)}>Comprar</button>
            </div>
            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <div className="modalbuy">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="addremove">
                        <button type="button" onClick={subtract}>-</button>
                        <span>{count}</span>
                        <button type="button" onClick={add}>+</button>
                        <button type="butoon" onClick={save}>
                            agregar al carrito
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Product 