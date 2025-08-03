import {  InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label :  string;
}

export default function Input({label , ...rest} : Props){
    return (
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2"> 
                {label} 
            </label>
            <input 
             {...rest}
             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white shadow-sm placeholder-gray-400"
            />
        </div>
        
    )
}