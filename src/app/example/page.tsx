import PageClient from "./PageClient";
import { getItems } from "./actions";

export default async function Page() {
  const items = await getItems();
  const key = JSON.stringify(items);
  console.log("key", key);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      hello example from RSC
      <PageClient key={key} items={items} />
    </main>
  );
}
