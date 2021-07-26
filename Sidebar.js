import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const[{ playlists }] = useDataLayerValue();

    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <img 
                className="sidebar__image"
                src="https://www.benlcollins.com/wp-content/uploads/2016/01/spotify.png" 
                alt="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            />
            <h3 className="sidebar__clonealert">
                Spotify Clone by <a href="https://www.linkedin.com/in/ayush-gupta-89b116214/">Ayush Gupta</a>
            </h3>
            </div>
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

            <br/>
            <strong classNa  me="sidebar__title">PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar