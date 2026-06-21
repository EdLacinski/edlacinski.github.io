function NavLink({ href, label, active, onNavigate }) {
  return (
    <a
      href={href}
      className={active ? 'active' : ''}
      aria-current={active ? 'page' : undefined}
      onClick={onNavigate}
    >
      {label}
    </a>
  )
}

export default NavLink
