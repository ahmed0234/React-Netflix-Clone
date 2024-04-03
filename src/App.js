import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loginscreen from './screens/Loginscreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';



function App() {




  const user=useSelector(selectUser);
  
  const dispatch=useDispatch();

        useEffect(() => {
          const unSubscribe=onAuthStateChanged(auth, (userauth)=>{
            if (userauth){
              console.log(userauth);
              dispatch(login({
                    uid: userauth.uid,
                    email: userauth.email,
              }))
            }else {
              dispatch(logout)
            }
          });

          return unSubscribe;
      }, [])


  return (
    <div className="app">

  <Router>
     
        {!user ? (
            <Loginscreen />
        ):(
          <Switch>
            <Route exact path="/" >
                    <HomeScreen />
            </Route>
                
      </Switch>
        )}

    </Router>

    </div>
  );
}

export default App;
