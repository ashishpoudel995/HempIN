import React from "react";
import CompanyIntro from "./CompanyIntro";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import OurTeam from "./OurTeam";
import ShoppingPage from "./ShoppingPage";
import MyCart from "./MyCart";
import HempBag from "./images/Products/hempbag.jpg";
import HempTshirt from "./images/Products/hemptshirt.jpg";
import HempHandBag from "./images/Products/hemphandbag.jpg";
import HempCap from "./images/Products/hempcap.jpg";
import Madhur from "./images/OurTeam/Madhur.jpeg";
import Prawesh from "./images/OurTeam/prawess.webp";
import Pranshu from "./images/OurTeam/Pranshu.jpg";
import Ashish from "./images/OurTeam/Ashish.jpg";
import HempHandBag2 from "./images/Products/hemphandbag2.jpg";
import HempShoes from "./images/Products/hempshoes.jpg";
import Vanshikha from "./images/OurTeam/Vanshikha.jpeg";
import Rishi from "./images/OurTeam/Rishi.jpg";
import OrderSuccessful from "./OrderSuccessful";
import ProcessingOrder from "./ProcessingOrder";
import ContactUs from "./ContactUs";

const Team = [
  {
    Name: "Prawesh Mohan Bhattarai",
    Designation: "Design and Product Manager",
    Photo: Prawesh,
    Bio: "Prawesh Mohan Bhattarai is the Design and Product Manager for HempIN. He is responsible for design and distribution of all the products.",
  },

  {
    Name: "Madhur Bhatia",
    Designation: "PR Head",
    Photo: Madhur,
    Bio: "Madhur Bhatia is PR head for HempIN. She holds leadership roles in both enterprise and consumer businesses across the company.",
  },

  {
    Name: "Vanshikha Singh",
    Designation: "Marketing Manager",
    Photo: Vanshikha,
    Bio: "Vanshikha Singh is Marketing Manager for HempIN. She works on various marketing strategies and implements them to increase the reach for the start up.",
  },

  {
    Name: "Rishi Vandhanaa K",
    Designation: "Finance Manager",
    Photo: Rishi,
    Bio: "Rishi Vandhanaa K is Finance Manager for HempIN. She is responsible for the budgeting, accounting and tally of the start-up.",
  },

  {
    Name: "Pranshu Acharya",
    Designation: "Backend Developer",
    Photo: Pranshu,
    Bio: "Pranshu Acharya is a Backend Web Developer for HempIN. He manages the databases for products to be distributed from the website.",
  },

  {
    Name: "Ashish Poudel",
    Designation: "Frontend Developer",
    Photo: Ashish,
    Bio: "Ashish Poudel is Front End Web Developer for HempIN. He designs and regularly updates the website to ensure a user friendly experience.",
  },
];

const Product = [
  {
    Photo: HempBag,
    Name: "Hemp Bag",
    Detail: "Sufficient Space, Cool Print",
    Price: "749",
    key: "1",
  },
  {
    Photo: HempCap,
    Name: "Hemp Cap",
    Detail: "Golf Cap, Available in black and white",
    Price: "599",
    key: "2",
  },
  {
    Photo: HempHandBag,
    Name: "Hemp Hand Bag",
    Detail: "Huge Space, Perfect for Shopping",
    Price: "549",
    key: "3",
  },
  {
    Photo: HempTshirt,
    Name: "Hemp Tshirt",
    Detail: "Plan white Tshirt with added comfort",
    Price: "999",
    key: "4",
  },
  {
    Photo: HempHandBag2,
    Name: "Hemp Hand Bag",
    Detail: "Beautiful Design, Good for Travel",
    Price: "549",
    key: "5",
  },
  {
    Photo: HempShoes,
    Name: "Hemp Shoes",
    Detail: "Light Weight, Beautiful Design",
    Price: "2999",
    key: "6",
  },
];
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/cart" component={() => <MyCart />} />
            <Route
              path="/products"
              component={() => <ShoppingPage Product={Product} />}
            />
            <Route path="/ourteam" component={() => <OurTeam Team={Team} />} />
            <Route
              path="/processing-order"
              component={() => <ProcessingOrder />}
            />
            <Route path="/contact-us" component={() => <ContactUs />} />
            <Route path="/success" component={() => <OrderSuccessful />} />
            <Route path="/" component={CompanyIntro} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
