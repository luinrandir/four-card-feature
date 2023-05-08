import { Category } from "../../types/Category";
import "./Card.css";
function Card({
  category,
  borderColor,
}: {
  category: Category;
  borderColor: "red" | "cyan" | "orange" | "blue";
}) {
  return (
    <div className={`card ${borderColor}`}>
      <h2>{category.title}</h2>
      <p>{category.description}</p>
      <img src={`icons/${category.iconPath}`} alt={category.iconDescription} />
    </div>
  );
}

export default Card;
