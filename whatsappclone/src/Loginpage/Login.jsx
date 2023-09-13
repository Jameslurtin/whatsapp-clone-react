import React, { useEffect, useState } from 'react';
import whatsappicon from './whatsappicon/whatsapplogo.png'
import QRCode from 'qrcode';

function Login() {
    const [qrcode, setqrcode] = useState('')
    const generateQR = async text => {
        try {
            setqrcode(await QRCode.toDataURL(text))
        } catch (err) {
            console.error(err)
        }

    }
    useEffect(() => {
        generateQR("Scan for whatsapp web")

    }, [])
    return (
        <div className='flex flex-col items-center' >

            <div className='w-full h-72 bg-green-800'>
                <div className='flex  items-center pl-28'>
                    <img className='w-28' src={whatsappicon}></img>
                    <div className='text-white text-2xl'>WhatsappWeb</div>
                </div>
            </div>

            <div className='bg-white w-9/12  -mt-16 '>
                <div className=' flex justify-between px-36 py-10'>
                    <div className=''>
                        <div className='font-semibold text-2xl '>To use WhatsApp on computer:</div>
                        <div className='pt-10'>
                            <div className='pt-4'>1. Open WhatsApp on your phone</div>
                            <div className='pt-4'>2.Tap Menu : or Settings © and select WhatsApp Web</div>
                            <div className='pt-4'>3. Point your phone to this screen to capture the code</div>
                        </div>
                        <div className='text-green-700 pt-10'>Need help to get started?</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className="w-[300px] h-[300px]" src={qrcode} alt="" />
                        <label htmlFor="">
                            <input type="checkbox" />

                            Keep me signed in
                        </label>

                    </div>
                </div>

                <div className='flex justify-center'>
                    <iframe width="873" height="491" src="https://www.youtube.com/embed/tAmtscKT2xE" title="How To Use Whatsapp (Guide)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>

    )
}

export default Login