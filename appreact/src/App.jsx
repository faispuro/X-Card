import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'
export function App() {
    return (
        <section className="App">
        <TwitterFollowCard
        isFollowing 
        userName="faispuro" 
        name="Francisco Aispuro"/> 
        </section>
    )
}
