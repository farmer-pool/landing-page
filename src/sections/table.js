import React from "react";
import { Button, Card, CardHeader, Table, Row, Col } from "reactstrap";

const ShowData = () => {
  return (
    <Col className="mb-5 mb-xl-0" xl="8">
      <Card className="shadow">
        <CardHeader className="border-0">
          <Row className="align-items-center">
            <div className="col">
              <h3 className="mb-0">Page visits</h3>
            </div>
            <div className="col text-right">
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="sm"
              >
                See all
              </Button>
            </div>
          </Row>
        </CardHeader>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Block #</th>
              <th scope="col">Header Hash</th>
              <th scope="col">Farm</th>
              <th scope="col">Luck</th>
              <th scope="col">Date</th>
              <th scope="col">Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">9142</th>
              <td>b0b8b6b24639155e900fb68aacc7e346e0a0151c981c2ec25a62acc53508a926</td>
              <td> <a href="/account/0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a">hr0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a" </a></td>
              <td>
                <i className="fas fa-arrow-up text-success mr-3" />1
              </td>
              <td>34 minutes ago</td>
              <td>1.75 XCH</td>
            </tr>
            <tr>
              <th scope="row">9142</th>
              <td>b0b8b6b24639155e900fb68aacc7e346e0a0151c981c2ec25a62acc53508a926</td>
              <td> <a href="/account/0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a">hr0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a" </a></td>
              <td>
                <i className="fas fa-arrow-up text-success mr-3" />1
              </td>
              <td>34 minutes ago</td>
              <td>1.75 XCH</td>
            </tr>
            <tr>
              <th scope="row">9142</th>
              <td>b0b8b6b24639155e900fb68aacc7e346e0a0151c981c2ec25a62acc53508a926</td>
              <td> <a href="/account/0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a">hr0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a" </a></td>
              <td>
                <i className="fas fa-arrow-up text-success mr-3" />1
              </td>
              <td>34 minutes ago</td>
              <td>1.75 XCH</td>
            </tr>
            <tr>
              <th scope="row">9142</th>
              <td>b0b8b6b24639155e900fb68aacc7e346e0a0151c981c2ec25a62acc53508a926</td>
              <td> <a href="/account/0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a">hr0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a" </a></td>
              <td>
                <i className="fas fa-arrow-up text-success mr-3" />1
              </td>
              <td>34 minutes ago</td>
              <td>1.75 XCH</td>
            </tr>
            <tr>
              <th scope="row">9142</th>
              <td>b0b8b6b24639155e900fb68aacc7e346e0a0151c981c2ec25a62acc53508a926</td>
              <td> <a href="/account/0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a">hr0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a" </a></td>
              <td>
                <i className="fas fa-arrow-up text-success mr-3" />1
              </td>
              <td>34 minutes ago</td>
              <td>1.75 XCH</td>
            </tr>
            
          </tbody>
        </Table>
      </Card>
    </Col>
  );
};

export default ShowData;
