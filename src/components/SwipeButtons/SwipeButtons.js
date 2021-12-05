import React from 'react';
import styles from './SwipeButtons.module.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
function SwipeButtons() {

   
    return (
        <div className={styles.swipeButtons}>
            <IconButton className={styles.repeatIcon}>
                <ReplayIcon fontSize="large" className={styles.icon}/>
            </IconButton>
            <IconButton className={styles.leftIcon}>
                <CloseIcon fontSize="large" className={styles.icon}/>
            </IconButton>
            <IconButton className={styles.starIcon}>
                <StarRateIcon fontSize="large" className={styles.icon}/>
            </IconButton>
            <IconButton className={styles.rightIcon}>
                <FavoriteIcon fontSize="large" className={styles.icon}/>
            </IconButton>
            <IconButton className={styles.lightningIcon}>
                <FlashOnIcon fontSize="large" className={styles.icon}/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
