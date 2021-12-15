import '../../style/menubar.css'

export default function(){
    
    
    return(<>   
            <div className="container-fluid menubar">
                <div className="flex left">
                <p className="menubar-item">Movies</p>
                <p className="menubar-item">Stream <sup>new</sup></p>
                <p className="menubar-item">Events</p>
                <p className="menubar-item">Plays</p>
                <p className="menubar-item">Sports</p>
                <p className="menubar-item">Activities</p>
                <p className="menubar-item">Buzz</p>
                </div>
                <div className="grow"></div>
                <div className="flex right">
                <p className="menubar-item">Liveshows</p>
                <p className="menubar-item">Corporate</p>
                <p className="menubar-item">Offers</p>
                <p className="menubar-item">GiftCards</p>
                
                </div>
                <div className="clear"></div>
            </div>
    </>)
}