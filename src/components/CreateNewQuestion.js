import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { handleCreateQuestion } from "../actions/questions";

const CreateNewQuestion = ({dispatch , loggedUser}) => {

    const navigate = useNavigate();

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");

    const handleOptionOneChange = (e) => {
        setOptionOne(e.target.value);
    };

    const handleOptionTwoChange = (e) => {
        setOptionTwo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = localStorage.getItem(loggedUser.id);
        if (optionOne && optionTwo) {
            dispatch(handleCreateQuestion(optionOne, optionTwo, loggedUser));
            localStorage.setItem(loggedUser.id, ++data);
            navigate("/");
        }
    };

    return (
        <div>
            <div className="text-center m-2" >
                <h3 data-testid="title1">Would You Rather</h3>
                <span data-testid="title2">Create your own poll</span>
            </div>
            <Form onSubmit={handleSubmit} >
                <div className="d-inline">
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className="text-center" data-testid="optionOneText">
                            Option one
                        </Form.Label>
                        <Form.Control data-testid="optionOne" type="text" placeholder="Option one" onChange={handleOptionOneChange} value={optionOne} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className="text-center" data-testid="optionTwoText">
                            Option two
                        </Form.Label>
                        <Form.Control data-testid="optionTwo" type="text" placeholder="Option two" onChange={handleOptionTwoChange} value={optionTwo} />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit" disabled={!optionOne || !optionTwo} data-testid="submit">
                            Create
                        </Button> 
                    </div>
                </div>
            </Form>
        </div>
    );
};

const mapStateToProps = ({authedUser}) => ({
    loggedUser: authedUser,
});

export default connect(mapStateToProps)(CreateNewQuestion);