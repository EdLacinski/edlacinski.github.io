import { useEffect, useState } from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import TechSupport from './pages/TechSupport.jsx'
import DataAnalysis from './pages/DataAnalysis.jsx'
import Hospitality from './pages/Hospitality.jsx'
import ContentCreation from './pages/ContentCreation.jsx'

const pages = {
  'tech-support': TechSupport,
  'data-analysis': DataAnalysis,
  hospitality: Hospitality,
  'content-creation': ContentCreation,
}

function pageFromHash() {
  const page = window.location.hash.replace(/^#\/?/, '').split('/')[0]
  return pages[page] ? page : 'home'
}

function App() {
  const [activePage, setActivePage] = useState(pageFromHash)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(pageFromHash())
      setMenuOpen(false)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

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
