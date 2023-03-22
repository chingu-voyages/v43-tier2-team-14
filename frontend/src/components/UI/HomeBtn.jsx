import { Link } from "react-router-dom"

const HomeBtn = () => {
  return (
    <button className="my-5 px-4 py-2 rounded-md capitalize duration-300">
      <Link to="/">return homepage</Link>
    </button>
  )
}
export default HomeBtn
