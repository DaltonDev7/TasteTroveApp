import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { RegisterUserForm } from '../interfaces/register-user';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  firebaseAuth = inject(Auth)
  fireStore = inject(Firestore)

 
  async registerUser(payload:RegisterUserForm){
    const newUser = await createUserWithEmailAndPassword( this.firebaseAuth, payload.email, payload.password)

    if(newUser.user){
      await updateProfile(newUser.user, {
        displayName: `${payload.name} ${payload.lastname}`
      })

       // Guarda información adicional en Firestore
       await this.saveAdditionalUserInfo(newUser.user.uid, { gender: 'MASCULINO'});
    }

  }

  private async saveAdditionalUserInfo(userId: string, additionalInfo: { gender: string }) {
    try {
      const userDocRef = doc(this.fireStore, `users/${userId}`);
      await setDoc(userDocRef, additionalInfo);
      console.log('Información adicional guardada en Firestore');
    } catch (error) {
      console.error('Error al guardar la información adicional en Firestore:', error);
    }
  }


}
