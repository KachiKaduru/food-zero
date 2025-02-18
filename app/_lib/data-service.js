import { supabase } from "./supabase";

export async function getMeals() {
  const { data, error } = await supabase.from("meals").select("*").order("id");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function getMealsByCategory(category) {
  const { data, error } = await supabase.from("meals").select("*").eq("category", category);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}
