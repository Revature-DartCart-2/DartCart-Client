
import axios from "axios"
import { ShopProduct } from "./models"
import { useEffect, useState } from "react"
import { ShopProductCard } from "./ShopProductCard"
import Header from "./Header"
import Footer from "./Footer"
import RootState from "../common/store"
import { ShopProductPage } from "./ShopProductPage"
import { useDispatch, useSelector } from "react-redux"
//import { useGetShopProductByIdQuery, useGetAllShopProductsQuery } from "../services/APIQuery"
import { fetchShopProducts, selectShopProducts, selectShopProductById } from '../common/ShopProductSlice'


//const MOCK_SERVER = "https://59749c7b-15b7-4456-b980-124c0bb0d8b0.mock.pstmn.io"

const ShopProductDisplay = () => {

    
    //const state = useLocation()
    //const [viewProducts, setProducts ] = useState<ShopProduct[]>([])
    const dispatch = useDispatch()
    
    //const [showPID, setPID] = useState(state)

    //Incorrect syntax
    const ReduxShopProducts = useSelector((state) => selectShopProductById(state, 1))
    const list = []
    //list.push(ReduxShopProducts)

    //const ReduxShopProducts = useSelector(selectShopProducts)


    console.log(ReduxShopProducts)
    // const push = []
    // push.push(ReduxShopProducts)
    //console.log(state)

    useEffect(()=> {
        dispatch(fetchShopProducts()) // places return value into REDUX global state
    }, [])
    

    // async function getProducts() {

    //     // if(viewProducts.length < 1){
    //     //     const response = await axios.get(MOCK_SERVER+"/ShopProducts")
    //     // .then(request => setProducts(request.data))
    //     // console.table(response)
        
    //     // }
    //     console.log(ReduxShopProducts)
        
    // }



    //selectShopProducts
    // { viewProducts.length > 0 ?
    //     viewProducts.map(shopproduct => {
    //         return <ShopProductCard ShopProduct={shopproduct}></ShopProductCard>
    //     })
    //     :   ""
    //    }//<ShopProductPage></ShopProductPage>

    //{ReduxShopProducts.map((ShopProduct) => {return(<h1>{ShopProduct.shop_id}</h1>)})}

    return (

        <>
        <Header></Header>
            
            
           {ReduxShopProducts?.shop_product_id}

 
        <Footer></Footer>
        </>
        
    )
}

export default ShopProductDisplay;