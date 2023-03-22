const GenericBtns = ({ title, icon }) => {
  return (
    <>
      <button className="flex items-center rounded-full px-6 py-2">
        <h3 className="capitalize">{title}</h3>
        <span className="text-xl">{icon}</span>
      </button>
    </>
  )
}
export default GenericBtns
