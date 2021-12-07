import React, { useState } from "react";
import emailjs from 'emailjs-com';
import contactus from '../../images/contactus.gif';
import MailStatusModal from '../../components/mailPopUp/mailStatusModal';

const Contact = () => {

    const [ name, setName ] = useState('');
    const [ company, setCompanyName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    const [ mailStatusMessage, setMailStatusMessage ] = useState('');
    const [mailPopUp, setMailPopUp] = useState(false)

    

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const submit = (e) => {
        e.preventDefault()
  
        if(name && isValidEmail && message) {

            const serviceId = process.env.GATSBY_EMAILJS_SERVICE_ID
            const templateId = process.env.GATSBY_EMAILJS_TEMPLATE_ID
            const userId = process.env.GATSBY_EMAILJS_USER_ID

             const templateParams = {
                name,
                email,
                company,
                message
            };

            console.log(userId)

            // emailjs.send(serviceId, templateId, templateParams, userId)
            //     .then(response => console.log(response))
            //     .then(error => console.log(error));


            setMailStatusMessage('email sent');
            setMailPopUp(true);
            setName('');
            setCompanyName('');
            setEmail('');
            setMessage('');
        } else {
            setMailStatusMessage('an error occurred, please try after sometime');
        }
    }

    console.log(mailStatusMessage)

    return(
    <div className="text-gray-100" data-scroll-section- >
        { mailPopUp ? <MailStatusModal mailStatusMessage={ mailStatusMessage } setMailPopUp={setMailPopUp} /> : <></>}

        <div className=".max-w-screen-xl w-4/5 mt-4 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white text-gray-900 rounded-lg shadow-lg" data-scroll-section>

            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-indigo-600 ">Lets <br/> collaborate</h2>
                    <div className="text-gray-700 mt-8">
                        Hate forms? Send me an
                        <a className="underline" href="mailto:ekajionah@gmail.com?subject=Hello%20user" target="blank"> email &nbsp;</a>
                        instead.
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <img src={contactus} alt='contact us' />
                </div>
            </div>
            <div className=".mt-12">
                <div>
                    <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            value={name} onChange={e => setName(e.target.value) }  type="text" placeholder="" />
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Company Name</span>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            value={company} onChange={e => setCompanyName(e.target.value)} type="text" placeholder="" />
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            value={email} onChange={e => setEmail(e.target.value)} type="email" />
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                    <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                              value={message} onChange={e => setMessage(e.target.value)}  type="text" placeholder="" />
                </div>
                <div className="mt-8">
                    <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" 
                            onClick={e => submit(e)} >
                        Send Message
                    </button>
                </div>
                    </div>
                </div>
            </div>

        )
}

export default Contact