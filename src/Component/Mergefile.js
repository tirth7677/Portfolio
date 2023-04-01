import React from "react";
import Bankistlogo from "../Image/Bankistlogo.gif";
import GuessMyNumber from "../Image/GuessMyNumber.gif";
import Piggames from "../Image/Piggames.gif";
import mtblogs from "../Image/mtblogs.gif";
import Tmnews from "../Image/Tmnews.gif";
import "../index.css";
import Navbar from "../Component/Navbar";
import Projects from "../Component/Projects";
import Firsttitle from "../Component/Firsttitle";
import Secondtitle from "../Component/Secondtitle";
import Fotter from "../Component/Fotter";

function Mergefile() {
  return (
    <div>
      <Navbar />
      <Firsttitle />
      <Secondtitle />
      <Projects
        numbers="01"
        mainname="Bankist"
        secondname="Banking Website"
        desc="Bankist is a fully-functional online banking website that I have designed and developed. The website features a secure login system that enables six different users to access their respective accounts with a unique username and PIN. Once logged in, users can perform various banking transactions such as applying for loans, transferring funds, and deleting their account. The website has been designed with a user-friendly interface and modern aesthetic to enhance the user experience."
        image={Bankistlogo}
      />
      <Projects
        numbers="02"
        mainname="MT Blogs"
        secondname="Blog website"
        desc="MT Blogs is a comprehensive blog website that I have developed, which allows users to create and publish blog posts. Upon accessing the website, users can write a blog post by providing a title, blog body, and author name. Once published, the blog post will appear on the front page of the website, allowing other users to read and engage with the content. Additionally, users can delete their blog post if necessary."
        image={mtblogs}
      />
      <Projects
        numbers="03"
        mainname="TM-News"
        secondname="News website"
        desc="Tm-News is a website that provides daily news updates, offering readers the convenience of browsing news articles organized by categories. This user-friendly platform allows visitors to effortlessly access news articles tailored to their interests, delivering up-to-date information on various topics. Whether it be world news, politics, technology, or entertainment, Tm-News caters to diverse readership by presenting a wide range of news categories. With Tm-News, readers can stay informed about current events and trending topics in a seamless and organized manner."
        image={Tmnews}
      />
      <Projects
        numbers="04"
        mainname="Pig-game"
        secondname="Multiplayer Games"
        desc="Pig-game is a multiplayer online gaming website that I have designed and developed. The game involves players taking turns to roll a dice and accumulate points, with the objective of being the first player to reach a score of 100. However, if a player rolls a 1 on the dice, their turn is immediately eliminated and any accumulated points are reset to zero. The website's interface is designed to provide an optimal gaming experience, with intuitive navigation and simple gameplay mechanics. The game's rules are straightforward and easy to understand, making it accessible for players of all skill levels."
        image={Piggames}
      />
      <Projects
        numbers="05"
        mainname="Guess Number"
        secondname="Guess My Number"
        desc="Guess My Number is an online gaming website that I have designed and developed, which allows users to play a game of guessing a randomly generated number between 1 and 20. Upon accessing the website, users can input their guesses into a designated field. Once the user has guessed the correct number, their high score will be recorded and stored for future reference, the website's design aesthetic is inspired by retro gaming, featuring classic visual elements that provide a nostalgic feel for users who enjoy vintage gaming experiences."
        image={GuessMyNumber}
      />
      <Fotter />
    </div>
  );
}
export default Mergefile;