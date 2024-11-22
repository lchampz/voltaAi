import { useEffect, useState } from "react";
import { useUserStore } from "../../Stores/UserStore";
import { IUser } from "../../Types/IUser";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { useCardStore } from "../../Stores/CardStore";
import { IFidelityCard } from "../../Types/IFidelityCard";


const UserTable = () => {
  const { getAllUsers, setUser } = useUserStore();
  const { getAllCards, setCard } = useCardStore();
  const [users, setUsers] = useState<string[][]>([]);
  const [cards, setCards] = useState<IFidelityCard[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const userResponse = await getAllUsers();
      const cardResponse = await getAllCards();
      
      const objectToArray = userResponse.data.map((user: IUser) => {
        return Object.values(user);
      });

      setUsers(objectToArray);
      setCards(cardResponse.data);
    }

    getData();
  }, [])

  const handleCellClick = (id: string) => {
    const userById = users.find(user => user[0] === id);
    if (userById) {
      setUser({
        id: userById[0],
        name: userById[1],
        email: userById[2]
      }); 

      const foundCard = cards.find(card => card.user && card.user.id === userById[0]);
      if (foundCard) {
        setCard(foundCard);
      }
    }

    navigate("/user");
  }

  
  return (
    <div>
      <h1>Tabela de usuários - Clique na linha para manipular o cartão fidelidade!</h1>
       <Table onRowClick={handleCellClick} data={users} header={["ID", "Nome", "Email"]}/>
       <button onClick={() => navigate("/register")}>Registrar novo usuário</button>
    </div>
  );
};

export default UserTable;
