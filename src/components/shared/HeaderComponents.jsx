export default function HeaderComponent(){
   
    return(
        <header className=" bg-gray-100 flex justify-between items-center max-h-sm p-2">
            <img 
                className=" max-h-20 max-w-2xl"
                src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/652981/regular_e471b45375221f0259d55de8db340d5e.png"
                alt="Imagen Shoppy Max" />
            <ol className="flex gap-3 font-bold ">
                <li className="hover:border-b border-orange-500">Shop</li>
                <li className="hover:border-b border-orange-500">Men</li>
                <li className="hover:border-b border-orange-500">Women</li>
                <li className="hover:border-b border-orange-500">Kids</li>
            </ol>
            <div>
                <button className=" rounded-lg font-bold p-4 text-center bg-white hover:bg-gray-300">Login</button>
            </div>
        </header>
    )

}