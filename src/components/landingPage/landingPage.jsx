import React, { useState, useEffect } from "react"
// import Emoji from '../emoji'
// import Menu from '../menu/menu'
// import VideoComponent from "../video_component/video_component";

const LandingPage = () => {

    const helloArray = [
        { 
        // fixes bug where first value is not read
        },
        { 
            English: 'Hello'
        },
        {
            Yoruba: 'Bao ni'
        },
        {
            Igbo: 'Kedu'
        }, {
            Nigerian_Pidgin: 'How fa'
        }, {
            Hausa: 'Sannu'
        }
    ];

    const [greeting, setGreeting] = useState((Object.values(helloArray[0])))

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
        return() => clearTimeout(updateGreeting);
    }, [])


    return(
        <div className="flex justify-center h-90vh mb-24 md:h-70vh md:my-auto">
            <div className="flex flex-col items-center md:my-auto">
                <div className="w-3/4 anton md:h-5/6">
                    <div className="text-3xl"> {(Object.values(greeting))}</div>
                    <div className="text-6xl uppercase"> i'm 
                        <span className=""> ekaji onah,
                        </span> CREATIVE WEB DEVELOPER BASED IN ABUJA, NIGERIA. 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default LandingPage