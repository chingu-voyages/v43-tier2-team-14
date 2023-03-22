export const dummyList = [
  /*   "item one",
  "item two",
  "item three",
  "item four",
  "item five",
  "item six", */
]
const WishList = () => {
  return (
    <>
      <h2 className="text-4xl capitalize font-bold my-8">wishlist</h2>

      {dummyList.map((b, i) => (
        <h2 key={i}>{b}</h2>
      ))}
    </>
  )
}
export default WishList
