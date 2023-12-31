import React from 'react'

const MenuCard = ({ menuData }) => {
    console.log(menuData);
  return (
      <>
          <section className='main-card--cointainer'>
              {menuData.map((curElem) => {
                  const { id, name, category, image, description } = curElem;
                  
              return (
                  <div className='card-container' key={curElem.id}>
                      <div className='card'>
                          <div className='card-bady'>
                              <span className='card-number card-circle subtle'>{id}</span>
                              <span className='card-author subtle' >{category}</span>
                              <h2>{name}</h2>
                              <span className='card-description subtle'>{description}</span>
                              <div className='card-read'>Read</div>
                              <img src={image} alt="images" className='card-media'/>
                              <span className='card-tag subtle'>Order now</span>
                          </div>
                      </div>
                  </div> 
              )
          })}

          </section>  
    </>
  )
}

export default MenuCard
