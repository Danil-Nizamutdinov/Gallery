import React from "react";

function Gallery(props) {

  let baseURL = 'https://test-front.framework.team'

  return (
    <section>
      <div className="gallery_content">
        {
          props.paintings.map(p => {
            return(

              <div className="gallery_img_box" key={p.id}>

                <img src={baseURL+p.imageUrl} alt="" className="gallery_img"/>

                <div className="gallery_img_content">

                  <span className="gallery_img_content_title">{p.name.length > 30 ? p.name.slice(0,28)+'...' : p.name}</span>

                  <div className="gallery_img_content_box">

                    <div className="gallery_img_content_text">
                      
                      {
                        props.authors.map(a => {
                          return a.id === p.authorId ? <div key={a.id}>                            
                              Author: 
                              <span className="gallery_img_content_info">{a.name}</span>
                            </div> : '';
                        })
                      }

                      <div>
                        Created:
                        <span className="gallery_img_content_info">{p.created}</span>
                      </div>
                                                        
                      {
                        props.locations.map(l => {
                          return l.id === p.locationId ? <div key={l.id}>                            
                              Location: 
                              <span className="gallery_img_content_info">{l.location}</span>                            
                            </div> : '';
                        })
                      }

                    </div>

                  </div>

                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  );

}
  
  export default Gallery;
  