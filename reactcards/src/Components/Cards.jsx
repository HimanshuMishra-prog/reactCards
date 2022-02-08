import { Card,CardImg,CardBody,CardTitle,CardText,Button } from "reactstrap"
import '/home/josh/React/reactCards/reactcards/src/index.css';

const ProjectCard = (props) =>{
    return(
    <Card className="card" >
    <CardImg
      alt="Card image cap"
      src={props.imgsrc}
      top
      width = "100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {props.name}
      </CardTitle>
      
      <CardText>
        {props.text}
      </CardText>
      <Button>
        Explore
      </Button>
    </CardBody>
  </Card>
    );
};


export default ProjectCard;