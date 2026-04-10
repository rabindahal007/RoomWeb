// supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hrbeyuppnfwfbwscunbr.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyYmV5dXBwbmZ3ZmJ3c2N1bmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTQ1NDQsImV4cCI6MjA5MTMzMDU0NH0.zeItpacebV9tgkZy7eWb5_yyW1doJOkUaRGsQQUvqWs"
export const supabase = createClient(supabaseUrl, supabaseKey)