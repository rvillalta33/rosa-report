import * as React from 'react';
export const StoreContext = React.createContext(null);
import { fetchTemplatesData } from '../services/services';

export const StoreProvider = ({ children }) => {



    //GLOBAL CONSTANTS  -----------------------------------------------------------------------------------------
    const [responseData, setResponseData] = React.useState([])
    const [tableLocalData, setTableLocalData] = React.useState([])
    const [loading, setLoading] = React.useState(true)




    //USEFFECT-----------------------------------------------------------------------------------------------------

    React.useEffect(() => {
        fetchData()
    }, [])

    //FUNCTIONS OR METHODS-----------------------------------------------------------------------------------------
    const fetchData = () => {

        setLoading(true)
        fetchTemplatesData().then((data) => {
            // debugger
            setResponseData(data)
            setTimeout(() => {
                setLoading(false)
            }, 1000)

        })
    }




    return (<StoreContext.Provider value={{

        responseData,
        tableLocalData,
        loading,
        setTableLocalData,
        fetchData
    }}
    >
        {children}
    </StoreContext.Provider>)
}

