import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export function obterUrlBase() {
  return "https://01bc-2804-1b2-8180-b647-f8af-223b-dad0-4407.ngrok-free.app";
}

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const signIn = async (token) => {
    try {
      await AsyncStorage.setItem("userToken", token);
      setUserToken(token);
    } catch (error) {
      console.error("Erro ao salvar o token:", error);
    }
  };


  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      setUserToken(null);
    } catch (error) {
      console.error("Erro ao remover o token:", error);
    }
  };

  //   useEffect(() => {
  //     const checkToken = async () => {
  //       try {
  //         const token = await AsyncStorage.getItem('userToken');
  //         setUserToken(token);
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.error('Erro ao verificar o token:', error);
  //       }
  //     };

  //     checkToken();
  //   }, []);

  const value = {
    userToken,
    isLoading,
    setUserToken,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
