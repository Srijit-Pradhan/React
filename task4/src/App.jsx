import React from "react";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [ph, setPh] = useState("");

  const localData = JSON.parse(localStorage.getItem("all-users")) || []; //STEP: 7.LOCAL STORAGE ER JONNO PROTHOME DATA NIE ASHTE HOBE.TARPOR PARSE KORTE HOBE.JODI KONO DATA NA THAKE TAHOLE EMPTY ARRAY DIBE.
  const [allusers, setAllusers] = useState(localData); //STEP: 1. ALL USERS STORE HOBE LOCAL DATA TE.

  const submitHandler = (e) => {
    console.log("submitted");

    setEmail(""); //NOTE:AFTER SUBMITTING EMAIL IS EMPTY
    setPass(""); //NOTE:AFTER SUBMITTING PASSWORD IS EMPTY
    setPh(""); //NOTE:AFTER SUBMITTING PH. NUMBER IS EMPTY
  };
  const deletehandler = (index) => {
    const copyUsers = [...allusers];
    copyUsers.splice(index, 1);
    setAllusers(copyUsers);
    localStorage.setItem("all-users", JSON.stringify(copyUsers)); //STEP: 9.DELETE HANDLER ER MODDHE LOCAL STORAGE UPDATE KORTE HOBE JATE DELETE KORAR PORO UI TE UPDATE DEKHA JAY.ER JONNO LOCAL STORAGE TE COPY USERS STRINGIFY KORE SET KORTE HOBE.
  };
  //STEP: 6.DELETE HANDLER FUNCTION. COPY USERS BANBE ALL USERS ER, THEN SPLICE FUNCTION CHALBE JETA INDEX THEKE 1 TA DELETE KORBE. THEN SET ALL USERS E COPY USERS STORE KORBE.

  return (
    <div className="main">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const oldUser = [...allusers]; //STEP: 2. ON SUBMIT ER MODDHE ALL USERS OLD USER E STORE HOBE DESTRUCTURING BHABE.
          oldUser.push({ email, pass, ph }); //STEP: 3. OLD USER E NEW USER ER DETAILS PUSH HOBE.
          setAllusers(oldUser); //STEP: 4. SET ALL USERS E OLD USER STORE HOBE.

          localStorage.setItem("all-users", JSON.stringify(oldUser)); //STEP: 8.LOCAL STORAGE ER ALL-USERS KEY TE OLD USER STRINGIFY KORE SET KORTE HOBE OBJECT PAOYAR JONNO.

          submitHandler();
        }}
      >
        <input
          type="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter password"
          required
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <input
          type="tel"
          placeholder="Enter phone number"
          required
          value={ph}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, "");
            setPh(value);
          }}
        />
        <button>Submit</button>
      </form>

      {allusers.map(function (e, idx) {
        return (
          <div className="ui" key={idx}>
            <h1>{e.email}</h1>
            <h1>{e.pass}</h1>
            <h1>{e.ph}</h1>
            <button
              onClick={(e) => {
                deletehandler();
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
    //STEP: 5. ALL USERS MAP FUNCTION CHALBE AND DETAILS UI TE SHOW HOBE.
  );
};

export default App;

// INFO: logic behind the code and how it works:
// 🧠 STEP 1: App load hota hai

// React component render hota hai

// 4 states banti hain:

// email → empty

// pass → empty

// ph → empty

// allusers → empty array

// 👉 Screen pe empty form dikhta hai

// ✍️ STEP 2: User Email type karta hai

// User keyboard se email likhta hai

// onChange trigger hota hai

// setEmail() state update karta hai

// Input ka value React state se control hota hai

// 👉 Input = State (always synced)

// 🔐 STEP 3: User Password type karta hai

// Same process:

// onChange fire

// setPass() update

// Password state me store hota hai (temporarily)

// 📞 STEP 4: User Phone number type karta hai

// User kuch bhi type kare (letters / symbols)

// replace(/[^0-9]/g, "") chalta hai

// Sirf numbers bachte hain

// setPh() me clean number save hota hai

// 👉 Input box me letters dikhte hi nahi

// 🚀 STEP 5: User Submit button dabata hai

// Form ka onSubmit event fire hota hai

// e.preventDefault() page reload rokta hai

// 📦 STEP 6: Naya user object banta hai
// { email, pass, ph }

// 👉 Ye ek single user ka data hai

// 📚 STEP 7: Purane users ki copy banti hai
// const oldUser = [...allusers];

// 👉 Direct state modify nahi karte
// 👉 Isliye copy banake kaam karte hain

// ➕ STEP 8: New user array me add hota hai
// oldUser.push({ email, pass, ph });

// 👉 Ab array me:

// Pehle ke users

// naya user

// 💾 STEP 9: allusers state update hoti hai
// setAllusers(oldUser);

// 👉 React ko pata chalta hai:

// “Data change ho gaya, UI dubara render karo”

// 🧹 STEP 10: Inputs reset hote hain
// setEmail("");
// setPass("");
// setPh("");

// 👉 Form clear ho jata hai
// 👉 Ready for next entry

// 🔁 STEP 11: Component re-render hota hai

// React dubara JSX run karta hai

// allusers.map() chalta hai

// Har user screen pe print hota hai

// 👉 Har submit ke baad list badhti jaati hai

// 🖥️ STEP 12: Data screen pe dikhta hai

// Email

// Password

// Phone

// 👉 Pure flow me page reload nahi hota

// localStorage use karke data ko browser me save karte hain

// Taaki page reload hone par bhi data rahe

// 📥 STEP 13: App load hone par data fetch hota hai

// localStorage.getItem("all-users")

// JSON.parse() se wapas object me convert

// allusers state me set

// 👉 Pehle se saved users dikhenge

// 🗑️ STEP 14: User Delete button dabata hai

// deletehandler() function call hota hai

// allusers ki copy banti hai

// splice() se selected user remove hota hai

// setAllusers() se state update hoti hai

// localStorage bhi update hota hai

// 👉 UI se user hat jata hai

// 👉 Data consistency bani rehti hai