'use client'

import { useState } from 'react'
import Link from 'next/link'

const predictMatches = [
  {
    id: 1,
    team1: { name: 'Canada', code: 'CAN', flag: '🇨🇦' },
    team2: { name: 'Morocco', code: 'MAR', flag: '🇲🇦' },
    date: '2026-06-11',
    time: '17:00',
    odds: { win1: 2.1, draw: 3.2, win2: 3.5 }
  },
  {
    id: 2,
    team1: { name: 'USA', code: 'USA', flag: '🇺🇸' },
    team2: { name: 'Wales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
    date: '2026-06-11',
    time: '20:00',
    odds: { win1: 1.8, draw: 3.4, win2: 4.2 }
  },
  {
    id: 3,
    team1: { name: 'Argentina', code: 'ARG', flag: '🇦🇷' },
    team2: { name: 'Mexico', code: 'MEX', flag: '🇲🇽' },
    date: '2026-06-12',
    time: '17:00',
    odds: { win1: 1.5, draw: 4.0, win2: 6.5 }
  },
]

const bettingSites = [
  { name: 'Bet365', odds: 1.95, link: '#', bonus: '$50 Free' },
  { name: 'Pinnacle', odds: 2.05, link: '#', bonus: 'Risk-Free' },
  { name: 'DraftKings', odds: 1.90, link: '#', bonus: 'Deposit Match' },
]

export default function Predict() {
  const [predictions, setPredictions] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handlePredict = (matchId, result) => {
    setPredictions({ ...predictions, [matchId]: result })
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Link href="/" className="text-accent hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">
            🎯 Predict & <span className="text-accent">Win!</span>
          </h1>
          <p className="text-gray-400">
            Predict match outcomes and earn points. Top predictors win official jerseys!
          </p>
        </div>

        {/* Match Predictions */}
        <div className="space-y-6 mb-12">
          {predictMatches.map((match) => (
            <div key={match.id} className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{match.team1.flag}</span>
                  <span className="text-2xl font-bold">VS</span>
                  <span className="text-4xl">{match.team2.flag}</span>
                  <div className="ml-4">
                    <div className="font-bold">{match.team1.name} vs {match.team2.name}</div>
                    <div className="text-gray-400 text-sm">{match.date} {match.time}</div>
                  </div>
                </div>
              </div>

              {/* Prediction Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handlePredict(match.id, match.team1.code)}
                  className={`flex-1 py-3 rounded-lg font-bold transition ${
                    predictions[match.id] === match.team1.code
                      ? 'bg-green-600 text-white'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {match.team1.name} Win
                </button>
                <button
                  onClick={() => handlePredict(match.id, 'draw')}
                  className={`flex-1 py-3 rounded-lg font-bold transition ${
                    predictions[match.id] === 'draw'
                      ? 'bg-yellow-600 text-white'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Draw
                </button>
                <button
                  onClick={() => handlePredict(match.id, match.team2.code)}
                  className={`flex-1 py-3 rounded-lg font-bold transition ${
                    predictions[match.id] === match.team2.code
                      ? 'bg-green-600 text-white'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {match.team2.name} Win
                </button>
              </div>

              {/* Betting Odds (after prediction) */}
              {predictions[match.id] && (
                <div className="mt-4 p-4 bg-green-900/30 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-bold mb-2">
                    🎉 Your prediction: {predictions[match.id] === 'draw' ? 'Draw' : 
                      predictions[match.id] === match.team1.code ? match.team1.name : match.team2.name}
                  </p>
                  <p className="text-sm text-gray-400 mb-3">
                    Current odds at top betting sites:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {bettingSites.map((site, i) => (
                      <a key={i} href={site.link} className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                        <div className="font-bold">{site.name}</div>
                        <div className="text-accent">Odds: {site.odds}x</div>
                        <div className="text-green-400 text-sm">{site.bonus}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(predictions).length === 0}
            className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Predictions 🎯
          </button>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mt-8 p-6 bg-green-900/30 border border-green-500 rounded-xl text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2">Predictions Submitted!</h3>
            <p className="text-gray-400 mb-4">
              You earned 100 points! Check back after matches to see how you did.
            </p>
            <Link href="/" className="text-accent hover:underline">
              Back to Home →
            </Link>
          </div>
        )}

        {/* Prize Info */}
        <div className="mt-12 glass rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">🏆 Prizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">👕</div>
              <div className="font-bold">1st Place</div>
              <div className="text-accent">Official Jersey</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🎫</div>
              <div className="font-bold">2nd Place</div>
              <div className="text-accent">VIP Match Tickets</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🎁</div>
              <div className="font-bold">3rd Place</div>
              <div className="text-accent">$100 Gift Card</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}