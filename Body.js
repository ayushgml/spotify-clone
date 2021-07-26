import React from 'react'
import './Body.css'
import Header from './Header.js'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow.js'
function Body({ spotify }) {
    const [{ discover_weekly }] = useDataLayerValue()
    return (
        <div className="body">
            <Header />
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt=''/>
                <div className="body__infoText">
                    <p>{discover_weekly?.description}</p>
                    <h2>Discover Weekly</h2>
                    <strong>PLAYLIST</strong>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__playicon" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map((item)=>(
                    <SongRow track={item.track}/>
                )
                )}
            </div>
        </div>
    )
}

export default Body
