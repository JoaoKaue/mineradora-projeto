import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dwkggzliuscyardcxbqm.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3a2dnemxpdXNjeWFyZGN4YnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwODMxNzUsImV4cCI6MjA5NzY1OTE3NX0.CfSeqz2EeLqmBqV3C_5bZTi06zyUwQHw1biV_Y480kE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
