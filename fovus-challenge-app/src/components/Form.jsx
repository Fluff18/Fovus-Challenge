import React from "react";
import fovusLogo from '../assets/FovusLogo.jpg';
// import { useForm } from "react-hook-form";

// const onSubmit = (data) => {
// console.log(data)
// }

export default function Form() {

    // const { register, handleSubmit } = useForm()

    // const onSubmit = (data) => {
    //     console.log(data)
    // }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={fovusLogo} alt=""/>
            </div>

            <div className='bg-gray-300 flex flex-col justify-center'>
                <form className='max-w-[500px] w-full mx-auto bg-gray-100 p-8 px-8 rounded-lg' >
                    <h2 className='text-4xl dark:text-black font-bold text-center'>Fovus Challenge Form</h2>
                    <div className='flex flex-col text-gray-700 py-2'>
                        <label>Text Input</label>
                        <input className='rouded-lg bg-white mt-2 p-2 focus-within:border-black' type="text"/>
                    </div>

                    <div className='flex flex-col text-gray-700 py-2'>
                        <label>File Input</label>
                        <input type='file' name='input_file'/>
                    </div>
                    <div className='flex justify-between text-gray-900 py-2'>
                        <p>Please attach a File</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-gray-700 shadow-lg rounded-sm text-white shadow-gray-700/50 hover:shadow-gray-700/30 font-semibold'>Submit</button>
                </form>
            </div>
        </div>
    )
}