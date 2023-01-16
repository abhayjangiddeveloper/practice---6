import React, { useEffect, useState } from "react";

const AppContext = React.createContext();
// state ready to use 

const AppProvider = ({children}) =>{
    
    const [state, setState] = useState([]);
    const FatchApi  = async () =>{
        try {
            const rest = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const Data = await rest.json();
            // console.log(Data);
            setState(Data);
        } catch (error) {
            console.log(error);
        }        
    }

    useEffect(()=>{
        FatchApi();
    },[])

    return(
        <>
            <AppContext.Provider value={state}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export {AppContext, AppProvider};