import { useCardStore } from "../../Stores/CardStore";
import { IFidelityCard } from "../../Types/IFidelityCard";
import Stamp from "./../../Assets/stamp.png";
import "./styled.css";

const FidelityCard = ({ id, user, stamps }: IFidelityCard) => {
  const { card, setCard } = useCardStore();

  const handleStampClick = (id: number) => {
    const date = new Date();

    const stampsUpdated = card?.stamps?.map((s) => {
      if (s.id === id) {
        return { ...s, date: s.date ? undefined : date };
      }
      return s;
    });

    const cardUpdated = { ...card, stamps: stampsUpdated };

    setCard(cardUpdated);
  };
  return (
    <div className="fidelity-card" id={"card-" + id}>
      <p className="fidelity-name">{user?.name}</p>
      <div className="fidelity-stamps">
        {stamps?.map((stamp, i) => (
          <div
            onClick={() => handleStampClick(stamp.id)}
            key={i}
            className={stamp.date ? "box marked" : "box not-marked"}
          >
            {stamp.date ? <img src={Stamp} className="stamp" /> : null}
            {stamp.date ? new Date(stamp.date).toISOString().split("T")[0] : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FidelityCard;
