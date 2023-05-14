import './card-list.css';
import Card from "../card/card";

const CardList = ({monsters}) => (
   <div className="card-list">
      {monsters.map(monster => {
         const {name, email, id} = monster;
         return <Card name={name} email={email} id={id}/>;
      })}
   </div>
);

export default CardList;