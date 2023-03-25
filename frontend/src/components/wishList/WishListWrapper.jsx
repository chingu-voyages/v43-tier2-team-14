import WishListItem from "./WishListItem"

export const dummyList = [
  "item one",
  "item two",
  "item three",
]
const WishListWrapper = () => {
  return (
    <>
      <h2 className="text-4xl capitalize font-bold my-8">wishlist</h2>
      {dummyList.map((b, i) => (
        <div className="wrapper">
        <WishListItem key={i} b={...b}/>
        </div>
      ))}
    </>
  )
}
export default WishListWrapper
