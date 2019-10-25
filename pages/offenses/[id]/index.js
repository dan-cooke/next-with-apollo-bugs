import { withApollo } from "../../../lib/apollo";
import { useRouter } from 'next/router';
import App from "../../../components/App";
import Header from "../../../components/Header";

const OffenseDetails = () => {
    const router = useRouter();

    return (
        <App>
        < Header />
        <h2>Offense ID: {router.query.id}</h2>
        </App>
    )
    
}
export default withApollo(OffenseDetails);