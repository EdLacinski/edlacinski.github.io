import NavLink from '../navigation/NavLink.jsx'
import { navigationItems } from '../../data/navigation.js'

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
          {navigationItems.map((item) => (
            <NavLink key={item.id} {...item} active={activePage === item.id} onNavigate={onNavigate} />
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
