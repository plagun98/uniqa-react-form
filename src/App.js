import React, {useState} from 'react';
import Form from "./components/form";
import View from "./components/view";



const App = () => {
  

  const [userData, setUserData] = useState({
    fio: undefined,
    inn: undefined,
    birthDate: undefined
  });
  
  
  return (
    <div className="container">
      <Form setUserData={setUserData} />
      <View {...userData}  />  
      
    </div>
  );
}

export default App;
