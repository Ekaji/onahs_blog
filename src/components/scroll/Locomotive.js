import React from 'react'
import  { useEffect,  } from "react"
import locomotiveScroll from "locomotive-scroll"

const Locomotive = ({children}) => {
    const scrollRef = React.createRef()

    useEffect(() => {
        const locomotive_scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        })
        locomotive_scroll.update()

        window.scroll = locomotive_scroll

    return () => {
      if (locomotive_scroll) locomotive_scroll.destroy();
    };

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
