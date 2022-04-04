import appFire from './firebaseMoneda'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth'

export async function creteUserFire (obj:object|any) {
  const auth = getAuth(appFire)
  switch (obj.type) {
    case 'EmailAndPassword':
      return createUserWithEmailAndPassword(auth, obj.email, obj.pass)
  }
}

export async function loginUser (obj:object|any) {
  const auth = getAuth(appFire)
  switch (obj.type) {
    case 'EmailAndPassword':
      return signInWithEmailAndPassword(auth, obj.email, obj.pass)
  }
}

export function closetSession () {
  console.log('cerrar login')
  const auth = getAuth(appFire)
  signOut(auth)
}

export function providerAuth (type:string) {
  const auth = getAuth(appFire)
  switch (type) {
    case 'google':
      return signInWithRedirect(auth, new GoogleAuthProvider())
  }
}
