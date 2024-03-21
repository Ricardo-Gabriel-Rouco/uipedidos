"use client";
import { useState, useEffect } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { stateOrderObject, noticesObject } from "@/Utils/enumObjects";
import styles from "./Order.module.css";
export default function Order({ order }: any) {
  const [state, setState] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    setState(order.state);
    setNotice(order.notice);
  }, [order.state, order.notice]);

  const changeState = (e: any) => {
    setState(e.target.value);
  };

  const changeNotice = (e: any) => {
    setNotice(e.target.value);
  };

  return (
    <TableRow className={styles[state]}>
      <TableCell>{order.id}</TableCell>
      <TableCell>{order.customer}</TableCell>
      <TableCell>{order.title}</TableCell>
      <TableCell>
        <select
          value={state}
          onChange={(e) => changeState(e)}
          className={styles[state]}
        >
          {Object.keys(stateOrderObject).map((key) => (
            <option key={key} value={key}>
              {stateOrderObject[key as keyof typeof stateOrderObject]}
            </option>
          ))}
        </select>
      </TableCell>
      <TableCell>{order.isbn}</TableCell>
      <TableCell>
        <a href={order.url} target="_blank" rel="noopener noreferrer">
          {order.url}
        </a>
      </TableCell>
      <TableCell>
        <select
          value={notice}
          onChange={(e) => changeNotice(e)}
          className={styles.noticeSelect}
        >
          {Object.keys(noticesObject).map((key) => (
            <option key={key} value={key}>
              {noticesObject[key as keyof typeof noticesObject]}
            </option>
          ))}
        </select>
      </TableCell>
      <TableCell>{order.comment}</TableCell>
    </TableRow>
  );
}
