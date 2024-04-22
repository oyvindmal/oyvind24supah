import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("Locations").select();

  return {
    locations: data ?? [],
  };
}