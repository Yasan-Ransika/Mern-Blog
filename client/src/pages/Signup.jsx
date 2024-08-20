import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';


export default function Signup() {
  return (
    <div className='min-h-screen flex justify-center items-start'>
      <div className='flex p-3 max-w-3xl flex-col items-center mt-20 md:flex-row gap-8'>
{/* left */}
        <div className='flex-1 text-center'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 rounded-lg text-white'>
              BOC Blog
            </span>
          </Link>
          <p className='text-sm mt-5'>
            This is a BOC Blog. You can sign up with your email and password or with Google.
          </p>
        </div>
{/* right */}
        <div className=''>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username' />
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput type='email' placeholder='name@company.com' id='email' />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='Password' id='password' />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'>
                Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div> 
      </div>
     </div>
    </div>
  );
}
