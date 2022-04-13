import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

interface MealProps {
  id: string;
  name: string;
  price: number;
  description: string;
}

const MealItem = (props: MealProps) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;