export default function ScrapbookPage({
  children,
  className = '',
  pageLabel,
}) {
  return (
    <div className={className} role="region" aria-label={pageLabel}>
      {children}
    </div>
  )
}
