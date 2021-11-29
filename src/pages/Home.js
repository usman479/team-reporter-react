
import { Link } from "react-router-dom";
import { Col, Row, Button, Affix } from 'antd';
import { useState } from "react";

export const addButton = { fontSize: "30px" }

const Home = () => {

    const [top, setTop] = useState(600);

    return (
        <div>
            <Row>
                <Col span={24} align="right">
                    <Button type="primary"><Link to="/">Logout</Link></Button>
                </Col>
                <Col align="right">
                    <Affix offsetTop={top}>
                    <Button type="primary" onClick={() => setTop(top + 10)}>
                        Affix top
                    </Button>
                </Affix>

                </Col>

                <br />

            </Row>


        </div>
    )
}

export default Home;