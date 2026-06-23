import { useEffect, useRef, useState } from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import TechSupport from './pages/TechSupport.jsx'
import DataAnalysis from './pages/DataAnalysis.jsx'
import Hospitality from './pages/Hospitality.jsx'
import ContentCreation from './pages/ContentCreation.jsx'
import Contact from './pages/Contact.jsx'
import { siteMetadata } from './data/siteMetadata.js'

const pages = {
  'tech-support': TechSupport,
  'data-analysis': DataAnalysis,
  hospitality: Hospitality,
  'content-creation': ContentCreation,
  contact: Contact,
}

const sectionAnchors = new Set(['paths', 'featured-proof', 'building', 'main-content'])

function pageFromHash() {
  const page = window.location.hash.replace(/^#\/?/, '').split('/')[0]
  return pages[page] ? page : 'home'
}

function App() {
  const [activePage, setActivePage] = useState(pageFromHash)
  const [menuOpen, setMenuOpen] = useState(false)
  const hasMounted = useRef(false)

  useEffect(() => {
    const handleHashChange = () => {
      const anchorId = window.location.hash.slice(1)

      setActivePage(pageFromHash())
      setMenuOpen(false)

      if (sectionAnchors.has(anchorId)) {
        window.setTimeout(() => {
          const target = document.getElementById(anchorId)
          const headerOffset = document.querySelector('.site-header')?.offsetHeight ?? 0

          if (target) {
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY - headerOffset,
              behavior: 'smooth',
            })
          }
        }, 0)
        return
      }

      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const metadata = siteMetadata[activePage] || siteMetadata.home
    document.title = metadata.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', metadata.description)

    if (hasMounted.current) {
      window.requestAnimationFrame(() => document.getElementById('main-content')?.focus())
    } else {
      hasMounted.current = true
    }
  }, [activePage])

  const Page = pages[activePage] || Home

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header
        activePage={activePage}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />
      <Page />
      <Footer />
    </div>
  )
}

export default App
