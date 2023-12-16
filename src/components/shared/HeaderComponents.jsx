import Logo from '../../assets/logo_big.png'

export default function HeaderComponent(){
    return(
        <header className=" bg-gray-100 flex justify-between items-center max-h-sm p-2 px-14">
            <div className='flex items-center gap-3'>
                <img 
                    className=" max-h-20 max-w-2xl"
                    src={Logo}
                    alt="Imagen Shoppy Max" />
                <span className="font-black uppercase text-2xl">Shopper</span>
            </div>
            <ol className="flex gap-5 font-bold">
                <li className="hover:border-b border-orange-500">Shop</li>
                <li className="hover:border-b border-orange-500">Men</li>
                <li className="hover:border-b border-orange-500">Women</li>
                <li className="hover:border-b border-orange-500">Kids</li>
            </ol>
            <div>
            <button className="rounded-lg font-bold p-4 text-center bg-white hover:bg-gray-200 transform transition-transform duration-300 ease-in-out hover:scale-105">
                Login
            </button>
            </div>
        </header>
    )

}