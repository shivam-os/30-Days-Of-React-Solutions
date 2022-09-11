//4.2. Write your name in a JSX element and store it in a name variable
const Myname = <h2>Shivam</h2>;


//4.3. Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
const user = (
  <div>
    <h1>Sourav Kumar</h1>
    <p>India</p>
    <p>Student</p>
    <p>Male</p>
    <p>myname@gmail.com</p>
    <p>9876543210</p>
  </div>
);


//5.1. Create a style object for the main JSX
// JSX element, main
const mainStyle = {
  border: "5px solid blue",
  fontSize: "1.5rem"
};

const main = (
  <main style={mainStyle}>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li> JavaScript</li>
      </ul>
    </div>
  </main>
);


//5.2. Create a style object for the footer
const footerStyle = {
  border: "5px dashed yellow",
  fontStyle: "Italic",
  textAlign: "center" 
};

//4.4. Write a footer JSX element
const footer = (
  <footer style={footerStyle}>
    Copyright@2022. Made in VSCode.
  </footer>
);


//6.1. Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
const sentence = "I am learning ReactJS.";
const marks = "89";
const canIVote = true;
const techs = ["JavaScript", "React", "HTML", "CSS"];
const myFilms = {
  space: "Interstellar",
  comic: "Dark Night Trilogy",
  inspirational: "Shawshank Redemption"
};

const info = (
  <div>
    <h3>{sentence}</h3>
    <p>{marks}</p>
    <p>{canIVote}</p>
    <p>{techs}</p>
    <p>{myFilms.space}</p>
    <p>{myFilms.inspirational}</p>
  </div>
);


const app = (
  <div style={{border:"5px solid orange"}}>
    {user}
    {info}
    {main}
    {footer}
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
