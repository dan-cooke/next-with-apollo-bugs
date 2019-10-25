import { withApollo } from "../../lib/apollo";
import App from "../../components/App";
import Header from "../../components/Header";

const Offenses = () => (
    <App>
        < Header />
        <h1>Offenses Page!</h1>
    </App>
);

export default withApollo(Offenses);