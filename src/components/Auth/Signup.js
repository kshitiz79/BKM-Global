import React from 'react'
import { ToastContainer } from 'react-toastify'


const Signup = () => {
  return (
    <>
    <div class="btn-group-vertical" role="group" aria-label="">
        <button type="button" class="btn btn-secondary">First One</button>
        <button type="button" class="btn btn-secondary">Second One</button>
        <div class="btn-group" role="group">
            <button
                id="dropdownId"
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                More
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">First Dropdown</a>
                <a class="dropdown-item" href="#">Second Dropdown</a>
            </div>
        </div>
        <h1 class="text-center">Signup</h1>
        <form>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username"  autoFocus/>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <ToastContainer />ß
        <div class="mt-3">
            <p class="text-center">Already have an account? <a href="/login">Login</a></p>  
    </div>
    </div>
 
    </>
  )
}

export default Signup