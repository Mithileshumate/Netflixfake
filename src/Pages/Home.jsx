import React,{useState} from 'react'
import Cards from '../Component/Cards'
import { movie_Data } from '../data'
import {Link} from 'react-router-dom'

export default function () {
  const [name,setname]=useState("");

  const printing= (e)=>{
    setname(e.target.value);
  }
  return (
    <div className='home'>

    <div className='container mt-3'>
      <div className='row d-flex justify-content-center'>
     <input className='w-25 ' placeholder='Search Movie Here' type='text' onChange={(event)=>{printing(event)}}/>
      </div >
    </div>
    
    <div className='container mt-5 cards_container'>
     
      {
        movie_Data.map((val,i)=>{
          if(((val.name).toLowerCase()).includes((name).toLowerCase())){
          return(
            <Cards name={val.name} time={val.time} img={val.img} description={val.description} profile={val.profile} key={i}/>
          )
          }
        })
      }
    </div>
    </div>
  )
}


// <Cards name='spider man no way home' time='2hr 28min' img='https://preview.redd.it/cyzgqykc0zz71.png?width=640&crop=smart&auto=webp&s=8ecbd884c06ea52dc1922be29ca604796022fa4c' description="Peter Parker's secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world." profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z"/>

// <Cards name='RRR' time='3hr 2min' img='https://pbs.twimg.com/profile_images/1513422368357912577/6FgmBymm_400x400.jpg' description="RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem." profile="https://www.pinkvilla.com/imageresize/rrr-review.jpg?width=752&format=webp&t=pvorg"/>

// <Cards name='Avenger:End game' time='3hr 2min' img='https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.jpg' description="After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right." profile="https://parade.com/.image/t_share/MTkwNTgwMTcwMTY2NDQ1MTgx/poster.jpg"/>

// <Cards name='Shamshera' time='2hr 58min' img='https://m.media-amazon.com/images/M/MV5BODVlNWNmN2EtYWJlYy00ZTc5LThjMTItYTQ0ZTlmZDYwN2VjXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg' description="Shamshera is a legend for his tribe who relentlessly fights for his tribe's freedom and dignity.In the fictitious city of Kaza, a warrior tribe is imprisoned, enslaved and tortured by a ruthless authoritarian Shudh Singh. Shamshera is a legend for his tribe who relentlessly fights for his tribe's freedom and dignity." profile="https://stat1.bollywoodhungama.in/wp-content/uploads/2022/06/Shamshera.jpg"/>

// <Cards name='Thor love and Thunder' time='1hr 59min' img='https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' description="Thor: Love and Thunder is a 2022 American superhero film based on Marvel Comics featuring the character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Thor: Ragnarok (2017) and the 29th film in the Marvel Cinematic Universe (MCU)." profile="https://images.thedirect.com/media/photos/thor1.jpg"/>

// <Cards name='Dharmaveer' time='2hr 58min' img='https://m.media-amazon.com/images/M/MV5BZTg4ZjliOTAtODc2ZS00ZmEwLTkxYmUtZGM4ZGEzYmY1MzY5XkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_.jpg' description="Dharmaveer: Mukkam Post Thane (Marathi trans धर्मवीर: मुक्काम पोस्ट ठाणे) is a 2022 Indian Marathi biographical political drama film written and directed by Pravin Tarde and produced by Mangesh Desai under the banner of Zee Studios. It covers the story of late Shiv Sena leader Anand Dighe." profile="https://m.media-amazon.com/images/M/MV5BZTg4ZjliOTAtODc2ZS00ZmEwLTkxYmUtZGM4ZGEzYmY1MzY5XkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_.jpg"/>

// <Cards name='Brahmastra' time='2hr 50min' img='https://www.filmibeat.com/fanimg/movie/15620/brahmastra-photos-images-76811.jpg' description="The Brahmashirsha astra was a weapon that was said to be able to destroy the world, capable of destroying creation and vanquishing all beings. It is one of the most destructive, powerful, and irresistible weapons mentioned in Hinduism. These weapons are all created by Lord Brahma." profile="https://www.filmibeat.com/fanimg/movie/15620/brahmastra-photos-images-76811.jpg"/>

