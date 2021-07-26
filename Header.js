import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const[{ user }] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon className="header__leftsearchicon"/>
                <input 
                className="header__search"
                placeholder="Search for artists, songs or albums"
                type="text"
                />
            </div>

            <div className="header__right">
                <Avatar 
                src={user?.images[0]?.url}
                alt="AG"
                />
            </div>
        </div>
    )
}

export default Header
