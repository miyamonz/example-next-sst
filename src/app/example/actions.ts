"use server";

import { revalidatePath } from "next/cache";

// 永続化層
const cache: unknown[] = [];
export async function addItem(data: unknown) {
  cache.push(data);
  console.log("item added", data);
}

export async function getItems(slow = false) {
  // Simulate a database access
  if (slow) await new Promise((resolve) => setTimeout(resolve, 500));
  return cache;
}

// revalidate
export async function revalidate() {
  revalidatePath("/example");
}

export async function addItemAndRevalidate(data: unknown) {
  await addItem(data);
  await revalidate();
}
