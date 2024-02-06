import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import SuccesModal from "../../Components/SuccessModal/SuccesModal";

export default function Verify_user(props) {
  Navigate = useNavigate();
  const { infouser } = useParams();
  const { MessageModal } = props;
  const { SetMessageModal } = props;
  const [ShowModalSuccess, SetShowModalSucess] = useState(true);
  SetMessageModal("Bien hecho! se ha verificado tu cuenta.");

  return (
    <div>
      <SuccesModal
        MessageModal={MessageModal}
        ShowModalMessage={ShowModalSuccess}
        SetShowModalMessage={SetShowModalSucess}
      ></SuccesModal>
    </div>
  );
}
