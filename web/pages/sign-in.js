import commonstyles from '../styles/common.module.css';
import styles from '../styles/sign-in.module.css';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';

import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

import firebase from "firebase/app";
import "firebase/auth";

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const router = useRouter()
    const onSubmit = (data) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((user) => {
              router.push('/')
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
            });
    }

    return (
        <>
        <Layout
          seo={{
              title: "Sign In"
          }}
        >
         <div className={styles.signInContainer}>
          <div className={styles.signInFormWrapper}>
           <div className={commonstyles.paper}>
              <h1> Sign In</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input name="email" ref={register} placeholder="person@company.com" type="email" className={commonstyles.formInput} />
                <label>Password</label>
                <input name="password" ref={register} placeholder="Shh..." type="password" className={commonstyles.formInput} />
                <button type="submit" className={styles.submitButton}>
                    Sign In
                </button>
              </form>
           </div>
          </div>
         </div>
         </Layout>
        </>
    )
}

export default SignIn;