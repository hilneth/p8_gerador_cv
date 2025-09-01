import luaLogo from '../assets/Lua.png'
import '../styles/Header.css'

export default function Header() {
  return (
    <header>
      <div className='brand'>
        <img className='logo' src={luaLogo} alt='web site logo'></img>
        <p>LUA CV</p>
      </div>
      <nav>
        <h3>Information</h3>
        <ul>
          <li>Personal</li>
          <li>Skill</li>
          <li>Experience</li>
        </ul>
      </nav>
    </header>
  )
}