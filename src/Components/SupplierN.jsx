import "./SupplierN.css";
import { Link } from "react-router-dom";
import { fetchPartners } from "../Fetch";
import { useState, useEffect } from "react";

export function SupplierN(props) {
  const [details, setDetails] = useState();

  const fetchData = async function () {
    const data = await fetchPartners();
    setDetails(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {details &&
        details.data.Partner_Details.map((detail) => (
          <div key={detail.id} className="SupplierN">
            <img src={detail.partner_companylogo} alt={props.alt} />
            <div className="p">
              <p className="p1">{detail.partner_companyName}</p>
              <p className="p2">{detail.company_product}</p>
              <p className="p3">{detail.product_shortinfo}</p>
              <Link to={props.to}>Read more & Act</Link>
            </div>
          </div>
        ))}
    </>
  );
}
