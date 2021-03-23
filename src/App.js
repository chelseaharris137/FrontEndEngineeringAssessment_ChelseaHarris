import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import PharmacyIcons from "./images/PharmacyIcons.svg";
import ClaimIcon from "./images/claimicon.png";
import DentistIcon from "./images/dentisticon.png";
import StethIcon from "./images/stethicon.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          tinytext: "Save up to",
          amount: "$123",
          firstname: "Jeff",
          description:
            "<span class='color-orange'>per year </span>on your Tier I prescription drug Promethazine if you go to an alternate pharmacy nearby.",
          time: "2 min ago",
          image: PharmacyIcons,
          outterDivClass: "swiper-slide",
        },
        {
          tinytext: "Save up to",
          amount: "$247",
          firstname: "Anna",
          description:
            "by submitting your <span class='color-blue'> urgent care claim</span> dated October 27, 2020 to Guardian.",
          time: "9 min ago",
          image: ClaimIcon,
          outterDivClass: "swiper-slide2",
        },
        {
          tinytext: "Save up to",
          amount: "$123",
          firstname: "David",
          description:
            "<span class='color-red'>per visit</span> by changing to an in-network doctor for your recurring podiatry visits.",
          time: "23 min ago",
          image: StethIcon,
          outterDivClass: "swiper-slide3",
        },
        {
          tinytext: "Dental Cleanings",
          amount: "2/yr",
          firstname: "Jeff",
          description:
            "Schedule your<span class='color-red'>&nbsp;covered semi-annual dental cleaning</span>&nbsp; with a dentist nearest you. Its not too late.",
          time: "",
          image: DentistIcon,
          outterDivClass: "swiper-slide3",
        },
        {
          tinytext: "Save up to",
          amount: "$23",
          firstname: "Jeff",
          description:
            "<span class='color-orange'>per fill</span> on your Tier II prescription drug Foradil if you go to an alternate pharmacy nearby.",
          time: "3 days ago",
          image: PharmacyIcons,
          outterDivClass: "swiper-slide",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent cardData={this.state.cardData} />
        <Footer />
      </div>
    );
  }
}

export default App;
