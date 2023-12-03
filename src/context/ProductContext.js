const { createContext } = require("react")

const AppContext=createContext()

const APIUrl = `http://localhost:6900/data`

const initialState={
    isLoading:
}


const AppProvider = ({children})=>{
    return(
        <AppContext.Provider value={}>
            {children}
        </AppContext.Provider>
    )
}
export {AppContext,AppProvider}