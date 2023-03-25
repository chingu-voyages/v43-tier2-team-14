import { Link } from "react-router-dom"
import GenericBtns from "../components/UI/GenericBtns"
import { ImBook } from "react-icons/im"

const Home = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl bg-blue-300 font-bold underline mb-4">
        Welcome To The Main Project of Team-14
      </h1>
      <Link to="books">
        <GenericBtns title="to library" icon={<ImBook />} />
      </Link>
    </section>
  )
}
export default Home
