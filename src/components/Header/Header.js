import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <IconButton>
                <PersonIcon fontSize="large" className={styles.icon} />
            </IconButton>
            <IconButton>
                <img src="https://logowiki.net/uploads/logo/t/tinder-2.svg"
                    alt="tinder-logo"
                    className={styles.logo} />
            </IconButton>
            <IconButton>
                <ForumIcon fontSize="large" className={styles.icon} />
            </IconButton>
        </div>
    )
}

export default Header
