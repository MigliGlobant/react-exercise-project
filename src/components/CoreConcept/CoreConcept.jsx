import "./CoreConcept.css";

/*export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );*/
/* Para adaptar la clase de CoreConcept.css en este componente, agrega la clase al elemento raíz <li>. 
Por ejemplo, si tu archivo CoreConcept.css define una clase llamada "core-concept", asígnala al <li>: */

export default function CoreConcept(props) {
  return (
    <li className="core-concepts__item">
      <img
        className="core-concepts__image"
        src={props.image}
        alt={props.title}
      />
      <h3 className="core-concepts__title">{props.title}</h3>
      <p className="core-concepts__description">{props.description}</p>
    </li>
  );
}
