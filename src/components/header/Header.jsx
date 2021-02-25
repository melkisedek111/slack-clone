import React from 'react'
import {HeaderAvatar, HeaderLeft, HeaderContainer, HeaderSearch, HeaderRight} from './header.styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar 
                    onClick={() => auth.signOut()}
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search PAPAFAM" />
            </HeaderSearch>
            <HeaderRight >
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;
