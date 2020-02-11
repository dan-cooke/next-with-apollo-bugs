import { withApollo } from "../../../lib/apollo";
import { useRouter } from 'next/router';
import App from "../../../components/App";
import Header from "../../../components/Header";

const PageID = (props) => {
    const router = useRouter();
    console.log(props);
    

    return (
        <App>
        < Header />
        <h2>Page ID: {router.query.id}</h2>
        </App>
    )
    
}

PageID.getInitialProps = async () => {
    console.log('page/[id] getInitialProps called');
    return {
        test: 123,
    }
}
export default withApollo(PageID);