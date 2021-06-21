import Header from "./components/Header";
import {Route} from "react-router-dom"
import Home from "./screens/Home";
import CoronaScreen from "./screens/CoronaScreen"

function App() {
 return (
   <main>
<Header></Header>
<Route path="/" component={Home} exact/>
<Route path="/corona" component={CoronaScreen}/>

   </main>
     
  );
}

export default App;
