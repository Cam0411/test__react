
function Content(){
    const arrContentMain = [ 
        {
            title:'Laptop Collection',
            img:'https://technext.github.io/electro/img/shop01.png',
            id:1
        },
        {
            title:'Accessories Collection',
            img:'https://technext.github.io/electro/img/shop02.png',
            id:2
        },
        {
            title:'Cameras Collection',
            img:'https://technext.github.io/electro/img/shop01.png',
            id:3
        }
    ]
    const arrlistContent = ['Laptops','SmartPhones','Cameras','Accessories']
    const arrNewProductContent = [
        {
            img:'https://technext.github.io/electro/img/product05.png',
            id:1
        },
        {
            img:'https://technext.github.io/electro/img/product06.png',
            id:2
        },
        {
            img:'https://technext.github.io/electro/img/product07.png',
            id:3
        },
        {
            img:'https://technext.github.io/electro/img/product08.png',
        id:4
        }
    ]
    return (
       <div className="Content">
         <div className="Main__product">
           <div className="grid wide">
             <div className="row">
             
                  {
                  arrContentMain.map(arr => {
                    const {img,id,title} = arr
                   return (
                    <div className="col l-4" key={id}>
                    <div className="img__backgroud">
                     <img src={img}  alt='' />
                    </div>
                     <div className="txt__content">
                       <h1>{title}</h1>
                       <p>Shop Now</p>
                     </div>
                    </div>
                   )
                  })
                  }
              
             </div>
           </div>
         </div>
         <div className="New Product">
          <div className="grid wide">
            <div className="row">
              <div className="col l-6">
                <h1 className="title">New Product</h1>
                
              </div>
              <div className="col l-6">
              <ul className="list">
                    {
                        arrlistContent.map(arr => {
                            return (
                                <li key={arr}>{arr}</li>
                            )
                        })
                    }
                </ul>
              </div>
              {
                  arrNewProductContent.map(arr => {
                    const {img,id} = arr
                   return (
                    <div className="col l-3" key={id}>
                    <div className="img__backgroud">
                     <img src={img}  alt='' />
                    </div>
                     <div className="txt__content">
                        <p className="type">CATEORY</p>
                       <h1 className="title">Product Name Here</h1>
                       <p className="price">$980.000</p>
                     </div>
                     <ul className="list__react">
                      <li><i class="fa-solid fa-heart"></i></li>
                      <li><i class="fa-solid fa-plus"></i></li>
                      <li><i class="fa-solid fa-eye"></i></li>
                     </ul>
                    </div>
                   )
                  })
                  }
            </div>
          </div>
         </div>

       </div>
    
    )
}
export default Content