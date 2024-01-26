import Cards from "../../Components/Cards/Cards";
import "./Adoptar.css";
import React from 'react';

export default function Rescatado() {
  return (
<div>
    <>
      <div className="img-container">
        <img className="banner-img" src="https://lh3.googleusercontent.com/pw/ABLVV86TjvGocfLS7-Esdg2l4zFj_AmkiJlZKyqEeE5Fu2fIxAzUVzC73dsuJsqsbSZoEYtTAsaOolNEhHUG1zFUhY0GL9GrOn4PpwNgDdfjU_nZMZoPJQFvvMCbAOBXzFFZ8WSNkcAKqi9uvNuwIlHxFvj7BcdY2TP5Ier3NtsxNdI5xdCAtHqhjVHZvrP6cWMTZOhRMS1r5oSJ-GGwr61rpDHagJHrRoTIr6jUcypENfkrcC7R-Hf3Q3yDo_jTF3aJ74-8IeZD7P-ZGCSyDW2kiguGbZcf7_ajkchQBJchcjGFLT0B4rhC7DFBHIubuSzjFxj61LbkM0-omOnrflMTVglfNLr-Oxa0yRDlNXCpGRwbiHRQhe_r9mWtgKhF0Rd3_HurkiqjXd8qUagjnLhQuoePaO79GODqMZs8RwvLbv0hzbW4kt5mZJBUYDLMYJvRQSTe2DSv7_d-Nrl-vxLQcPbyU1xHn6pNdCRXT-tDIoR12bNvUBV-6TJFhbacy3I_B5KhTC5oo7L7feUmLJrktUExbudozOX7Si7hVfaJ3gij7MmRwM3v1iC71EqLAOIjTFRi38wPREJNyUwJvgpQBTpB-zhO0eoPZjSbnhsMSI-A6xJnQ4uG44tZSc0VNWzuZKse1rY6oyxyrOJlObbyrZVT3-gZDEZqmkLyz2fE1vd_6MBLOfB0klZCLwTFPCdIVhXvbMETSD1FGpsH6Su8KpCbvs40sC_2iQhkgT-DqnGihfLhTvLpa43nYZVP5BRm1Ut1ZFxuKLyCtHNX6uo9yMWk9XvfqIacbDU0zBEJCOJYYicVAnAFRb0XizcrZHmw1NtYYGPxxXzF9p4OlRe9YaO-2S5WJzGcFBbYSziLFaLVkQIYKijoNy42J95VJteodXyu-kdPoIYj-AD0YMVAa92y0C3_=w3841-h484-s-no-gm?authuser=0" alt="dogs-image"/>
      </div>

      <div className="row" style={{ columnGap: "50px" }}>
        <div className="col-2"><Cards /></div>
        <div className="col-2"><Cards /></div>
        <div className="col-2"><Cards /></div>
        <div className="col-2"><Cards /></div>
        <div className="col-2">
          <div className="button-container-2">
            <button type="button" className="btn btn-dark btn-sm">Dark</button>
            <button type="button" className="btn btn-dark btn-sm">Dark</button>
            <button type="button" className="btn btn-dark btn-sm">Dark</button>
            <button type="button" className="btn btn-dark btn-sm">Reset</button>
          </div>
        </div>

      </div>
    </>
    </div>
    );
}