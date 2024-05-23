import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { formatDate } from "../utils/helpers";
import avatars from "../img/index";

const Question = ({ question, isAnswered }) => {

    const navigate = useNavigate();

    const handleSeeQuestion = () => {
        return navigate("questions/" + question.id)
    }

    function getUserAvatarName(avatar) {
      const avaName = avatar.toString();
      return avaName.split('/')[3].split('.')[0];
    }

  return (
    <div className="mx-auto d-inline-block">
      <Card className={isAnswered ? "question-card bg-secondary-subtle" : "question-card bg-success-subtle"} 
                                style={{ width: "12rem" }}>

        <Card.Img variant="top mx-auto rounded-circle" src={avatars.filter((a) => 
                getUserAvatarName(a) === question.author
              )} 
               style={{ width: "120px", height: "80px"}} />
        <Card.Body className="text-center">
          <Card.Title><strong>{question.author}</strong></Card.Title>
          <Card.Text> Created: {' '}
            {formatDate(question.timestamp)}
          </Card.Text>
          <Button variant="primary w-100" onClick={handleSeeQuestion}>See</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default connect()(Question);

