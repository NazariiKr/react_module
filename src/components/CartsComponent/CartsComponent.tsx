import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.servic.tsx";
import {IBaseResponseModel} from "../../models/IBaseResponseModule.ts";
import {ICarts} from "../../models/ICarts.ts";
import CartComponent from "../CartComponent/CartComponent.tsx";


const CartsComponent = () => {
    const {id}=useParams();

    const [cart, setCart] = useState<ICarts[]>([])

    useEffect(() => {
        getAll<IBaseResponseModel & {carts:ICarts[]}>(`/carts/user/${id}`)
            .then(({carts})=>setCart(carts))
    }, [id]);


    return (
        <div>
            {cart.map(cart => <CartComponent key={cart.id} item={cart}/>)}

        </div>
    );
};

export default CartsComponent;