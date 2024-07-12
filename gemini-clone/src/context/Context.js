import {createContext} from 'react';

export const Context = createContext(null);

const ContextProvider = (props) => {


    const onSent = async(prompt) => {
        await run(prompt)
    } 

    onSent("What is react js");

    const contextvalue = {

    }

    return (
        <Context.Provider value={contextvalue}>
            {
                props.children
            }
        </Context.Provider>
    )
}

export default ContextProvider;