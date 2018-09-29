body {
  font-family: "Hind", sans-serif;
  font-weight: 300;
  text-align: center;
  background-image: radial-gradient(#4286f4, #162f56);
}

h1 {
  color: #dee5ef;
  text-shadow: 1px 1px;
}

.calculator {
  width: 100%;
  /*   border: 1px solid black;
  border-radius: 4%; */
  padding: 40px;
}

.calculator_keys {
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: rows;
  justify-content: center;
}

.calculator_display {
  font-size: 3rem;
}

button {
  border-radius: 10%;
  background-color: #dee5ef;
  font-size: 1rem;
  font-weight: 600;
  padding: 1.5rem;
  display: flex;
  margin: 5px;
  height: 50px;
  width: 50px;
}

.equals {
  height: 10.5rem;
}

.is_depressed {
  transform: scale(1.1);
}
