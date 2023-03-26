import { Link } from "react-router-dom"

const HomeBtn = () => {
  return (
    <button className="my-5 px-4 py-2 rounded-md border-2 border-red-400 capitalize duration-300 hover:bg-red-500 hover:text-white">
      <Link to="/">return homepage</Link>
    </button>
  )
}
export default HomeBtn
