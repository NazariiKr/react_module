import {ICarts} from "../../models/ICarts.ts";

type CartType={
    item:ICarts
}
const CartComponent = ({item}:CartType) => {
    return (
        <div>
            {item.totalProducts}

        </div>
    );
};

export default CartComponent;