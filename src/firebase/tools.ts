import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, doc, deleteDoc } from 'firebase/firestore';
import config from './settings.js';
import { browser } from '$app/env';

export const firebaseApp =
	browser && getApps().length ? getApp() : initializeApp(config);
export const db = browser && getFirestore();
export const dbRef = browser && collection(db, 'todos');
