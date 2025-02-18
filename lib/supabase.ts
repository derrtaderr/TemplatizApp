import { createClient } from '@supabase/supabase-js'

// During build time, these values might be undefined
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Supabase URL:', supabaseUrl);
console.log('Has Anon Key:', !!supabaseAnonKey);

// Only create the client if we're in a browser environment or if we have the required values
const shouldInitialize = typeof window !== 'undefined' || (supabaseUrl && supabaseAnonKey)

export const supabase = shouldInitialize && supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null 