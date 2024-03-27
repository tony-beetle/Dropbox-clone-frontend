import { Card, CardBody } from "reactstrap";


const TopCards = (props) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex ">
          <div className={`circle-box lg-box d-inline-block ${props.bg}`}>
            <i className={props.icon}></i>
          </div>
          <div className="ms-3">
            <h5 className="mb-0 font-weight-bold">{props.earning}</h5>
            <small className="text-muted">{props.subtitle}</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TopCards;
