import appFire from './firebaseMoneda'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth'

interface Data{
  type:string,
  email:string,
  pass:string
}

export async function creteUserFire (obj:Data) {
  const auth = getAuth(appFire)
  switch (obj.type) {
    case 'EmailAndPassword':
      return createUserWithEmailAndPassword(auth, obj.email, obj.pass)
  }
}

export async function loginUser (obj:Data) {
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
