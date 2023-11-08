import { createContext, useState} from "react";

export const chngContext = createContext();

export function ChngContextProvider({children}){
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState(false);
    const [char, setChar] = useState(false);
    const [length , setLength] = useState(8);
    const [theme , setTheme] = useState("light");

    let str = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm";
    let num = "1234567890";
    let charData = '!@#$%&*()'
    const createPassword = () =>{
        let pass = "";
        if(char){
            str = str +charData;
        }
        if(number){
            str = str + num;
            console.log(str);
        }
        for (let i = 0; i < length; i++) {
          const pos = Math.floor(Math.random()*(str.length));
          pass = pass + str.charAt(pos);
        }
        console.log(pass);
        setPassword(pass);
    
      }
    const data = {
        password , 
        setPassword,
        number,
        setNumber,
        char,
        setChar,
        length,
        setLength, 
        createPassword,
        theme,
        setTheme
    }
    return <chngContext.Provider value={data}>
        {children}
    </chngContext.Provider>
}

