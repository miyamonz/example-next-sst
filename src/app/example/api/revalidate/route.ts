import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const GET = async () => {
  revalidatePath("/example");
  console.log("revalidatePath");
  return NextResponse.json({ message: "ok" });
};
