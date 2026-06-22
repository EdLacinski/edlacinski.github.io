function PageShell({ children, variant = 'default' }) {
  return (
    <main id="main-content" className={variant === 'career' ? 'career-page' : undefined} tabIndex="-1">
      {children}
    </main>
  )
}

export default PageShell
