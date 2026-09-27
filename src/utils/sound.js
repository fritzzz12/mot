let ctx

function getCtx() {
  if (typeof window === 'undefined') return null
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC) return null
  if (!ctx) ctx = new AC()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

/** Soft paper-rustle for page turns. Call only after a user gesture. */
export function playPaperSound(volume = 0.07) {
  const audio = getCtx()
  if (!audio) return
  const duration = 0.16
  const sampleRate = audio.sampleRate
  const length = Math.floor(sampleRate * duration)
  const buffer = audio.createBuffer(1, length, sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < length; i += 1) {
    const t = i / length
    data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 6) * (0.4 + 0.6 * Math.random())
  }
  const source = audio.createBufferSource()
  source.buffer = buffer
  const filter = audio.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.value = 1400
  filter.Q.value = 0.7
  const gain = audio.createGain()
  gain.gain.value = volume
  source.connect(filter)
  filter.connect(gain)
  gain.connect(audio.destination)
  source.start()
}

export function playPopSound(volume = 0.05) {
  const audio = getCtx()
  if (!audio) return
  const osc = audio.createOscillator()
  const gain = audio.createGain()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(620, audio.currentTime)
  osc.frequency.exponentialRampToValueAtTime(280, audio.currentTime + 0.12)
  gain.gain.setValueAtTime(volume, audio.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.14)
  osc.connect(gain)
  gain.connect(audio.destination)
  osc.start()
  osc.stop(audio.currentTime + 0.15)
}
