import React from 'react'
import  { useEffect,  } from "react"
import locomotiveScroll from "locomotive-scroll"

const Locomotive = ({children}) => {
    const scrollRef = React.createRef()

    useEffect(() => {
        setTimeout(() => {
const locomotive_scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true,
             smartphone: {
                smooth: true,
            },
            tablet: {
                smooth: true
            }
        })
        locomotive_scroll.update()

        window.scroll = locomotive_scroll

    return () => {
      if (locomotive_scroll) locomotive_scroll.destroy();
    };
        }, 200)
        

    })
    return (
        <div className='scrollRef' ref={scrollRef} >
         <div id="js-scroll">
          {children}
         </div>
        </div>
    )
}

export default Locomotive
