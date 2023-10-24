import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Records = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/records");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <Card key={index}>
          <Title>{item.name}</Title>
          <img
            src={item.imageCrop}
            style={{ width: "100%", height: "100px"}}
          />
          <List>Type of Crop: {item.typeOfCrop}</List>
          <List>Land Size: {item.landSize}</List>
          <List>Pesticides: {item.pesticideNames}</List>
          <List>Pesticide Amount: {item.pesticideAmount}</List>
          <List>Fertilizers: {item.fertilizers}</List>
          <List>Fertilizers Amount: {item.fertzAmount}</List>
          <List>Number of Days: {item.numberOfDays}</List>
          <List>Number of Labourers: {item.numberOfLabourers}</List>
          <List>Amount Invested: {item.amountInvested}</List>
          <List>Profits Made: {item.profitesMade}</List>
          <List>Year: {item.yearOfFarming}</List>
        </Card>
      ))}
    </div>
  );
};

const Card = styled.div`
  display: inline-block;
  justify-content: space-around;
  width: 30%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 15px;
  margin-left:10px;
  text-align: left;
  padding:2px 5px;
  background-color: #f1f1f1;
`;

const List = styled.p`
  border-bottom: 1px solid grey;
  padding: 4px 10px;
  margin-bottom:5px;
`;

const Title = styled.h1`
  text-transform: Uppercase;
`;

export default Records;
