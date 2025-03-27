export function TwitterFollowCard({userName, children, isFollowing}) {
    return(
        <article className='tw-followCard'>
            <header>
                <img src={`https://unavatar.io/${userName}`} alt="avatar" />
            </header>
            <div className='content'>
                <strong>{children}</strong>
                <span>@{userName}</span>
            </div>
            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
}