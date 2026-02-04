// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { buyOrange, buyApple } from "../Redux/Fruit/fruitAction";
import { buySandwich } from "../Redux/Food/foodAction";


// const Mystore = ({apple,orange,buyApple,buyOrange}) => {
const Mystore = () => {

    const {apple , orange} = useSelector((state)=>state.fruit);
    const {sandwich} = useSelector((state)=>state.food);
    const dispatch = useDispatch()

    return(
        <div>
            <h5 className="text-center mt-2">تعداد سیب ها: {apple}</h5>
            <h5 className="text-center mt-2">تعداد پرتقال ها: {orange}</h5>
            <h5 className="text-center mt-2">تعداد ساندویچ ها: {sandwich}</h5>
            <div className="text-center mt-3">
                {/* <button className="btn btn-success mx-3" onClick={buyApple}>خرید سیب</button>
                <button className="btn btn-warning mx-3" onClick={buyOrange}>خرید پرتقال</button> */}
                <button className="success mx-3 bg-green-500" onClick={()=>dispatch(buyApple())}>خرید سیب</button>
                <button className="warning mx-3 bg-orange-400" onClick={()=>dispatch(buyOrange())}>خرید پرتقال</button>
                <button className="info mx-3 bg-sky-400" onClick={()=>dispatch(buySandwich())}>خرید ساندویچ</button>
            </div>
        </div>
    )
};


// در کامپوننت کلاسی از روش زیر استفاده میشه:

// const stateToProps = state => {
//     return {
//         apple: state.apple,
//         orange: state.orange
//     }
// }

// const dispatchToProps = dispatch => {
//     return {
//         buyApple: () =>dispatch(buyApple()),
//         buyOrange: () =>dispatch(buyOrange())
//     }
// }


// export default connect(stateToProps,dispatchToProps)(Mystore);
export default Mystore;