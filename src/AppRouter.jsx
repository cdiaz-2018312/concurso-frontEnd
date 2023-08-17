import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { isAuthenticated } from "./login/helper/loginHelper";
import { ListaConcursantes } from "./ListaConcursantes";
import { LoginAdmin } from "./login/component/login";
import { ListaConcursantes } from "./ListaConcursantes";
import { CreateConcursante } from "./CreateConcursante";

export const AppRouter = () => {
    return (
        <BrowserRouter>
          <Routes>
          
          <Route
              path="/concursanteAgregar"
              element={
                <>
                  <CreateConcursante></CreateConcursante>
                </>
              }
            />

            <Route
              path="/login"
              element={
                <LoginAdmin></LoginAdmin>
              }
                  
            />
    
    
           
    
            <Route path="/ListaConcursantes"
             element={
                isAuthenticated() ? (
                  <>
                    <ListaConcursantes />
                  </>
                ) : (
                  <Navigate to="/Login" />
                )
              }
            />
    
          </Routes>
        </BrowserRouter>
      ); 
};