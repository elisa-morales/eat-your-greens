export default function Instructions(props) {
  return (
    <div className="mx-3 flex gap-3 text-sm">
      <p className="bold">{props.number}</p>
      <p className="text-justify">{props.description}</p>
    </div>
  )
}
