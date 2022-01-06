import React, {useState, useRef} from "react";
import "./css/App.css";
import "./css/index.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyDnRG-PX_UYSeT0j3TCqVavRtIF3hbA7Rs",
    authDomain: "attemp-zero.firebaseapp.com",
    projectId: "attemp-zero",
    storageBucket: "attemp-zero.appspot.com",
    messagingSenderId: "754506517760",
    appId: "1:754506517760:web:e6cca53b5247636fe0f7e5",
    measurementId: "G-9EV0HD3ZR7",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const scroll = dummy.current.scrollIntoView({behavior: "smooth"});

function App() {
    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <header className="header">
                <h1>AzCHA</h1>
                {user ? <SignOut /> : <SignIn name="Sign In" />}
            </header>
            {user ? <ChatRoom /> && {scroll} : <Home />}
        </div>
    );
}

const Home = () => {
<<<<<<< HEAD
	return (
		<div className='home'>
			<h1>AzCHA</h1>
			<p>
				<x-acc>"Attemp-Zero"</x-acc> Chat App is an open-source project created by <x-acc>qwyzex</x-acc>, this is a chat app. Using Vanilla React and Firebase.
			</p>
			<p>
				The project initially begin on October 13th 2021. I don't actually want this to be a product or a real social media chat app, I make this to learn React and databases management with Firebase.
			</p>
			<div>
				<a href='https://qwzz.netlify.app' target='_blank' rel='noreferrer'>
					<img src='/solewhite.png' alt='qwyzex-icon' />
					<p>MY PERSONAL SITE</p>
				</a>
				<a href='https://github.com/qwyzex/AzCHA' target='_blank' rel='noreferrer'>
					<img src='/github.png' alt='github-icon' />
					<p>SOURCE CODE</p>
				</a>
				<SignIn name='GET STARTED'/>
			</div>
            <p className='version'>
                V0.2
            </p>
		</div>
	)
}
=======
    return (
        <div className="home">
            <h1>AzCHA</h1>
            <p>
                <x-acc>"Attemp-Zero"</x-acc> Chat App is an open-source project
                created by <x-acc>qwyzex</x-acc>, this is a chat app. Using
                Vanilla React and Firebase.
            </p>
            <p>
                The project initially begin on October 13th 2021. I don't
                actually want this to be a product or a real social media chat
                app, I make this to learn React and databases management with
                Firebase.
            </p>
            <div>
                <a
                    href="https://qwzz.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/solewhite.png" alt="qwyzex-icon" />
                    <p>MY PERSONAL SITE</p>
                </a>
                <a
                    href="https://github.com/qwyzex/AzCHA"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/github.png" alt="github-icon" />
                    <p>SOURCE CODE</p>
                </a>
                <SignIn name="GET STARTED" />
            </div>
        </div>
    );
};
>>>>>>> aa64b461e4e81f9e5d3cbcbcb8e86cc772add894

export function SignIn(props) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithRedirect(provider);
    };

    const GoogleSVG = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    fill="#fbbb00"
                    d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
						c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
						C103.821,274.792,107.225,292.797,113.47,309.408z"
                />
                <path
                    fill="#518ef8"
                    d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
						c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
						c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                />
                <path
                    fill="#28b446"
                    d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
						c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
						c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                />
                <path
                    fill="#f14336"
                    d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
						c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
						C318.115,0,375.068,22.126,419.404,58.936z"
                />
            </svg>
        );
    };

    return (
        <button className="SignIn-button" onClick={signInWithGoogle}>
            <GoogleSVG />
            <p>{props.name}</p>
        </button>
    );
}

function SignOut() {
    return (
        auth.currentUser && (
            <button onClick={() => auth.signOut()}>Sign Out</button>
        )
    );
}

function ChatRoom() {
<<<<<<< HEAD
	const dummy = useRef();
	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt', 'desc').limit(120);
	const [messages] = useCollectionData(query, {idField: 'id'});
	const [formValue, setFormValue] = useState('');
	const sendMessage = async(e) => {
		e.preventDefault();
		const { uid, photoURL } = auth.currentUser;
=======
    const dummy = useRef();
    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt", "asc");
    const [messages] = useCollectionData(query, {idField: "id"});
    const [formValue, setFormValue] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser;
>>>>>>> aa64b461e4e81f9e5d3cbcbcb8e86cc772add894

        if (formValue === "") {
        } else {
            await messagesRef.add({
                text: formValue,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                photoURL,
            });
            setFormValue("");
            dummy.current.scrollIntoView({behavior: "smooth"});
        }
    };

    const SubmitButton = () => {
        if (formValue === "") {
            return (
                <button type="submit" className="empty" disabled>
                    SEND
                </button>
            );
        } else {
            return <button type="submit">SEND</button>;
        }
    };

<<<<<<< HEAD
	const SubmitButton = () => {
		if (formValue === '') {
			return <button type='submit' className='empty' disabled>SEND</button>
		} else {
			return <button type='submit'>SEND</button>
		}
	}

	return (
		<div className='chatroom'>
			<div className='messages-wrapper'>				
        <span ref={dummy}></span>
				{messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)} 

			</div>
			<form onSubmit={sendMessage}>
				<input 
					autoFocus
					value={formValue} 
					onChange={(e) => setFormValue(e.target.value)} 
					placeholder='Type your message here...'
					/>
				<SubmitButton />
			</form>
		</div>
	)
=======
    return (
        <div className="chatroom">
            <div className="messages-wrapper">
                {messages &&
                    messages.map((msg) => (
                        <ChatMessage key={msg.id} message={msg} />
                    ))}
                <span ref={dummy}></span>
            </div>
            <form onSubmit={sendMessage}>
                <input
                    autoFocus
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="Type your message here..."
                />
                <SubmitButton />
            </form>
        </div>
    );
>>>>>>> aa64b461e4e81f9e5d3cbcbcb8e86cc772add894
}

function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;

    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt="profile" />
            <p>{text}</p>
        </div>
    );
}

export default App;
