import NavLink from '../navigation/NavLink.jsx'

const navItems = [
  { id: 'home', label: 'Home', href: '#/' },
  { id: 'tech-support', label: 'Tech Support', href: '#/tech-support' },
  { id: 'data-analysis', label: 'Data Analysis', href: '#/data-analysis' },
  { id: 'hospitality', label: 'Hospitality', href: '#/hospitality' },
  { id: 'content-creation', label: 'Content Creation', href: '#/content-creation' },
]

function Header({ activePage, menuOpen, onToggleMenu, onNavigate }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#/" onClick={onNavigate} aria-label="Eclipse Hub home">
          <span className="brand-mark" aria-hidden="true">E</span>
          <span className="brand-copy">
            <strong>Edward Lacinski</strong>
            <small>Eclipse Hub</small>
          </span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={onToggleMenu}>
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.id} {...item} active={activePage === item.id} onNavigate={onNavigate} />
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
