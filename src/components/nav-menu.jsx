import { useEffect, useRef, useState } from 'react';



export default function NavMenu({ setService }) {

    const windowWidth = useRef(window.innerWidth)
    const menuRef = useRef();
    const [menuState, setMenuState] = useState(windowWidth.current > 768);


    const menuItems = [
        {
            key: 1,
            anchor: "#proposal",
            item: "Proposta",
        },
        {
            key: 2,
            anchor: "#products",
            item: "Produtos",
        },
        {
            key: 3,
            anchor: "#contact",
            item: "Contato",
        }
    ]

    function handleMenuState() {
        setMenuState(prevState => !prevState)
    }


    useEffect(() => {
        function updateSize() {
            windowWidth.current = window.innerWidth;
            setMenuState(windowWidth.current > 768)
        }

        if (windowWidth.current > 768) {
            menuRef.current.classList.remove("animate-appear")
        }

        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return (
        <nav className='relative z-10'>

            <div className='md:sr-only w-10 h-10 flex flex-col justify-center align-center gap-2 cursor-pointer' onClick={handleMenuState}>
                <span className='w-full h-px block bg-white rounded-md'></span>
                <span className='w-full h-px block bg-white rounded-md'></span>
                <span className='w-full h-px block bg-white rounded-md'></span>
            </div>

            {
                menuState &&
                <ul ref={menuRef} className="bg-black/80 md:bg-transparent mt-4 ring-white ring-1 px-4 py-3 backdrop-blur md:backdrop-blur-none rounded-md absolute right-0 animate-slideup md:flex md:relative md:gap-5 md:ring-0 md:ring-transparent md:flex-row">
                    {
                        menuItems.map(({ key, anchor, item }, idx) =>
                            <li className="py-1 w-full" key={key} >
                                <a href={anchor} onClick={e => {
                                    e.preventDefault();

                                    document.querySelector(anchor).scrollIntoView();
                                }}
                                    className={`w-full px-1.5 py-1 block brightness-75 hover:brightness-100 transition-all text-xl font-bold ${idx < menuItems.length - 1 && 'border-b-white border-b-2'} md:border-b-0`}>
                                    {item}
                                </a>
                            </li>
                        )
                    }
                </ul>
            }

        </nav>
    )
}