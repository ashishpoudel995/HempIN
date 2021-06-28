import React from 'react';

const TeamInfo=(props)=>{
    const Team=props.Team;
    return( 
        Team.map((mylist)=>{
            return(  
                    <div class="card" style={{marginLeft:'9%'}}>
                    <div class="image">
                        <img src={mylist.Photo}/>
                    </div>
                    <div class="content">
                        <a class="header">{mylist.Name}</a>
                        <div class="meta">
                        <span class="date">{mylist.Designation}</span>
                        </div>
                        <div class="description" style={{textAlign:'justify'}}>
                        {mylist.Bio}
                        </div>
                    </div>
                    <div class="extra content">
                        <a>
                        <i class="calendar alternate outline icon"></i>
                            Joined 2021
                        </a>
                    </div>
                    </div>
            )
        })
    )    
}

const OurTeam=(props)=>{
    return(
        <div style={{marginTop:'2%'}}>
            <div className="ui link cards"> 
                {TeamInfo(props)}
            </div>
        </div>
    )
}

export default OurTeam;