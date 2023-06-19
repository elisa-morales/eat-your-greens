export default function Ingredients(props) {
  const ingredient = props.name.charAt(0).toLowerCase() + props.name.slice(1)

  return (
    <ul className="mx-7 my-2 list-disc text-sm">
      <li>{ingredient}</li>
    </ul>
  )
}
