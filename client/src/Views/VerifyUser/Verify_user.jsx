import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SuccesModal from "../../Components/SuccessModal/SuccesModal";
import { Navigate } from "react-router-dom";
export default function Verify_user(props) {
  Navigate = useNavigate();
  const { infouser } = useParams();
  const { MessageModal } = props;
  const { SetMessageModal } = props;
  const [ShowModalSuccess, SetShowModalSucess] = useState(true);
  SetMessageModal("Bien hecho! se ha verificado tu cuenta.");
  Navigate("/");
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
