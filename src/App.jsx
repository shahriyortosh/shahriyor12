import React from 'react'
import logo from './assets/logo.svg'
import kamp from './assets/kamptur.svg'
import brn from './assets/brand.svg'
import ca1 from './assets/car1.svg'
import ca2 from './assets/car2.svg'
import ca3 from './assets/car3.svg'
import foot from './assets/foot.svg'





const App = () => {
  return (
    <>
      <div className="con">
        <nav>
          <div className="left">
            <img className='logo' src={logo} alt="" />
          </div>
          <div className="right">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">Community</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Pricing</a></li>
            </ul>
            <button className='btn1'>Register Now </button>
          </div>
        </nav>
      </div>

      <header>
        <div className="con">
          <div className="row">
            <div className="lefth">
              <h1 className='hh11'>Lessons and insights</h1>
              <h1 className='hh12'>from 8 years</h1>
              <p className='pin'>Where to grow your business as a photographer: site or social media?</p>
              <button className='btn1'>Register</button>
            </div>
            <div className="right">
              <img className='kamp' src={kamp} alt="" />
            </div>
          </div>
        </div>
      </header>
      <section className='davomi'>
        <div className="con">
          <h2 className='clin'>Our Clients</h2>
          <p className='cli'>We have been working with some Fortune 500+ clients</p>
          <img className='brend' src={brn} alt="" />
          <h2 className='clin'>Manage your entire community in a single system</h2>
        <div className="rowcard">
        <div className="card">
            <img className='cardi' src={ca3} alt="" />
            <h1 className='cardh'  > Membership Organisations</h1>
            <p className='cardp'  >Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="card">
            <img className='cardi' src={ca1} alt="" />
            <h1 className='cardh'  > National Associations</h1>
            <p className='cardp'  >Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="card">
            <img className='cardi' src={ca2} alt="" />
            <h1 className='cardh'  > Clubs And Groups</h1>
            <p className='cardp'  >Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
        <div className="row">
        <div className="right">
              <img className='kamp' src={foot} alt="" />
            </div>
            <div className="left">
              <h1 className='hh11'>The unseen of spending three years at Pixelgrade</h1>
              <br />
              <br />
              <p className='pin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              <button className='btn1'>Learn More</button>
            </div>
         
          </div>
        </div>
      </section>
    </>

  )
}

export default App