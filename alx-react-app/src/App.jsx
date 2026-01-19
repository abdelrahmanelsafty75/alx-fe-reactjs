import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import UserProfile from './components/UserProfile.jsx'

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserProfile name="Abdelrahman" age={20} bio="A software developer from Egypt." />
      <Footer />
    </>
  )
}

export default App
