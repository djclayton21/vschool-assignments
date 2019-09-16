import React from 'react';
import Card from './Card'

function App() {
  const vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring",
      imgUrl: "https://www.buyidahorealestate.com/thumbs/398x299/ssl/rew-feed-images.global.ssl.fastly.net/imls/re_1/residential/98735116-1-o.jpg"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter",
      imgUrl: "https://www.gannett-cdn.com/-mm-/8e8fb39a4d88be253577fe7bc000638e3612c56a/c=230-0-3614-2544/local/-/media/2018/06/15/USATODAY/USATODAY/636646787345137558-GettyImages-908388868.jpg?width=534&height=401&fit=crop"

    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall",
      imgUrl: "https://s.marketwatch.com/public/resources/images/MW-HQ779_China__ZH_20190905152344.jpg"

    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer",
      imgUrl: "https://specials-images.forbesimg.com/imageserve/583868645/960x0.jpg?fit=scale"

    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring",
      imgUrl: "https://www.worldatlas.com/r/w728-h425-c728x425/upload/9c/1f/60/shutterstock-536843191.jpg"

    }
  ]
  const cards = vacationSpots.map(card => {
    return (<Card {...card} />)
  })
  return (
    <div className = 'app'>
      {cards}
    </div>
  )
}

export default App;
