import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("Locations").select();
    console.log(data);
  return {
    locations: data ?? [],
  };
}