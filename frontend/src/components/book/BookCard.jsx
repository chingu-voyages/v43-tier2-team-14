import { Link } from "react-router-dom"

const BookCard = ({ id, volumeInfo }) => {
  return (
    <article className="border border-zinc-400 rounded-sm px-2 py-6 flex flex-col items-center justify-between">
      <figure className="flex cursor-pointer">
        <Link to={`${id}`}>
          <img src={volumeInfo.imageLinks.thumbnail} alt="" />
        </Link>
      </figure>
      <div className="px-4 text-center">
        <h2 className="mb-4">{volumeInfo.title}</h2>
        <p>{volumeInfo.categories}</p>
        <span>{volumeInfo.pageCount} pages</span>
      </div>
    </article>
  )
}
export default BookCard
