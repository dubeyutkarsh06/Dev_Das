import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	username: string = ""
	password: string = ""
	cpassword: string = ""

	constructor(
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router, 
		private loadingCtrl: LoadingController
		) { }

	ngOnInit() {
	}

	async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

	async goTo(){
		this.router.navigate(['/login'])
	}

	async register() {
		const { username, password, cpassword } = this
		if(password !== cpassword) {
			return console.error("Passwords don't match")
		}
		let loading = await this.loadingCtrl.create({
			message: "Signing in..",
		});

		loading.present();

		setTimeout(() => {
			loading.dismiss();
		}, 2000)

		try {
			const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@interact.com', password)

			this.afstore.doc(`users/${res.user.uid}`).set({
				username
			})

			this.user.setUser({
				username,
				uid: res.user.uid
			})

			this.presentAlert('Success', 'You are registered!')
			this.router.navigate(['/tabs'])

		} catch(error) {
			console.dir(error)
		}
	}

}
