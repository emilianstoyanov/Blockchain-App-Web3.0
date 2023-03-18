import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';

const Welcome = () => {

    const connetWallet = () => {

    }
    return (
        <div className="flex w-full justify-center items-center"> 
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 jusify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Send Crypto <br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Explore the crypto world. Buy and sell cryptocurrencies easly on Krypto.
                    </p>
                        <button
                        type="button"
                        onClick={connetWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#2595e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            Connect Wallet
                        </button>
                    
                </div>
            </div>
        </div>
    );
}


export default Welcome;