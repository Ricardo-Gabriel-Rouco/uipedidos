import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Order from "./Order/Order";

const testArray = [
  {
    id: 1,
    isbn: 123456,
    title: "Book 1",
    url: "https://example.com/book1",
    state: "Pendiente",
    notice: "None",
    comment: "Good book",
    customer: "John Doe",
  },
  {
    id: 2,
    isbn: 789012,
    title: "Book 2",
    url: "https://example.com/book2",
    state: "Embolsado",
    notice: "Delayed",
    comment: "Interesting read",
    customer: "Alice Smith",
  },
  {
    id: 3,
    isbn: 789012,
    title: "Book 3",
    state: "Pending",
    comment: "Waiting for confirmation",
    customer: "Bob Johnson",
  },
  {
    id: 4,
    isbn: 345678,
    title: "Book 4",
    url: "https://example.com/book4",
    state: "Delivered",
    notice: "On time",
    comment: "Excellent service",
    customer: "Eva Williams",
  },
  {
    id: 5,
    isbn: 345678,
    title: "Book 5",
    state: "Processing",
    notice: "Out of stock",
    comment: "Will be shipped soon",
    customer: "Charlie Brown",
  },
  {
    id: 6,
    isbn: 901234,
    title: "Book 6",
    url: "https://example.com/book6",
    state: "Cancelled",
    notice: "Cancelled by user",
    comment: "Order cancelled",
    customer: "Grace Davis",
  },
  {
    id: 7,
    isbn: 345678,
    title: "Book 7",
    state: "Shipped",
    comment: "En route to destination",
    customer: "Frank Wilson",
  },
  {
    id: 8,
    isbn: 567890,
    title: "Book 8",
    url: "https://example.com/book8",
    state: "Pending",
    notice: "None",
    comment: "Awaiting confirmation",
    customer: "Helen Miller",
  },
  {
    id: 9,
    isbn: 123987,
    title: "Book 9",
    url: "https://example.com/book9",
    state: "Delivered",
    notice: "On time",
    comment: "Satisfied customer",
    customer: "David Lee",
  },
  {
    id: 10,
    title: "Book 10",
    isbn: 567890,
    state: "Processing",
    comment: "Preparing for shipment",
    customer: "Sophie White",
  },
];

export default function TableOrder() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>State</TableHead>
          <TableHead>ISBN</TableHead>
          <TableHead>Url</TableHead>
          <TableHead>Notice</TableHead>
          <TableHead>Comment</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {testArray.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </TableBody>
    </Table>
  );
}
