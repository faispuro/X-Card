import {useState} from 'react' 
export function TwitterFollowCard({userName, name,initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const [isHovered, setIsHovered] = useState(false);
    const text = isFollowing ? (isHovered ? 'Dejar de seguir' : 'Siguiendo') : 'Seguir';
    const buttonClaseName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    
    const handleClick=()=>{
        setIsFollowing(!isFollowing);
        setIsHovered(false);
    };
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const imageSrc=`https://unavatar.io/${userName}`
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="avatar" src={imageSrc}/>
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClaseName} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {text}
                </button>
            </aside>
        </article>
    
    )
}