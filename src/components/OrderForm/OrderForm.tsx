"use client";
import { useState } from "react";
import { orderStore } from "@/Store/orderSlices";
import { costumerStore } from "@/Store/costumerSlices";
import { stateOrderObject, noticesObject } from "@/Utils/enumObjects";
import { TNewOrder, TCostumer } from "@/Utils/Types";
import styles from "./OrderForm.module.css";

export default function OrderForm() {
  const { costumers, setCostumers } = costumerStore();
  const { setCreateForm } = orderStore();
  const [costumer, setCostumer] = useState<TCostumer>({
    id: 0,
    firstName: "",
    secondName: "",
    lastName: "",
    phone: "",
    email: "",
    socials: "",
  });

  const [order, setOrder] = useState<TNewOrder>({
    isbn: 0,
    title: "",
    url: "",
    state: "",
    comment: "",
  });

  const [orders, setOrders] = useState<TNewOrder[]>([]);

  const handleCostumer = (e: any) => {
    setCostumer({ ...costumer, [e.target.name]: e.target.value });
  };

  const handleChangeState = (e: any) => {
    setOrder({ ...order, state: e.target.value });
  };

  const changeNotice = (e: any) => {
    setOrder({ ...order, notice: e.target.value });

  }

  return (
    <>
      {/* Contenedor del fondo oscuro */}
      <div className={styles.overlay}></div>

      {/* Contenedor principal del popup */}
      <form className={styles.popupContainer} onSubmit={(e) => e.preventDefault()}>
        <button className={styles.closeBtn} onClick={() => setCreateForm()}>
          X
        </button>
        {/* Contenido del popup */}
        <label htmlFor="client">Cliente</label>
        <input type="text" />
        <label htmlFor="">ISBN</label>
        <input type="number" />
        <label htmlFor="">Titulo</label>
        <input type="text" />
        <label htmlFor="">URL</label>
        <input type="text" />
        <label htmlFor="">Estado</label>
        <select
          value={order.state}
          onChange={(e) => handleChangeState(e)}
          className={styles.stateSelect}
        >
          {Object.keys(stateOrderObject).map((key) => (
            <option key={key} value={key}>
              {stateOrderObject[key as keyof typeof stateOrderObject]}
            </option>
          ))}
        </select>
        <label htmlFor="">Comentario</label>
        <input type="text" />
        <label htmlFor="">Aviso</label>
        <select
          value={order.notice}
          onChange={(e) => changeNotice(e)}
          className={styles.noticeSelect}
        >
          {Object.keys(noticesObject).map((key) => (
            <option key={key} value={key}>
              {noticesObject[key as keyof typeof noticesObject]}
            </option>
          ))}
        </select>
        <button type="button">Agregar al pedido</button>
        {orders && orders.map((order, index) => (
          <div key={index}>
            {order.title}
            {order.isbn}
            {order.url}
            {order.state}
            {order.comment}
            <button type="button">borrar</button>
          </div>
        ))}
        <button type="submit">Guardar</button>
      </form>
    </>
  );
}
