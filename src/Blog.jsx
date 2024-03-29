import React from 'react'
import './Styling/blog.css'


function Blog() {
  return (
    <div >
        <section className='text'>
            <h2>This is the About section ! </h2>
            <div className='ntext'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor perferendis corrupti magni minus dignissimos ullam, ea non explicabo dicta totam exercitationem iure eos recusandae quis incidunt dolores quidem repellendus?</p>
            </div>
            <div className='card-container'>
  <div className='card' id='card1'>
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/coding-project-1884980-1597918.png" alt="Image description"/>
    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi dicta in labore deserunt, voluptatibus ad repellendus enim molestiae soluta esse omnis</h3>
  </div>
  <div className='card' id='card2'>
    <img src="https://designshack.net/wp-content/uploads/tiktokmkt.jpg" alt="Image description"/>
    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi dicta in labore deserunt, voluptatibus ad repellendus enim molestiae soluta esse omnis</h3>
  </div>
  <div className='card' id='card3'>
    <img src="https://designshack.net/wp-content/uploads/sigurd.jpg" alt="Image description"/>
    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi dicta in labore deserunt, voluptatibus ad repellendus enim molestiae soluta esse omnis</h3>
  </div>
</div>

            

        </section>
    </div>
  )
}

export default Blog