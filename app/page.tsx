"use client"; // <-- THIS IS REQUIRED

import React, { Component } from "react";

export default class Page extends Component {
render() {
return ( <div style={styles.container}> <h1 style={styles.title}>📇 Welcome to Contact Manager</h1> <p style={styles.subtitle}>
Organize your contacts easily and efficiently! </p> <div style={styles.cardsContainer}> <div style={styles.card}> <h2>+ Add Contact</h2> <p>Quickly add a new contact and save details securely.</p> </div> <div style={styles.card}> <h2>📋 View Contacts</h2> <p>See all your saved contacts in one place with ease.</p> </div> <div style={styles.card}> <h2>⚡ Manage Efficiently</h2> <p>Edit, update, or delete contacts whenever needed.</p> </div> </div>
<button style={styles.button} onClick={() => alert("Let's start!")}>
Get Started </button> </div>
);
}
}

const styles = {
container: {
textAlign: "center",
padding: "50px 20px",
fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
background: "#000",
minHeight: "100vh",
color: "#fff",
},
title: {
fontSize: "3rem",
marginBottom: "10px",
},
subtitle: {
fontSize: "1.2rem",
marginBottom: "40px",
color: "#ccc",
},
cardsContainer: {
display: "flex",
justifyContent: "center",
gap: "20px",
flexWrap: "wrap",
marginBottom: "40px",
},
card: {
background: "#111",
padding: "20px",
borderRadius: "15px",
width: "250px",
transition: "transform 0.3s, background 0.3s",
cursor: "pointer",
color: "#fff",
boxShadow: "0 5px 15px rgba(255,255,255,0.1)",
},
button: {
padding: "15px 30px",
fontSize: "1rem",
borderRadius: "10px",
border: "none",
background: "#fff",
color: "#000",
cursor: "pointer",
transition: "background 0.3s, color 0.3s",
},
};

// Add hover effects using inline styles
document.addEventListener("DOMContentLoaded", () => {
const cards = document.querySelectorAll("div[style*='cursor: pointer']");
cards.forEach((card) => {
card.addEventListener("mouseover", () => {
card.style.transform = "scale(1.05)";
card.style.background = "#222";
});
card.addEventListener("mouseout", () => {
card.style.transform = "scale(1)";
card.style.background = "#111";
});
});

const button = document.querySelector("button");
button.addEventListener("mouseover", () => {
button.style.background = "#000";
button.style.color = "#fff";
});
button.addEventListener("mouseout", () => {
button.style.background = "#fff";
button.style.color = "#000";
});
});
