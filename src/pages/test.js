import React from "react"

const Test = () => {
    return(
<div class="bg-gray-100 font-sans leading-normal tracking-normal">
    {/* <nav id="header" class="fixed w-full z-10 top-0">
        <div id="progress" class="h-1 z-20 top-0" style={{background: 'linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)'}}></div>
        <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
            <div class="pl-4">
                <a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
                    Minimal Blog
                </a>
            </div>
            <div class="block lg:hidden pr-4">
                <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="nav-content">
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                    <li class="mr-3">
                        <a class="inline-block py-2 px-4 text-gray-900 font-bold no-underline" href="#">Active</a>
                    </li>
                    <li class="mr-3">
                        <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">link</a>
                    </li>
                    <li class="mr-3">
                        <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">link</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> */}

    {/* <!--Container--> */}
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
        <div
            class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{fontFamily: "Georgia,serif"}} >
            {/* <!--Title--> */}
            <div class="font-sans">
                <p class="text-base md:text-sm text-green-500 font-bold">&lt;
                    <a href="#" class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</a>
                </p>
                <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Welcome to Minimal Blog</h1>
                <p class="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p>
            </div>

            <p class="py-6">
                👋 Welcome fellow
                <a class="text-green-500 no-underline hover:underline" href="https://www.tailwindcss.com">Tailwind CSS</a>
                and miminal monochrome blog fan. This starter template provides a starting point to create your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.
            </p>

            <p class="py-6">The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>


            {/* <h1 class="py-2 font-sans">Heading 1</h1>
            <h2 class="py-2 font-sans">Heading 2</h2> */}

            <p class="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>

            <ol>
                <li class="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
                <li class="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
                <li class="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
            </ol>


        </div>

        {/* <!--Tags --> */}
        <div class="text-base md:text-sm text-gray-500 px-4 py-6">
            Tags:
            <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
            .
            <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
        </div>

        {/* <!--Divider--> */}
        <hr class="border-b-2 border-gray-400 mb-8 mx-4" />

                        <div class="font-sans flex justify-between content-center px-4 pb-12">
                            <div class="text-left">
                                <span class="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span>
                                <br />
                                    <p>
                                        <a href="#" class="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Blog title</a>
                                    </p>
                                </div>
                                <div class="text-right">
                                    <span class="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span>
                                    <br />
                                        <p>
                                            <a href="#" class="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Blog title</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

    )
}

export default Test