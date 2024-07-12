import {createContext, useState} from 'react';
import run from '../config/gemini';

export const Context = createContext(null);

const ContextProvider = (props) => {

    const[input, setInput] = useState('');
    const[recentPrompt, setRecentPrompt] = useState('');
    const[prevPrompt, setPrevPrompt] = useState('[]');
    const[showResult, setShowResult] = useState(false);
    const[loading, setLoading] = useState(false);
    const[resultData, setResultData] = useState('');

    const onSent = async(prompt) => {
        await run(prompt)
    } 

    const contextvalue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        setResultData,
        setShowResult,
        setLoading
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