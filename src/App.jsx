import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage"
import CoachesPage from "./pages/coachesPage/CoachesPage"
import SchedulePage from "./pages/SchedulePage/SchedulePage"
import ContactsPage from "./pages/ContactsPage/ContactsPage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/fitnessHouse" element={<MainPage/>}/>
      <Route path="/fitnessHouse/subscription" element={<SubscriptionPage/>}/>
      <Route path="/fitnessHouse/coaches" element={<CoachesPage/>}/>
      <Route path="/fitnessHouse/schedule" element={<SchedulePage/>}/>
      <Route path="/fitnessHouse/contacts" element={<ContactsPage/>}/>
    </Routes>
    </>
  )
}

export default App
