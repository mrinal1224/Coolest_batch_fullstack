import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";

function App() {

  return (
    <div>
      <MyComponent name='Steve' greeting='hello' cars={['Bentley' , 'Mercedes']} /> 
      <MyComponent name='Mark' greeting='Bye' /> 
      <MyComponent name='Mike' greeting='Hola!!' /> 
      <MyComponent name='John' greeting='Hi'/>
      <MyComponent2 />;
    </div>
  );
}

export default App;
