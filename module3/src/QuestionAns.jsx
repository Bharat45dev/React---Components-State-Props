import React from 'react'
import ListView from './ListView.jsx'
import StateChange from './StateChange.jsx'

const QuestionAns = () => {
  return (
    <div>
   1.What is React Js?  
   <div>
   <b>Ans.:</b>ReactJS, is an open-source JavaScript library for building user interfaces (UIs) or user interface components. 
   Commonly used for creating single-page applications and mobile applications.  
   </div>
   <hr />
2.What is NPM in React Js?
   <div>
    <b>Ans.:</b>NPM, which stands for Node Package Manager, is a critical tool in the React.js ecosystem and a central part of modern web development in general.
    NPM is a package manager for JavaScript and Node.js applications that allows developers to easily manage and share packages (i.e., libraries and dependencies) that their projects .
    </div>  
   <hr />
  
  3. What is Role of Node Js in react Js? 
  <div>

  <b>Ans.:</b>Node.js is JavaScript-based technologies.
  Node.js plays a crucial role in the back-end, serving as the runtime environment for server-side logic, API development, and hosting the React application. 
</div>
<hr/>
4.What is CLI command In React Js?
<div>
    <b>Ans.:</b>In React.js, the command-line interface (CLI) is a set of command-line tools that provide various functionalities for creating, managing, and building React applications. The most commonly used CLI tool for React is Create React App.
</div>
<hr />
5.What is Components in React Js?  
<div>
<b>Ans.:</b>Component is a fundamental building block for creating user interfaces. Components are reusable.

<div>
React components can be divided into two main types:
<div>
1.Functional Components,
2.Class Components 
</div>

</div>
   
</div>  
<hr />
6.What is Header and Content Components in React Js? 
<div>
    <b>Ans.:</b>Header and Content components are common examples of components that represent distinct parts of a user interface. 
    These components are typically used to structure the layout and content of a web page.
</div>
<hr />
7.How to install React Js on Windows, linux Operating System?  How 
to install NPM and How to check version of NPM? 
<div>
    <b>Ans.:</b>
    <div>
    install React Js on Windows, linux Operating System:
    Download the LTS (Long Term Support) node.js version on official Node.js website.
    and after open command prompt and type create-react-app appname ,and after npm start       
    </div>
    <div><br/>
    checking npm and node version in Windows:
     node -v and npm -v 
    </div>
    <div><br />
    checking npm and node version in linux:
     sudo apt update
     sudo apt install nodejs npm
     node -v
     npm -v
    </div>
    <div><br />
    checking npm and node version in macOS:
     brew install node
     node -v
     npm -v
    </div>
    

</div>
<hr />
8.How to check version of React Js?  
<div>
    <b>Ans.:</b>npm list react or yarn list react
    using console you can also check reactjs version:console.log(React.version);
</div>
<hr />
9.How to change in components of React Js?  
<div>
    <b>Ans.:</b>Changing components in React.js typically involves making modifications to the component's structure, appearance, behavior, or state.
    1.Edit the Component's Code,
    2.Update the Component's State,
    3.Commit Changes.
</div>
<hr />
10. How to Create a List View in React Js?
<div>
    <b>Ans.:</b><ListView/>
</div>
<hr />
11.Create Increment decrement state change by button click?
<div>
    <b>Ans.:</b><StateChange/>
</div>
    </div>
  )
}

export default QuestionAns;