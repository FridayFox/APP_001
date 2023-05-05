import { useState } from 'react'
import { HashRouter } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AuthRouter from "@/routers/utils/authRouter";
import Router from "@/routers/index";
import './App.css'
import { Provider } from "react-redux";
import { store } from "@/redux";

function App() {
  return (
    <HashRouter>
       <Provider store={store}>
        <AuthRouter>
          <Router />
        </AuthRouter>
        </Provider>
    </HashRouter>
  )
}

export default App
