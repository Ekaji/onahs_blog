import anyleaseDesktop from '../../src/images/desktop/anyleaseDesktop.png'
import landadotDesktop from '../../src/images/desktop/landerdotDesktop.png'
import bookmarkDesktop from '../../src/images/desktop/bookmarkDesktop.png'
import empDesktop from '../../src/images/desktop/empDesktop.png'
import dragnote from '../../src/images/desktop/dragnote.png'
import tacafrica from '../../src/images/desktop/tacafrica.png'
import SOHK from '../../src/images/desktop/SOHK.png'


export const projects = [
    {
        name: 'TAC Africa',
        description: 'website for the TAC Africa NGO ',
        link: 'https://tacafrica.org',
        image: tacafrica,
        repo: '',
        stack: ['nextjs', 'tailwindcss'],
        status: ''
    },
    {
        name: 'The School of hard knocks',
        description: 'website for the school of hard knocks Nigeria ',
        link: 'https://www.schoolofhardknocks.com.ng/',
        image: SOHK,
        repo: '',
        stack: ['nextjs', 'tailwindcss'],
        status: 'ongoing'
    },
    {
        name: 'landadot',
        description: 'photography website for photographer isaac also known as landerdot',
        link: 'https://landadotphotography.vercel.app/',
        image: landadotDesktop,
        repo: '',
        stack: ['react', 'tailwindcss'],
        status: ''
    },
    {
        name: 'anylease',
        description: 'anylease is a website for leasing out equipments, the project was developed in collaboration with other developers during the zuri internship',
        link: 'https://anylease35.netlify.app/',
        image: anyleaseDesktop,
        repo: '',
        stack: ['html', 'css', 'javascript'],
        status: ''
    },
    // {
    //     name: 'employee management portal',
    //     description: '',
    //     link: 'https://eka-management-app.herokuapp.com/',
    //     image: empDesktop,
    //     repo: '',
    //     stack: ''
    // },
    // {
    //     name: 'dragnote',
    //     description: 'simple app for taking notes built using react native',
    //     link: '',
    //     image: dragnote,
    //     repo: 'https://github.com/Ekaji/dragonnote',
    //     stack: ''
    // }, 
    {
        name: 'bookmark landing page',
        description: 'landing page for a bookmark manager, it is one of the challenges that can be found on frontend mentors',
        link: 'https://front-end-mentor-challenges-delta.vercel.app/bookmark-landing-page/index.html',
        image: bookmarkDesktop,
        repo: '',
        stack: ['html', 'css', 'javascript'],
        status: ''
    },
];
