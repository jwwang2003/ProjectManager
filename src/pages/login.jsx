import React, { useState } from 'react';
import { h } from 'preact';

import styles from './login.module.css';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className={styles.Container}>
      
      <div className={styles.Form}>
        <h1 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Management System</h1>
        <div className={styles.Inputs}>
          <div className={styles.InputDiv}>
              <input type="text" value={user} onChange={e => setUser(e.target.value)} className={styles.Input} placeholder=" " />
              <label for="" className={styles.InputLabel}>UserID</label>
          </div>
          <div className={styles.InputDiv}>
              <input type="text" value={pass} onChange={e => setPass(e.target.value)} className={styles.Input} placeholder=" " />
              <label for="" className={styles.InputLabel}>Password</label>
          </div>
        </div>
        <div className={styles.Button}>
          Login
        </div>
      </div>
    </div>
  )
}