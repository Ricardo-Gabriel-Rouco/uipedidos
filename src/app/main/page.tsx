"use client"
import TopMenu from "@/components/TopMenu/TopMenu";
import TableOrder from "@/components/TableOrder/TableOrder";
import OrderForm from "@/components/OrderForm/OrderForm";
import { orderStore } from "@/Store/orderSlices";



export default function MainDisplay() {
  const {createForm} = orderStore();
  
  return (
    <>
      <TopMenu/>
      {createForm && <OrderForm/>}
      <TableOrder/>
    </>
  );
}
