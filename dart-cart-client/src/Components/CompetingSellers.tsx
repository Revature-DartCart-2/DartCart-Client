import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetitorProducts, selectCompetitorProductById } from "../common/CompetitorsSlice";
import "./ShopProduct.css"

interface SellerProduct {
    Seller: number//product ID
}

export function CompetingSellers ({Seller}: SellerProduct) {

    const dispatch = useDispatch()
    
    const ReduxCompetitorProducts = useSelector((state) => selectCompetitorProductById(state, 1))

    useEffect(()=> {
        dispatch(fetchCompetitorProducts(Seller)) // places return value into REDUX global state
    }, [])


    return (
        <>
            <div className="Competitors">

            {ReduxCompetitorProducts && ReduxCompetitorProducts?.product.product_id}

            </div>
            
            

        </>
    )

}