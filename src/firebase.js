import Firebase from 'firebase';

// const app = initializeApp({
//   apiKey: "AIzaSyD6SNXF5ehqg_OZ-GfmVDUSyt0ItqzvMfI",
//   authDomain: "test-vue-84656.fireb aseapp.com",
//   databaseURL: "https://test-vue-84656.firebaseio.com",
//   projectId: "test-vue-84656",
//   storageBucket: "",
//   messagingSenderId: "797479608538"
// });

const app = Firebase.initializeApp({
	apiKey: "AIzaSyDvLyTfSTK2Th5hNK0c31dbBZz36HCx3Ic",
    authDomain: "politicos-hack.firebaseapp.com",
    databaseURL: "https://politicos-hack.firebaseio.com",
    projectId: "politicos-hack",
    storageBucket: "politicos-hack.appspot.com",
    messagingSenderId: "642789108088"
});

export const db = app.database();
export const politicos = db.ref('politicos-hack');
