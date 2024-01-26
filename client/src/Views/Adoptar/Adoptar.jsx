import Cards from "../../Components/Cards/Cards";
import "./Adoptar.css";
import React from 'react';

export default function Rescatado() {
  return (
<div>
<div class="container">
  <div class="row">
    <div class="col-100">
<img className="banner-img" src="https://lh3.googleusercontent.com/pw/ABLVV85khLo7smP1e3tYqHno2gOI73OD4m8eogn4NHnHK2o5lJ-jOU0pS3-wWprO1MUTKLifFsGiQMdWe5U7XG_1rTyLbYQichHXNGR7QSspFWynDWZxTGJZ1itHBGbggXGDiDHlSw6LTnrkawXM0tFt8jyBSsqa1HOiH9rhm7IXsZToMxgjWyLAjHZIjwB2JRxBTiHDgdfj1rKN3Fbtyv_yLw7G7p-oYMOpZ_SXDJxmVBMsBqTOmKzaRO74DAxDOuTym-J2gKiqczdpxOW6kATwG_wiemwHYeEPwVB_lez6lkb_X376eiwKJPXgTLfRuLCi-ZdK1Ipv34mdbxB64wZjyEx3GJ_I0fFd7rCyyfjpusMPmGjhpPOCkcZHmsd-AYPigBeaMTZn2XsvkBb5QzgJFiRLOknAZWNF1_KAkAXs85ZS16gfmlbbYVzQYoz7bGzmkxYWFPgAGDERsuj5w7prLRY3oiom52Jwb9ld1nBnzlidwptanTQG8ya6t0Q0IQpud_3264qgezpQTv_yDtUF9DqzWEIMTZyUr06Z8WD_aQSGeg0X7AAUnxNDz0IJ0q6Rf0NZna1NtV2B24OjU1Xfe8C8jRNtbiq7i3XZDXLCMUU_BpKilS8ve1L0nd-MdO4Vfyg44bHuZ3LafyUN3uevsKVbRCXZQzb9OjLltw8sk6OW08l6TTXaGUFlUTTlxyRY39z_tjgUFEKK6fQ5OEaanZoJGQu4Z-4Ox9ipeBwDLNnC07WIW2k_2Q3s1HUn4CM4aZzdjMu7q6TnvoU78UMgAN9YWDAmVdmPeaT_lXMU8CcOFG0Q_zmPmu5jfm3HzJ4-Y2meajG8NZWjfB1antKXCUaKPVTsEEK95A8yXA7M2AHCWo-rSpBC5hsDFRqLiKGuJED6x8GiY0_n9jYHVCd09cHWUfr6=w3841-h484-s-no-gm?authuser=0" alt="dogs-image"/></div>
    <div class="col-10">
    <div className="row w-100">
        <div className="col-6"><Cards /></div>
        <div className="col-6"><Cards /></div>
        <div className="col-6"><Cards /></div>
        <div className="col-6"><Cards /></div>
        </div>
</div>
<div className="bg-dark col-1 my-3 d-flex flex-column justify-content-center" style={{ width: "auto", height: "500px", borderRadius: "20px" }}>
  <button type="button" className="btn btn-warning btn-sm m-3">By Size</button>
  <button type="button" className="btn btn-warning btn-sm m-3">By Age</button>
  <button type="button" className="btn btn-warning btn-sm m-3">By Type</button>
  <button type="button" className="btn btn-warning btn-sm m-3">Friendly</button>
  <button type="button" className="btn btn-warning btn-sm m-3">Reset Filters</button>
</div>

</div>
</div>
    </div>
    );
}