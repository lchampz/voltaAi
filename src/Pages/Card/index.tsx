import { useNavigate } from "react-router-dom";
import { deleteCard, deleteUser, updateCard } from "../../Api/Requests";
import FidelityCard from "../../components/FidelityCard";
import { useCardStore } from "../../Stores/CardStore";

const CardPage = () => {
  const { card } = useCardStore();
  const navigate = useNavigate();

  const update = () => {
    if (card) {
      updateCard(card);
    }
  };

  const handleDeleteUser = () => {
    if (card) {
      deleteCard(card);
      if (card.user) {
        deleteUser(card.user);
      }
    }

    navigate("/");
  };

  return (
    <>
      <FidelityCard id={card?.id} user={card?.user} stamps={card?.stamps} />
      <button onClick={update}>Atualizar cartão</button>
      <button onClick={handleDeleteUser}>Deletar usuário</button>
    </>
  );
};

export default CardPage;
