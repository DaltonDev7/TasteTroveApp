import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';


const firebaseProviders: EnvironmentProviders = importProvidersFrom(
  provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  provideFirestore(() => getFirestore()),
  provideAuth(() => getAuth())
);

export { firebaseProviders };
