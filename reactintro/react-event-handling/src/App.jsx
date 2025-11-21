// import React from "react";

// const App = () => {
//   function handleClick() {
//     alert("hello I have clicked right now");
//   }
//   function para() {
//     alert("ta para mande mouse rawastu khyal ko kana wa");
//   }
//   function handleInputContent(e) {
//     console.log("value is change in input box", e.target.value);
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     alert("Form submited successfully");
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={handleInputContent} />
//         <button type="submit">Submit</button>
//       </form>
//       {/* <p onMouseOver={para} className="para">
//         para
//       </p>
//       <button onClick={handleClick}>Click Me</button> */}
//     </div>
//   );
// };
import React from "react";

const App = () => {
  return (
    <div>
      <button
        onMouseOver={() => console.log("mouse is over")}
        onDoubleClick={() => alert("you have double clicked the button")}
      ></button>
    </div>
  );
};

export default App;
// export default App;
// import React from "react";

// const App = () => {
//   function greet(name) {
//     alert("Hello " + name);
//   }
//   return (
//     <div>
//       <button onClick={() => greet("Abdul Wahab")}>Say Hello</button>
//     </div>
//   );
// };
