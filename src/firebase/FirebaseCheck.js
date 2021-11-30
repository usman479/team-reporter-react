import firebase from "firebase/compat";
import React from 'react'
//component to check firebase connection    
export default function FirebaseCheck() {
    const firebaseApp = firebase.apps[0];
    return (
        <div>
            <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
        </div>
    )
}
