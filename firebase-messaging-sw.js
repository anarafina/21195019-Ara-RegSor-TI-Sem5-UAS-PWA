importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js')

const firebaseConfig = {
        apiKey: "AIzaSyDWQ4M7NHQhxITuLxn4lTk1GcPisujQlT8",
        authDomain: "pwa-appshell.firebaseapp.com",
        projectId: "pwa-appshell",
        storageBucket: "pwa-appshell.appspot.com",
        messagingSenderId: "6665700570",
        appId: "1:6665700570:web:0ab2e1131ba90ba4ed91e3",
        //measurementId: "G-RKHPJBR4R2"
  };

const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

// Optional: Add an event listener to handle background messages
self.addEventListener('push', (event) => {
  const payload = event.data.json();
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(payload.notification.title, options);
});