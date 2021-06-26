import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#fffaf6",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};


const ShowData = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Block #", "Header Hash", "Farm", "Luck", "Date", "Reward"]}
              tableData={[
                ["10186", "34ddd6eb452c69894371322ca59bcbd5de22f03e87533a850480e4a8121d9d4b", "a8175a93c628246e649c75558288a0502fdead730b91e66ebbbee4a0b949b4fa", "5.7", "30 minutes ago", "1.75 XCH"],
                ["10186", "34ddd6eb452c69894371322ca59bcbd5de22f03e87533a850480e4a8121d9d4b", "a8175a93c628246e649c75558288a0502fdead730b91e66ebbbee4a0b949b4fa", "5.7", "30 minutes ago", "1.75 XCH"],
                ["10186", "34ddd6eb452c69894371322ca59bcbd5de22f03e87533a850480e4a8121d9d4b", "a8175a93c628246e649c75558288a0502fdead730b91e66ebbbee4a0b949b4fa", "5.7", "30 minutes ago", "1.75 XCH"],
                ["10186", "34ddd6eb452c69894371322ca59bcbd5de22f03e87533a850480e4a8121d9d4b", "a8175a93c628246e649c75558288a0502fdead730b91e66ebbbee4a0b949b4fa", "5.7", "30 minutes ago", "1.75 XCH"],
                ["10186", "34ddd6eb452c69894371322ca59bcbd5de22f03e87533a850480e4a8121d9d4b", "a8175a93c628246e649c75558288a0502fdead730b91e66ebbbee4a0b949b4fa", "5.7", "30 minutes ago", "1.75 XCH"],
                ["10186", "34ddd6eb452c69894371322ca59bcbd5de22f03e87533a850480e4a8121d9d4b", "a8175a93c628246e649c75558288a0502fdead730b91e66ebbbee4a0b949b4fa", "5.7", "30 minutes ago", "1.75 XCH"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  //   <GridContainer>
  //   <GridItem>
  //     <Card>
  //       <CardBody>
  //           <Table
  //             tableHeaderColor="warning"
  //             tableHead={["Block #", "Header Hash", "Farm", "Luck", "Date", "Reward"]}
  //             tableData={[
  //               ["10186", "34ddd6eb452c69894371322ca59bcbd5de22f03e87533a850480e4a8121d9d4b", "a8175a93c628246e649c75558288a0502fdead730b91e66ebbbee4a0b949b4fa", "5.7", "30 minutes ago", "1.75 XCH"],
  //               ["10186", "34ddd6eb452c69894371322ca59bcbd5de22f03e87533a850480e4a8121d9d4b", "a8175a93c628246e649c75558288a0502fdead730b91e66ebbbee4a0b949b4fa", "5.7", "30 minutes ago", "1.75 XCH"],
  //               ["10186", "34ddd6eb452c69894371322ca59bcbd5de22f03e87533a850480e4a8121d9d4b", "a8175a93c628246e649c75558288a0502fdead730b91e66ebbbee4a0b949b4fa", "5.7", "30 minutes ago", "1.75 XCH"],
  //               ["10186", "34ddd6eb452c69894371322ca59bcbd5de22f03e87533a850480e4a8121d9d4b", "a8175a93c628246e649c75558288a0502fdead730b91e66ebbbee4a0b949b4fa", "5.7", "30 minutes ago", "1.75 XCH"],
  //             ]}
  //           />
  //       </CardBody>
  //     </Card>
  //   </GridItem>
  // </GridContainer>
    );
    {/* // <Col className="mb-5 mb-xl-0" xl="8">
    //   <Card className="shadow">
    //     <CardHeader className="border-0">
    //       <Row className="align-items-center">
    //         <div className="col">
    //           <h3 className="mb-0">Page visits</h3>
    //         </div>
    //         <div className="col text-right">
    //           <Button
    //             color="primary"
    //             href="#pablo"
    //             onClick={(e) => e.preventDefault()}
    //             size="sm"
    //           >
    //             See all
    //           </Button>
    //         </div>
    //       </Row>
    //     </CardHeader>
    //     <Table className="align-items-center table-flush" responsive>
    //       <thead className="thead-light">
    //         <tr>
    //           <th scope="col">Block #</th>
    //           <th scope="col">Header Hash</th>
    //           <th scope="col">Farm</th>
    //           <th scope="col">Luck</th>
    //           <th scope="col">Date</th>
    //           <th scope="col">Reward</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <th scope="row">9142</th>
    //           <td>b0b8b6b24639155e900fb68aacc7e346e0a0151c981c2ec25a62acc53508a926</td>
    //           <td> <a href="/account/0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a">hr0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a" </a></td>
    //           <td>
    //             <i className="fas fa-arrow-up text-success mr-3" />1
    //           </td>
    //           <td>34 minutes ago</td>
    //           <td>1.75 XCH</td>
    //         </tr>
    //         <tr>
    //           <th scope="row">9142</th>
    //           <td>b0b8b6b24639155e900fb68aacc7e346e0a0151c981c2ec25a62acc53508a926</td>
    //           <td> <a href="/account/0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a">hr0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a" </a></td>
    //           <td>
    //             <i className="fas fa-arrow-up text-success mr-3" />1
    //           </td>
    //           <td>34 minutes ago</td>
    //           <td>1.75 XCH</td>
    //         </tr>
    //         <tr>
    //           <th scope="row">9142</th>
    //           <td>b0b8b6b24639155e900fb68aacc7e346e0a0151c981c2ec25a62acc53508a926</td>
    //           <td> <a href="/account/0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a">hr0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a" </a></td>
    //           <td>
    //             <i className="fas fa-arrow-up text-success mr-3" />1
    //           </td>
    //           <td>34 minutes ago</td>
    //           <td>1.75 XCH</td>
    //         </tr>
    //         <tr>
    //           <th scope="row">9142</th>
    //           <td>b0b8b6b24639155e900fb68aacc7e346e0a0151c981c2ec25a62acc53508a926</td>
    //           <td> <a href="/account/0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a">hr0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a" </a></td>
    //           <td>
    //             <i className="fas fa-arrow-up text-success mr-3" />1
    //           </td>
    //           <td>34 minutes ago</td>
    //           <td>1.75 XCH</td>
    //         </tr>
    //         <tr>
    //           <th scope="row">9142</th>
    //           <td>b0b8b6b24639155e900fb68aacc7e346e0a0151c981c2ec25a62acc53508a926</td>
    //           <td> <a href="/account/0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a">hr0d08df904789460ff4211154fdda07cf6437a3693fc5ea490703027d1079af8a" </a></td>
    //           <td>
    //             <i className="fas fa-arrow-up text-success mr-3" />1
    //           </td>
    //           <td>34 minutes ago</td>
    //           <td>1.75 XCH</td>
    //         </tr>
            
    //       </tbody>
    //     </Table>
    //   </Card>
    // </Col> */}
   
};

export default ShowData;
