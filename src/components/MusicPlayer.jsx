import { useEffect, useRef, useState } from 'react'
import { CONFIG } from '../data/config.js'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0.45)
  const [open, setOpen] = useState(false)
  const [missing, setMissing] = useState(false)

  const [src, setSrc] = useState(CONFIG.ourSongSrc)

  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    el.volume = muted ? 0 : volume
  }, [volume, muted])

  useEffect(() => {
    const el = audioRef.current
    if (!el || src !== CONFIG.ourSongFallback) return
    el.load()
  }, [src])

  const onAudioError = () => {
    if (src !== CONFIG.ourSongFallback) {
      setSrc(CONFIG.ourSongFallback)
      return
    }
    setMissing(true)
  }

  const toggle = async () => {
    const el = audioRef.current
    if (!el || missing) return
    try {
      if (playing) {
        el.pause()
        setPlaying(false)
      } else {
        await el.play()
        setPlaying(true)
      }
    } catch {
      setPlaying(false)
    }
  }

  return (
    <div className="fixed z-40 top-[4.75rem] right-2 sm:top-auto sm:bottom-5 sm:left-5 sm:right-auto">
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="none"
        onError={onAudioError}
      />
      <div className="music-chip rounded-sm px-2 py-1.5 sm:px-3 sm:py-2 min-w-0 sm:min-w-[148px]">
        <button
          type="button"
          className="font-script text-lg text-ink flex items-center gap-2"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="song-controls"
          aria-label={CONFIG.ourSongTitle}
        >
          <span aria-hidden>♫</span>
          <span className="hidden sm:inline">{CONFIG.ourSongTitle}</span>
        </button>
        {open ? (
          <div id="song-controls" className="mt-2 flex flex-col gap-2">
            <div className="flex gap-2">
              <button type="button" className="hand-btn text-base px-3 py-1" onClick={toggle} disabled={missing}>
                {playing ? 'Pause' : 'Play'}
              </button>
              <button
                type="button"
                className="hand-btn text-base px-3 py-1"
                onClick={() => setMuted((m) => !m)}
                aria-pressed={muted}
              >
                {muted ? 'Unmute' : 'Mute'}
              </button>
            </div>
            <label className="flex items-center gap-2 text-xs text-brown">
              Volume
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-24 accent-[#B85C70]"
              />
            </label>
            {missing ? (
              <p className="font-script text-sm text-brown/80 leading-tight">
                Add your song at assets/music/our-song.mp3
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}
