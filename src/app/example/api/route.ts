import { NextResponse } from "next/server";
import { addItem, getItems } from "../actions";
import { revalidatePath } from "next/cache";

export const GET = async (req: Request) => {
  const items = await getItems();
  return NextResponse.json(items);
};

export async function POST(req: Request) {
  const data = await req.json();
  addItem(data);
  revalidatePath("/example");
  return NextResponse.json({ message: "ok" });
}
