import React from 'react'
// import mainImage from '../images/portfolio/ace.jpeg';
import aceImage1 from '../images/portfolio/ace.jpeg';
import aceImage2 from '../images/portfolio/ace1.jpeg';
import beetleImage1 from '../images/portfolio/beetle.jpeg';
import beetleImage2 from '../images/portfolio/beetle1.jpeg';
import beetleImage3 from '../images/portfolio/bettle2.jpeg';
import bible from '../images/portfolio/bible.jpeg';
import bible1 from '../images/portfolio/bible1.jpeg';
import bigYellow from '../images/portfolio/big_yellow.jpeg';
import blue from '../images/portfolio/blue.jpeg';
import book from '../images/portfolio/book.jpeg';
import buds from '../images/portfolio/buds.jpeg';
import butterfly from '../images/portfolio/butterfly.jpeg';
import cislt from '../images/portfolio/cislt.jpeg';
import courtside from '../images/portfolio/courtside.jpeg';
import deck from '../images/portfolio/deck.jpeg';
import derin from '../images/portfolio/derin.jpeg';
import five from '../images/portfolio/five.jpeg';
import keyboard from '../images/portfolio/keyboard.jpeg';
import king from '../images/portfolio/king.jpeg';
import Lamie1 from '../images/portfolio/Lamie5-01.jpeg';
import Lamie11 from '../images/portfolio/Lamie11.jpeg';
import Lamie14 from '../images/portfolio/Lamie14.jpeg';
import Lamie16 from '../images/portfolio/Lamie16.jpeg';
import majid from '../images/portfolio/majid.jpeg';
import mike from '../images/portfolio/mike.jpeg';
import nutrimilk from '../images/portfolio/nutrimilk.jpeg';
import road from '../images/portfolio/road.jpeg';
import shekere from '../images/portfolio/shekere.jpeg';
import ss from '../images/portfolio/ss.jpeg';
import stephen from '../images/portfolio/stephen.jpeg';
import sunflower from '../images/portfolio/sunflower.jpeg';
import tea from '../images/portfolio/tea.jpeg';
import tree from '../images/portfolio/tree.jpeg';
import waterDrops from '../images/portfolio/water_drops.jpeg';
import wetBlade from '../images/portfolio/wet_blade.jpeg';
import wetGreen from '../images/portfolio/wet_green.jpeg';
import whiteFlower from '../images/portfolio/white_flower.jpeg';
import white from '../images/portfolio/white.jpeg';
import yellowGreen from '../images/portfolio/yellow_green.jpeg';
import yellowFlower from '../images/portfolio/yellow-flower.jpeg';
// import yoruba from '../images/portfolio/yoruba.jpg';

const data = [
  { id: 1, mainImage: aceImage1 },
  { id: 2, mainImage: aceImage2 },
  { id: 3, mainImage: beetleImage1 },
  { id: 4, mainImage: beetleImage2 },
  { id: 5, mainImage: beetleImage3 },
  { id: 6, mainImage: bible },
  { id: 7, mainImage: bible1 },
  { id: 8, mainImage: bigYellow },
  { id: 9, mainImage: blue },
  { id: 10, mainImage: book },
  { id: 11, mainImage: buds },
  { id: 12, mainImage: butterfly },
  { id: 13, mainImage: cislt },
  { id: 14, mainImage: courtside },
  { id: 15, mainImage: deck },
  { id: 16, mainImage: derin },
  { id: 17, mainImage: five },
  { id: 18, mainImage: keyboard },
  { id: 19, mainImage: king },
  { id: 20, mainImage: Lamie1 },
  { id: 21, mainImage: Lamie11 },
  { id: 22, mainImage: Lamie14 },
  { id: 23, mainImage: Lamie16 },
  { id: 24, mainImage: majid },
  { id: 25, mainImage: mike },
  { id: 26, mainImage: nutrimilk },
  { id: 27, mainImage: road },
  { id: 28, mainImage: shekere },
  { id: 29, mainImage: ss },
  { id: 30, mainImage: sunflower },
  { id: 31, mainImage: whiteFlower },
  { id: 32, mainImage: stephen },
  { id: 33, mainImage: tea },
  { id: 34, mainImage: tree },
  { id: 35, mainImage: waterDrops },
  { id: 36, mainImage: wetBlade },
  { id: 37, mainImage: wetGreen },
  { id: 38, mainImage: yellowGreen },
  { id: 39, mainImage: yellowFlower },
  { id: 40, mainImage: white },
];

const Projects = () => {
  return (
    <div name='project' className='w-full  bg-veryDarkGrey'>
        <div className='flex flex-col w-full py-24 h-full px-8 p-4  mx-auto justify-center items-center'>
            <div className='max-w-[1000px] flex flex-col gap-2'>
                <p className='text-sand sm:px-28 text-2xl p-2'>Projects</p>
                <p className='text-cream sm:px-28 flex p-2'>
                	Here is a collection of our best works on various forms of photographic shots set out for you to pick your best interest in.
                     They include photos of natural photography, product photography, portrait photography and many more.
                </p>

                <div className='flex w-full justify-center '>
                    <div className='sm:grid gap-4 w-3/4 sm:w-full space-y-8 sm:space-y-0 duration-300 justify-center items-center sm:grid-cols-2 md:grid-cols-4 mt-8 relative'>
                        {data.map(({ id, mainImage }) => (
                            <img key={id}  className='w-full rounded-lg hover:scale-110 duration-300 mt-0'  src={mainImage} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
