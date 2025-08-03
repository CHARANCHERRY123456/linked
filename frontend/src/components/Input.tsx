import {  InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label :  string;
}

export default function Input({label , ...rest} : Props){
    return (
        <div className="mb-4">
            <label className="text-sm"> {label} </label>
            <input 
             {...rest}
             className="w-full p-2 border rounded mt-1"
            />
        </div>
        
    )
}