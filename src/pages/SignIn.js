import React from 'react'

function SignIn() {
    return (
        <div class="bg-gray-100 h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign in</h1>

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Sign in</button>

                </div>

                <div class="text-grey-dark mt-6">
                    <a class="no-underline border-b border-blue text-blue" href="/">
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SignIn