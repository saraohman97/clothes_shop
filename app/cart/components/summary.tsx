'use client'

import useCart from '@/hooks/use-cart'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import {toast} from 'react-hot-toast'

const Summary = () => {
    const cart = useCart()
    const searchParams = useSearchParams()
    const items = useCart((state) => state.items)
    const removeAll = useCart((state) => state.removeAll)

    useEffect(() => {
        if(searchParams.get("success")) {
            toast.success("Payment completed.")
            removeAll()
        }

        if(searchParams.get("Canceled")) {
            toast.error("Something went wrong.")
        }
    }, [removeAll, searchParams])

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)

    const onCkeckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id)
        })

        window.location = response.data.url;
    }

    return ( 
        <>
        <h1 className="text-xl font-bold border-t mt-10">Summary</h1>
        <p>Total price: {totalPrice}</p>
        <button onClick={onCkeckout}>Checkout</button>
        </>
     );
}
 
export default Summary;