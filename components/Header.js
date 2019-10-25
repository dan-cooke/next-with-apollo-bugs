import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <Link href='/'>
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>
    <Link href='/client-only'>
      <a className={pathname === '/client-only' ? 'is-active' : ''}>
        Client-Only
      </a>
    </Link>
    <Link href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
    <Link href='/offenses'>
      <a className={pathname === '/offenses' ? 'is-active' : ''}>Offenses</a>
    </Link>
    <Link href='/offenses/1' shallow>
      <a className={pathname === '/offenses' ? 'is-active' : ''}>Offense 1</a>
    </Link>
    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
)

export default withRouter(Header)
