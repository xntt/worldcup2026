import Link from 'next/link'

// 2026世界杯小组赛赛程 (示例数据)
const matches = [
  {
    id: 1,
    date: '2026-06-11',
    time: '17:00',
    team1: { name: 'Canada', code: 'CAN', flag: '🇨🇦' },
    team2: { name: 'Morocco', code: 'MAR', flag: '🇲🇦' },
    venue: 'BMO Field, Toronto',
    stream: 'Fox Sports, fuboTV'
  },
  {
    id: 2,
    date: '2026-06-11',
    time: '20:00',
    team1: { name: 'USA', code: 'USA', flag: '🇺🇸' },
    team2: { name: 'Wales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
    venue: 'SoFi Stadium, LA',
    stream: 'Fox Sports, ESPN+'
  },
  {
    id: 3,
    date: '2026-06-12',
    time: '17:00',
    team1: { name: 'Argentina', code: 'ARG', flag: '🇦🇷' },
    team2: { name: 'Mexico', code: 'MEX', flag: '🇲🇽' },
    venue: 'MetLife Stadium, NJ',
    stream: 'Fox, TelMex'
  },
  {
    id: 4,
    date: '2026-06-12',
    time: '20:00',
    team1: { name: 'Brazil', code: 'BRA', flag: '🇧🇷' },
    team2: { name: 'Colombia', code: 'COL', flag: '🇨🇴' },
    venue: 'Rose Bowl, Pasadena',
    stream: 'Fox Sports, Globo'
  },
  {
    id: 5,
    date: '2026-06-13',
    time: '18:00',
    team1: { name: 'Germany', code: 'GER', flag: '🇩🇪' },
    team2: { name: 'Spain', code: 'ESP', flag: '🇪🇸' },
    venue: 'AT&T Stadium, Dallas',
    stream: 'Fox Sports, ITV'
  },
  {
    id: 6,
    date: '2026-06-13',
    time: '21:00',
    team1: { name: 'France', code: 'FRA', flag: '🇫🇷' },
    team2: { name: 'England', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    venue: "Levi's Stadium, SF",
    stream: 'BBC, TF1'
  },
]

const features = [
  {
    icon: '📅',
    title: 'Smart Schedule',
    desc: 'Auto-detect your timezone & find where to watch'
  },
  {
    icon: '🎯',
    title: 'Free Predictions',
    predict: 'win official jerseys & prizes'
  },
  {
    icon: '💰',
    title: 'Best Odds',
    desc: 'Compare odds & get exclusive bonuses'
  },
  {
    icon: '👕',
    title: 'Fan Shop',
    desc: 'Limited edition World Cup gear'
  },
]

const topPlayers = [
  { name: 'Lionel Messi', team: 'Argentina', points: 2450 },
  { name: 'Kylian Mbappé', team: 'France', points: 2380 },
  { name: 'Erling Haaland', team: 'Norway', points: 2150 },
  { name: 'Mohamed Salah', team: 'Egypt', points: 1890 },
  { name: 'Harry Kane', team: 'England', points: 1750 },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-accent">2026</span> World Cup
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Ultimate Fan Hub - Predict, Watch, Win!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#schedule" className="px-8 py-3 bg-secondary rounded-full font-bold hover:scale-105 transition">
              View Schedule 📅
            </a>
            <Link href="/predict" className="px-8 py-3 bg-primary border border-accent rounded-full font-bold hover:bg-accent hover:text-black transition">
              Predict & Win 🎯
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass rounded-xl p-6 text-center hover:scale-105 transition">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-accent">📅</span> Match Schedule
          </h2>
          <div className="grid gap-4">
            {matches.map((match) => (
              <div key={match.id} className="glass rounded-xl p-6 match-card transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{match.team1.flag}</span>
                    <span className="text-2xl font-bold">VS</span>
                    <span className="text-4xl">{match.team2.flag}</span>
                    <div className="ml-4">
                      <div className="font-bold text-lg">{match.team1.name} vs {match.team2.name}</div>
                      <div className="text-gray-400 text-sm">{match.venue}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-accent font-bold">{match.date} {match.time}</div>
                    <div className="text-sm text-gray-400">🖥️ {match.stream}</div>
                    <button className="mt-2 px-4 py-2 bg-green-600 rounded-lg text-sm hover:bg-green-500 transition">
                      📺 Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto glass rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            🏆 Top Predictors Leaderboard
          </h2>
          <div className="space-y-3">
            {topPlayers.map((p, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    i === 0 ? 'bg-yellow-500 text-black' : i === 1 ? 'bg-gray-400 text-black' : i === 2 ? 'bg-orange-700 text-white' : 'bg-white/20'
                  }`}>
                    {i + 1}
                  </span>
                  <span>{p.name}</span>
                  <span className="text-gray-400 text-sm">({p.team})</span>
                </div>
                <span className="text-accent font-bold">{p.points} pts</span>
              </div>
            ))}
          </div>
          <Link href="/predict" className="block text-center mt-6 text-accent hover:underline">
            Join the competition →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto glass rounded-2xl p-8 glow">
          <h2 className="text-3xl font-bold mb-4">Ready to Predict?</h2>
          <p className="text-gray-300 mb-6">
            Join thousands of fans predicting match outcomes. Win official jerseys, VIP tickets & more!
          </p>
          <Link href="/predict" className="inline-block px-10 py-4 bg-secondary text-white font-bold rounded-full hover:scale-105 transition">
            Start Predicting Now 🎯
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500 text-sm">
        <p>© 2026 World Cup Fan Hub. All rights reserved.</p>
        <p className="mt-2">This is a fan site. Gamble responsibly 18+</p>
      </footer>
    </main>
  )
}