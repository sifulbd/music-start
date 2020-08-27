import React, {useState} from 'react';
import './App.css';
import Hearder from './components/Header/Hearder';
import Course from './components/Courses/Course';
import data from './data/data';
import './components/Courses/Course.css';
import Cart from './components/Cart/Cart';

function App() {
  const [course, setCourse] = useState(data);
  const [cart, setCart] = useState([]);
  const handleClick = (courseItem) => {
      setCart((prev) => {
          return [...prev, courseItem]
      })
  }

  return (
    <div className="App">
      <Hearder></Hearder>
      <Cart cart={cart}></Cart>
      <div className="courses">
            <div className="container">
                <div className="row">
                    {
                        course.map(courseItem => 
                            <Course handleClick ={handleClick} course={courseItem} key={courseItem.id}></Course>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
