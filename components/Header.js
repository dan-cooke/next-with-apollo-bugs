import Link from 'next/link'
import { withRouter } from 'next/router'
const Header = ({ router: { pathname, push } }) => {

  return (
  <header>

    <Link as='/test/prefix/' href='/'shallow> 
      <a className={pathname === '/page/1' ? 'is-active' : ''}>Start here / </a>
    </Link>
    {/* This syntax is invalid, but it is required - as the id is dynamic*/}
    <Link as='/test/prefix/page/1' href='page/1'shallow> 
      <a className={pathname === '/page/1' ? 'is-active' : ''}>This page works - but it resets cache / </a>
    </Link>
    
    <Link as="/test/prefix/page/1" href='page/1' shallow>
      <a className={pathname === '/anotherPage' ? 'is-active' : ''}>This also resets the cache /</a>
    </Link>

    <Link as="/test/prefix/page/1" href='page/[id]' shallow>
      <a className={pathname === '/anotherPage' ? 'is-active' : ''}>This does not work, check errors /</a>
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
)}

export default withRouter(Header)
