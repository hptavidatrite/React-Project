import { IoCart } from "react-icons/io5";
import React, { useState } from 'react';
import Modal from './Modal'; 
import data from './Data.json';
import { Car } from "../lib/car";
import Product from "./Product";

function ShoppingCart() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className="shoppingcart" onClick={() => setShowModal(true)}>
        <IoCart />
      </button>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        {
          Car.car.value.map((product) => {
            const a = data.find((p) => product.id == p.id )
            return (
              <Product key = {a.id} {...a}/>
            )
          })
        }
      </Modal>
    </div>
  );
}

export default ShoppingCart;
