import React,{useState} from 'react'
import "./Home.css"
import Modal from "../Modal/Modal";
import DetailsUserCard from './DetailsUserCard';


export default function UserCard({ data }) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="user__card__wrapper" onClick={() => setIsOpen(true)}>
        <div className="user__details">
          <div className="user__avatar">
            <img src={data.image} alt="avatar" className="user__img" />
          </div>
          <div className="user__name">{data.name}</div>
        </div>
        <div className="user__status">
          <div
            className={
              data.status == "Alive" ? "green__circle" : "gray__circle"
            }
          ></div>
          {data.status} - {data.species}
        </div>

      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <DetailsUserCard data={data} />
      </Modal>
    </>
  );
}

