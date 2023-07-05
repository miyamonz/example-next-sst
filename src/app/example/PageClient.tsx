"use client";
import { useState } from "react";
import { addItemAndRevalidate, addItem, revalidate } from "./actions";

export default function PageClient({
  items: initialItems,
}: {
  items: unknown[];
}) {
  const [items, setItems] = useState(initialItems);
  console.log("initialItems", initialItems);
  console.log("items", items);
  return (
    <main className="">
      hello example from client component
      <ul>
        {items.map((item, i) => (
          <li key={i}>{JSON.stringify(item)}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        server action
        <button
          onClick={() => {
            addItemAndRevalidate({ hoge: new Date() });
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          add item and revalidate
        </button>
        <button
          onClick={() => {
            addItem({ hoge: new Date() });
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          add item
        </button>
        <button
          onClick={() => revalidate()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          revalidate
        </button>
      </div>
      <div className="flex gap-2">
        via route handler
        <button
          onClick={() => {
            fetch("/example/api", {
              method: "POST",
              body: JSON.stringify({ hoge: new Date() }),
            });
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          add item
        </button>
        <button
          onClick={async () => {
            const res = await fetch("/example/api");
            const json = await res.json();
            setItems(json);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          fetch items
        </button>
        <button
          onClick={() => {
            fetch("/example/api/revalidate");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          revalidate
        </button>
      </div>
    </main>
  );
}
