import { supabase } from "$lib/supabaseClient";

export async function load({params}) {
  const { data } = await supabase.from("Photos").select().eq('LocationId', params.slug);
    console.log(data);
  return {
    photos: data ?? [],
  };
}