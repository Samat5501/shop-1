import React, { useEffect, useContext,useState } from 'react'
import { data } from './data';

 const Context = React.createContext()

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('a');
    const [phones, setPhones] = useState([]);

    const PhonesFunc = async () => {
        setLoading(true)
        // console.log(data);
        try {
            if (data) {
                data.map((item) => {
                    const { idPhone, imgPhone, namePhone, costPhone } = item;

                    return {
                        id: idPhone, name: namePhone, image: imgPhone, cost: costPhone
                    }
                })
                setPhones(data)
            }
            else {
                setPhones([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

useEffect(() => {
    PhonesFunc()
}, [search]);

return <Context.Provider value={{loading, search, setSearch, phones}}>
    {children}
</Context.Provider>
}
export const useGlobalContext = () => {
    return useContext(Context)
};

export { Context, AppProvider };