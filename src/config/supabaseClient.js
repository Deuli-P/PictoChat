import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://jitilyzusmsipqdojxdn.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdGlseXp1c21zaXBxZG9qeGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0Mzk0NDEsImV4cCI6MjAzNDAxNTQ0MX0.-5gCoIC4flOsmkjTSzHMPDiF0PoULHsk-6DbsBVoF9c"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;