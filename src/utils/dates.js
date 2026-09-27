export function monthsBetween(start, now = new Date()) {
  const a = start instanceof Date ? start : new Date(start)
  const b = now instanceof Date ? now : new Date(now)
  let months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth())
  if (b.getDate() < a.getDate()) months -= 1
  return Math.max(0, months)
}

export function diffFrom(startDate, now = new Date()) {
  const start = new Date(startDate)
  const end = now instanceof Date ? now : new Date(now)
  const ms = Math.max(0, end.getTime() - start.getTime())
  const minutes = Math.floor(ms / 60000)
  const hours = Math.floor(ms / 3600000)
  const days = Math.floor(ms / 86400000)
  const totalMonths = monthsBetween(start, end)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  return { years, months, totalMonths, days, hours, minutes, seconds: Math.floor(ms / 1000) }
}

export function formatNumber(n) {
  return new Intl.NumberFormat('en-US').format(n)
}
