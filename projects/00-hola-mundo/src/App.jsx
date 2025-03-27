import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    return (
        <div className='grid gap-s'>
            <TwitterFollowCard isFollowing={true} userName="felipe.calixtro">
                Felipe Calixtro
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} userName="reynaDigital">
                Reyna Montes
            </TwitterFollowCard>
            
            <TwitterFollowCard isFollowing={true} userName="midudev" >
                Juan Gabriel
            </TwitterFollowCard>
        </div>
    )
}