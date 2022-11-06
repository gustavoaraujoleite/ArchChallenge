import React, { useContext } from "react";
import Card from "../../components/UI/Card";
import { ThemeContext } from "../../store/GlobalStylingContext/globalStyle-context";
import classes from "./Homepage.module.css";

function HomePage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classes.container}>
      <Card maxWidth={"50%"}>
        <h1
          className={
            theme === "dark" ? classes.text : `${classes.text} ${classes.light}`
          }
        >
          Seja muito bem vindo(a) ao website da ArchOffice. Aqui você encontrará
          produtos para te ajudar a se desenvolver como profissional e ter o
          maior conforto no seu dia-a-dia trabalhando como Dev. Fique à vontade
          para explorar os nossos produtos e agradecemos o seu apoio.
        </h1>
      </Card>
    </div>
  );
}

export default HomePage;
