import styles from '../../styles/ProfileNav.module.css';
import Button from '../common/Button';

import firebase from "firebase/app";
import "firebase/auth";
import { useRouter } from 'next/router'

const ProfileNav = ({ zodiac }) => {
    const router = useRouter()
    return (
        <>
          <div className={styles.nav}>
                <p
                  className={styles.textLink}
                  onClick={()=>{
                      router.push('/')
                      firebase.auth().signOut()
                  }}
                >
                  Sign Out
                </p>
            </div>
        </>
    )
}

export default ProfileNav;