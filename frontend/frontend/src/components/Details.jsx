import React from 'react';
import img from '../Photos/p2.jpg'
import { Link ,useNavigate} from 'react-router-dom';

function Details() {
    return (
        <div className='h-screen w-screen bg-cover' style={{ backgroundImage: `url(${img})` }}>
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg  rounded-lg ">
                <h2 className="text-2xl font-bold  mb-4 flex items-center justify-center">Farmer Registration</h2>
                <form>

                    <div className="mb-4">
                        <label className="block text-balck-700 font-medium mb-2" >
                            Full Name
                        </label>    
                        <input
                            type="text"
                            id="fullName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter full name"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-black-700 font-medium mb-2" >
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dob"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-balck-700 font-medium mb-2'>
                            Age
                        </label>
                        <input
                            type='age'
                            id='age'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter the age'
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-balck-700 font-medium mb-2" >
                            Gender
                        </label>
                        <select
                            id="gender"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-balck-700 font-medium mb-2'>
                            Phone number
                        </label>
                        <input
                            type='phone number'
                            id='phone number'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter phone number'
                        />
                    </div>


                    <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-blue-500 text-white px-7 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Next
                            </button>
                        
                    </div>

                </form>
            </div></div>
    );
}

export default Details;
