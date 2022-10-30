import { AppWrapper, PageWrapper } from './AppStyles'
import Bottom from './components/Bottom/Bottom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Top from './components/Top/Top'

const App = () => {
    return(
        <AppWrapper>
            <Navbar /> 
            <PageWrapper>
                <Top />
                <Bottom />
                <Footer />
            </PageWrapper>
        </AppWrapper>
    )
}

export default App;