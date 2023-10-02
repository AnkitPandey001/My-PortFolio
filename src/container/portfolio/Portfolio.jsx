import React from "react";
import PagesHeader from '../../component/pageHeaderContent/PagesHeader'
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../helper/scheme.png";
import ImageTwo from  "../../helper/second.jpg";
import ImageThree from  "../../helper/third.jpeg";
import ImageFour from  "../../helper/Todo.jpg";
import ImageFive from  "../../helper/fourth.jpg";
import ImageSix from "../../helper/Random-Password-Generator.webp"
import "./Portfolio.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Color-Scheme-Changer",
    image: ImageOne,
    link: "https://ankitpandey001.github.io/Color-Scheme-Changer/",
  },
  {
    id: 3,
    name: "TMDB Movies",
    link: "https://ankitpandey001.github.io/IMDB_MOVIES/",
    image: ImageTwo,
  },
  {
    id: 4,
    name:"Login-Signup Pages",
    image: ImageThree,
    link: "https://ankitpandey001.github.io/Login-SiginUp-Pages/",
  },
  {
    id: 5,
    name: "Todo App",
    image: ImageFour,

    link: " https://ankitpandey001.github.io/TODO_APP/",
  },
  {
    id: 6,
    name: "Local Time Display",
    image: ImageFive,
    link: "https://ankitpandey001.github.io/Local-Time-Display/",
  },
  {
    id: 7,
    name: "Random Password Gene",
    image: ImageSix,
    link: "https://ankitpandey001.github.io/Random-Password-Generator/",
  }
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);
 
      
  return (
    <section id="portfolio" className="portfolio">
      <PagesHeader
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href="/">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                   <button><a className="a1" href={item.link}>Visit</a></button> 
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;