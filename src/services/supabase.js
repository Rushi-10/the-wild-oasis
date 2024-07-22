
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl="https://zsxvezfrouhscyionern.supabase.co";
// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl,
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzeHZlemZyb3Voc2N5aW9uZXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0MDg1NDYsImV4cCI6MjAzNjk4NDU0Nn0.OdiH66uwCcEVaELT29J9A2cReQZe1gB2xiPQY2tc6U0')
export default supabase;