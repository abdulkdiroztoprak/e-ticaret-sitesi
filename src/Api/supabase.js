import { createClient } from "@supabase/supabase-js";

// Çevre değişkenlerinden URL ve API Key'i alıyoruz
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Eğer URL veya Key eksikse hata verelim:
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL veya API Key tanımlanmamış!");
}

//Supabase istemcisini oluştur
export const supabase = createClient(supabaseUrl, supabaseKey);
