import { withApollo } from "../lib/apollo";
import { useRouter } from 'next/router';
import App from "../components/App";
import Header from "../components/Header";

const Test = (props) => {
    const router = useRouter();
    console.log(props);
    return (
        <App>
        < Header />
        <h2>TEST ID: {router.query.id}</h2>
        </App>
    )
    
}

Test.getInitialProps = async () => {
    console.log('page/[id] getInitialProps called');
    return {
        test: 123,
    }
}
export default withApollo(Test);