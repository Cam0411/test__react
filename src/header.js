

function Header(){
    const arrHeaderDetail = [
        {
            icon:'fa-solid fa-phone',
            title:'+021-95-51-84',
            id:1
        },
        {
            icon:'fa-solid fa-envelope',
            title:' email@email.com',
            id:2
        },
        {
            icon:'fa-solid fa-location-dot',
            title:' 1734 Stonecoal Road',
            id:3
        }
    ]
    const arrHeaderProfile = [
            {
                icon:'fa-solid fa-dollar-sign',
                title:' USD',
                id:1
            }, 
            {
                icon:'fa-solid fa-user',
                title:'My Account',
                id:2
            }, 
    ]
    const arrHeaderCrash = [ 
        {
            icon:'fa-solid fa-heart',
            title:'Your Wishlist',
            id:1
        }, 
        {
            icon:'fa-solid fa-cart-shopping',
            title:'Your Cart',
            id:2
        }, 
    ]
    const arrCate = ['All Categories','categories 1','categories 2']
    const arrList = ['Home','Hot Deals','Categories','Smartphones','Cameras','Accessories']
   return (
    <div className='Header'>
     <div className="First__header">
        <div className='grid wide'>
           <div className='row'>
              <div className='col l-6'>
                  <ul className='Header__list__detail'>
                    {
                        arrHeaderDetail.map(arr => {
                            const {id,icon,title} = arr
                            return (
                                <li key={id}><i className={icon}></i>  {title}</li>
                            )
                        })
                    }
                  </ul>
              </div>
              <div className='col l-6'>
                  <ul className='Header__list__profile'>
                    {
                        arrHeaderProfile.map(arr => {
                            const {id,icon,title} = arr
                            return (
                                <li key={id}><i className={icon}></i> {title}</li>
                            )
                        })
                    }
                  </ul>
              </div>
           </div>
        </div>
     </div>
       <div className="Second__header">
          <div className="grid wide">
            <div className="row">
              <div className="col l-8">
                 <div className="logo">
                    <img src='https://technext.github.io/electro/img/logo.png' alt='logo' />
                 </div>
                  <div className="src__box">
                  <select className="categories">
                     {
                      arrCate.map(arr  => {
                        return (
                            <option value={arr} key={arr}>{arr}</option>
                        )
                      })
                     }
                    </select>
                     <div className="Input__box">
                       <input className="src__input" placeholder="Search__here" />
                     </div>
                     <p className="search__button">Search</p>
                  </div>
              </div>
              <div className="col l-4">
              <ul className='Header__list__crash'>
                    {
                        arrHeaderCrash.map(arr => {
                            const {id,icon,title} = arr
                            return (
                                <li key={id}><i className={icon}></i> <br /> {title}</li>
                            )
                        })
                    }
                  </ul>
              </div>
            </div>
          </div>
       </div>
       <div >
        <div className="Third__header">
          <div className="grid wide">
             <div className="row">
               <div className="col l-12">
                  <ul className="list">
                      {
                      arrList.map(arr => {
                        return (
                            <li key={arr}>{arr}</li>
                        )
                      })
                      }
                  </ul>
               </div>
             </div> 
          </div>
        </div>
       </div>
    </div>

   )
}
export default Header