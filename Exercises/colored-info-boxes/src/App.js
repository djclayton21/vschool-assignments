import React from 'react';
import Box from './Box/Box'

function App() {
  const style = {
    display: "grid",
    margin: '0 5%',
  }
  return (
    <div className="App" style = {style}>
      <Box backgroundColor = 'orange' title = '"Orange" used to be acomplicated word' subTitle = 'The yummiest color' info = 'It doesn’t exactly roll off the tongue, but “geoluhread,” which means “yellow-red,” was once the word used to refer to the color orange, while, as far back as the 13th century, the citrus fruit was called “orange.” It wasn’t until the 16th century that Europeans adopted the same word for both the fruit and the color.'/>
      <Box backgroundColor = 'blue' title = 'Blue' subTitle = 'Blue was once seen as a low-class color' info = 'According to Pastoureau, blue was one of the later colors to be adopted in the ancient world (with reds, blacks, and browns appearing in cave paintings). In Ancient Rome, it was seen as the color of the working class, worn by the those lower on the social ladder, while the wealthy wore white, black, and red. Pastoureau says that the color was seen as so far out of the mainstream that it was associated with barbarians and used to frighten enemies.' />
      <Box backgroundColor = 'red' title = 'Red' subTitle = 'Red is the the first color a baby sees' info = 'Research has found that infants as young as two weeks old are able to distinguish the color red. As their color vision develops, the number of colors they are able to see continues to grow until they see the full spectrum of colors by the age of about five months.'/>
      <Box backgroundColor = 'pink' title = 'Pink' subTitle = 'Pink is a relaxing color' info = 'The color pink has been found to have palliative effects on people. “Even if a person tries to be angry or aggressive in the presence of pink, he can’t,” says Dr. Alexander Schauss, director of the American Institute for Biosocial Research in Tacoma, Washington, who studied how the color can effectively suppress anger and anxiety in prisoner populations. “The heart muscles can’t race fast enough. It’s a tranquilizing color that saps your energy. Even the color-blind are tranquilized by pink rooms.” Fun fact: It’s for this reason that many sports teams paint the visiting team’s locker room pink. (Anything to get an advantage over the competition!)'/>
      <Box backgroundColor = 'white' title = 'White' subTitle = 'White is the safest color' info ='Studies of vehicular accidents and car colors have found white to be the color of automobiles least likely to be involved in an accident resulting in death, according to Monash University Accident Research Centre, which conducted a study examining crashes between 1987 and 2004. The least safe color? Black, with cars of that color 12 percent more likely to be involved in a deadly crash.'/>
      <Box backgroundColor = 'green' title = 'Green' subTitle= 'Green came ot represent inconstancy' info = 'In the Middle Ages, the color green came to represent inconstancy, betrayal, and unreliability. For example, Judas was often depicted wearing green clothing. According to Pastoureau, this association may have grown out of the fact that dyeing in green tended to be difficult and unpredictable during this time, with green dyes from plants creating a faint and unstable color that would fade over time.'/>
      <Box backgroundColor = 'grey' title = 'Grey' subTitle = {`There's a name for the grey you see when you turn off the lights`} info = 'You probably didn’t know it had a name, but that dark gray that your eyes see as soon as you turn off the lights—just before complete darkness takes over or your eyes adjust to the lack of light—is known as “eigengrau.”'/>
      <Box backgroundColor = 'yellow' title = 'Yellow' subTitle = 'Yellow makes you dizzy' info = 'The color yellow can cause nausea, so it is avoided in airplanes. Also, pure bright yellow is belived ot be the imost irritating color due to its excessive stimulation to the hey. Huh! Knew it, yellow!'/>
    </div>
  );
}

export default App;
