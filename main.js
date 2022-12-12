@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

:root {
  --primary: #00adb5;
  --grey: #393e46;
  --dark: #222831;
  --light: #eee
}

* {
  box-sizing: border-box;
}
body {
  font-size: 15pt;
  font: 'Poppins';
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center !important;
  background: no-repeat url("img/back.png");
  background-size: cover;
}

.container{
  padding: 1.5rem;
  border: 3px groove #222;
  border-radius: 1rem;
  background: var(--dark)
}
button {
  background: linear-gradient(0deg, rgba(0, 173, 181,1), rgba(0,173,181,.5));
  opacity: 1;
  font-family: 'Poppins';
  font-size: 20px;
  margin: .55rem;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 1rem;
  border-top: 2px solid rgba(0,173,181,.5);
  box-shadow: 5px 8px 13px var(--dark);
}

button:active {
  border-top: 0px solid var(--light);

}


.screen{
  border: 2px groove #eee;
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  width: 330px
  
}
.screen h1{
  color: var(--light);
  margin: 0;
  text-align: right;
  font-family: 'Poppins';
  overflow-x: auto;
  overflow-anchor: right !important;
}
 
.screen p{
  color: var(--primary);
  text-align: right;
  font-family: 'Poppins';
  margin: 0;
}

.buttons, .screen{
  max-width: 330px !important;
  
}

@media screen and (max-width: 500px){
  body{
    background: var(--dark);
    padding: 0;
    margin: 0;
  }
  
  .container{
    padding: 0;
    border: none;
  }
}
