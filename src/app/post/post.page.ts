import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app'

@Component({
	selector: 'app-post',
	templateUrl: './post.page.html',
	styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

	postID: string
	post
	postReference: AngularFirestoreDocument
	sub

	constructor(
		private route: ActivatedRoute, 
		private afs: AngularFirestore,
		private user: UserService) {

	}

	ngOnInit() {
		this.postID = this.route.snapshot.paramMap.get('id')
		this.postReference = this.afs.doc(`posts/${this.postID}`)
	}

	ngOnDestroy() {
		this.sub.unsubscribe()
	}

	
	}

