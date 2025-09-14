import { useState, useEffect } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  const timezones = [
    { city: 'New York', timezone: 'America/New_York', flag: '🇺🇸' },
    { city: 'London', timezone: 'Europe/London', flag: '🇬🇧' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', flag: '🇯🇵' },
    { city: 'Sydney', timezone: 'Australia/Sydney', flag: '🇦🇺' },
    { city: 'Paris', timezone: 'Europe/Paris', flag: '🇫🇷' },
    { city: 'Dubai', timezone: 'Asia/Dubai', flag: '🇦🇪' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (timezone) => {
    return currentTime.toLocaleString('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  const formatDate = (timezone) => {
    return currentTime.toLocaleDateString('en-US', {
      timeZone: timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          🌍 World Clock
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timezones.map((tz) => (
            <div key={tz.city} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                  <span className="text-3xl">{tz.flag}</span>
                  {tz.city}
                </h2>
              </div>

              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-green-400 mb-2">
                  {formatTime(tz.timezone)}
                </div>
                <div className="text-sm text-white/70">
                  {formatDate(tz.timezone)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Updates every second • Built with React + Vite + Tailwind CSS ⚡
          </p>
        </div>
      </div>
    </div>
  )
}

export default App