import CallToAction from "../organisms/CallToAction"
import Specials from "../organisms/Specials"
import CustomersSay from "../organisms/CustomersSay"
import Chicago from "../organisms/Chicago"

function HomePage() {
    return(
        <main>
            <CallToAction/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </main>
    )
}

export default HomePage;