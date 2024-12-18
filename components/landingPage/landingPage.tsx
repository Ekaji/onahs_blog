import React, { useState, useEffect } from "react"

const LandingPage = () => {

    const helloArray = [
        { 
        // fixes bug where first value is not read
        },
        { 
            English: 'Hello'
        },
        {
            Yoruba: 'Bawo ni'
        },
        {
            Igbo: 'Kedu'
        }, {
            Nigerian_Pidgin: 'How fa'
        }, {
            Hausa: 'Sannu'
        }
    ];

    const [greeting, setGreeting] = useState<unknown>((Object.values(helloArray[0])))

    useEffect(() => {
        let i = 0;
        const updateGreeting = () => {
            setGreeting(helloArray[i]);
            setTimeout(() => {
                if (i == helloArray.length - 1)  i = 0;
                    i++;
                updateGreeting()
            }, 4000);
        };
        updateGreeting()
        return() => clearTimeout(updateGreeting as unknown as number);
    }, [])


    return(
        <div className='flex justify-center pt-10 h-screen md:my-auto w-full 
            .bg-gradient-to-tr .from-indigo-300 .via-indigo-300 .to-pink-400
            .bg-red-300 
            text-indigo-700
            ' 
            id='home' data-scroll-section >
            <div className="flex flex-col items-center mt-8 md:my-auto">
                <div className="w-3/4 anton md:h-5/6">
                    <div className="text-3xl"> {(Object.values(greeting as string))}</div>
                    <div className="text-6xl uppercase"> im 
                        <span className=""> ekaji onah,
                        </span> CREATIVE WEB DEVELOPER BASED IN ABUJA, NIGERIA. 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default LandingPage
