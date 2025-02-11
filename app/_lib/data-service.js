import { supabase } from "./supabase";

export async function getMeals() {
  const { data, error } = await supabase.from("meals").select("*");

  if (error) console.log(error);

  return data;
}
