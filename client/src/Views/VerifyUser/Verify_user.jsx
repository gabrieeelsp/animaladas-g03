import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SuccesModal from "../../Components/SuccessModal/SuccesModal";

export default function Verify_user(props) {
  const { infouser } = useParams();
  const navigate = useNavigate();
  const { MessageModal } = props;
  const { SetMessageModal } = props;
  const [ShowModalSuccess, SetShowModalSucess] = useState(true);
  SetMessageModal("Bien hecho! se ha verificado tu cuenta.");
  const navigateto = () => {
    navigate("/");
  };
  return (
    <div>
      <SuccesModal
        MessageModal={MessageModal}
        ShowModalMessage={ShowModalSuccess}
        SetShowModalMessage={SetShowModalSucess}
        navigateto={navigateto}
      ></SuccesModal>
    </div>
  );
}
/*terminado*/
