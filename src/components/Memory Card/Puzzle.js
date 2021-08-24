import { useState } from "react";
import "./Puzzle.css"

export default function Puzzle() {
  const [items, setItems] = useState([
    { id: 13, current: 5, image: "/images/puzzle/lion.jpg", status: false, allStatus: false },
    { id: 7, current: 7, image: "/images/puzzle/monkey.jpg", status: false, allStatus: false },
    { id: 2, current: 2, image: "/images/puzzle/bear.jpg", status: false, allStatus: false },
    { id: 11, current: 3, image: "/images/puzzle/dog.jpg", status: false, allStatus: false },
    { id: 8, current: 8, image: "/images/puzzle/crocodile.jpg", status: false, allStatus: false },
    { id: 15, current: 7, image: "/images/puzzle/monkey.jpg", status: false, allStatus: false },
    { id: 12, current: 4, image: "/images/puzzle/donkey.jpg", status: false, allStatus: false },
    { id: 6, current: 6, image: "/images/puzzle/sheep.jpg", status: false, allStatus: false },
    { id: 4, current: 4, image: "/images/puzzle/donkey.jpg", status: false, allStatus: false },
    { id: 16, current: 8, image: "/images/puzzle/crocodile.jpg", status: false, allStatus: false },
    { id: 1, current: 1, image: "/images/puzzle/cat.jpg", status: false, allStatus: false },
    { id: 9, current: 1, image: "/images/puzzle/cat.jpg", status: false, allStatus: false },
    { id: 10, current: 2, image: "/images/puzzle/bear.jpg", status: false, allStatus: false },
    { id: 14, current: 6, image: "/images/puzzle/sheep.jpg", status: false, allStatus: false },
    { id: 5, current: 5, image: "/images/puzzle/lion.jpg", status: false, allStatus: false },
    { id: 3, current: 3, image: "/images/puzzle/dog.jpg", status: false, allStatus: false },
  ]);
  const [currentId, setCurrentId] = useState(null)

  const changed = (id) => {
    let index = items.findIndex(item => item.id === id);
    let index2 = items.findIndex(item => item.id === currentId);
    let items1 = [...items];
    if (currentId === null) {
      items1[index].status = true;
      setItems(items1)
      setCurrentId(id)
    } else {
      if (id === currentId) {
        setTimeout(() => {
          items1[index2].status = false;
          items1[index].status = false;
          setItems(items1)
        }, 1000);
      } else {
        items1[index].status = true;
        if (items1[index].current !== items1[index2].current) {
          setTimeout(() => {
            items1[index2].status = false;
            items1[index].status = false;
            setItems(items1)
          }, 1000);
        } else {
          items1[index2].allStatus = true;
          items1[index].allStatus = true;
          setItems(items1)
        }
      }
      setCurrentId(null)
    }
  }

  return (
    <div className="pt-4">
      <h1 className="text-center mb-3">Memory Card Game</h1>
      <div className="container">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-3 mb-3">
              <div className=" elements">
                <img onClick={() => changed(item.id)} className={`img ${item.allStatus ? `animate` : `${item.status ? 'animate' : 'noAnimated'}`}`} src="/images/puzzle/card.jpg" alt="cat" />
                <img onClick={() => changed(item.id)} className={`img ${item.allStatus ? `noAnimate` : `${item.status ? 'noAnimate' : 'animate'}`}`} src={item.image} alt="cat" />
                <img className={`check ${!item.allStatus && item.status && !currentId ? 'd-block' : 'd-none'}`} src="/images/puzzle/wrong.png" alt="wrong" />
                <img className={`check ${item.allStatus ? 'd-block' : 'd-none'}`} src="/images/puzzle/check.png" alt="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}
