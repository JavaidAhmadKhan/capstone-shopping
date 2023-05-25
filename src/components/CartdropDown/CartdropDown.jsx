import Button from "../Button/Button"

const CartdropDown = () => {
    return (
        <div className="absolute w-[240px] h-[340px] flex flex-col p-[20px] bg-white top-[90px] right-[40px] z-10 border-2 border-gray-400 rounded">
            <div className="h-[240px] flex flex-col overflow-scroll" />
            <Button buttonType='inverted'>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartdropDown
