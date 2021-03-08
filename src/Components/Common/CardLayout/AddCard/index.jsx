import React, { useState } from "react";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/fa/plus";
import Modal from "../../Modal/BillForm";
import { CardWrapper } from "./style";

const Index = ({ setModalChange }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <CardWrapper
        onClick={() => setOpenModal(true)}
        onKeyPress={() => setOpenModal(true)}
      >
        <div className="round__icon">
          <Icon icon={plus} size={25} />
        </div>
        <h2>Add a new bill</h2>
      </CardWrapper>
      {openModal && (
        <Modal
          setModalChange={setModalChange}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default Index;
