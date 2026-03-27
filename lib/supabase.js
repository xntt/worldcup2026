// Supabase client - Add your credentials later
// Get credentials from: https://supabase.com/dashboard

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'your-project-url'
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

// For MVP, we'll use localStorage. Replace with Supabase when ready.
export const savePrediction = (matchId, prediction, email) => {
  const predictions = JSON.parse(localStorage.getItem('predictions') || '[]')
  predictions.push({
    matchId,
    prediction,
    email,
    timestamp: new Date().toISOString()
  })
  localStorage.setItem('predictions', JSON.stringify(predictions))
  return true
}

export const getPredictions = () => {
  return JSON.parse(localStorage.getItem('predictions') || '[]')
}