import Link from 'next/link'
import Router, { withRouter } from 'next/router'
const Header = ({ router: { pathname, push } }) => {

  return (
  <header>

    <Link href='/'shallow> 
      <a className={pathname === '/page/1' ? 'is-active' : ''}>Start here / </a>
    </Link>
    {/* This syntax is invalid, but it is required - as the id is dynamic*/}

    <input type="button" value="click me to Route with Router" onClick={()=> {
      
      /**
       * USING Router.push, explicitly setting both `href` and `as` with a shallow route
       */
      // This is seemingly the only way to get base path to work with basePath / assetPrefix
      // With basePath this works until you use the back/forward buttons in the browser
      // With assetPrefix this causes a hard refresh - clearing the apollo client cache which we cannot have.
      // Example scenario
      // Uncomment Router.push below
      // 1. Start at /
      // 2. Click "click me to Route with Router"
      // 3. Note the URL is as expected => /test/prefix/page/1
      // 4. Press the back button 
      // 5. Note this works as expected
      // 6. Press the forward button
      // 7. You get Error: The provided `as` value (/test/prefix/page/1) is incompatible with the `href` value (/page/[id]).
      push(`/page/[id]`, '/page/1', { shallow: true});

      
      /**
       * Using Router.push , with just href (Same as 'Route with Link')
       */
      // This one confuses me, as it seems to highlight a core difference between using the Link component and push
      // HREF here is exactly the same as "Route with Link", but it produces a different route
      // Example scenario
      // Uncomment push('page/1') below
      // 1. Start at /
      // 2. Click "click me to Route with Router"
      // 3. Error -> Route is `/test/prefixpage/1

      // It seems to leave out the `/` before page 1 - which does not happen when using Link
      // push('page/1')


    }}/>
    {/* Does not break back/forward but Causes a hard refresh of the page */}
    <Link href='page/1' shallow> 
      <a className={pathname === '/page/1' ? 'is-active' : ''}>Route with Link</a>
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
