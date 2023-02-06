import React from 'react'
import './Brand.css'

function Brand() {
  return (
    <div className='brand'>
      <div className='header'>
        <h1> Gallery Brands </h1>
      </div>
      <div className='photo-gallery'>


      <div className='column'>
          <div className='photo'>
          <img src='https://imgs.search.brave.com/lqXV-HA9HxnEwIl2qWf5WwF-mxLw7mEg_lianPBrmbE/rs:fit:1200:943:1/g:ce/aHR0cHM6Ly8yLmJw/LmJsb2dzcG90LmNv/bS8tenpua0VDbTBz/cTgvV2sybjl0MFZa/bUkvQUFBQUFBQUFB/dEEvMnlFNjYwSlgw/NWtCVDQtMVVrU1lx/eUZHeGlObVlOamJB/Q0xjQkdBcy9zMTYw/MC80LmpwZw' />
          </div>
          <div className='photo'>
          <img src='https://imgs.search.brave.com/41Ji1R0ugTDgXIkpjH0qDJEZe857J0QOBrLCjFVXd7o/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly80LmJw/LmJsb2dzcG90LmNv/bS8tcEpwajZzSFNs/QTQvVlF4amxCR2tm/V0kvQUFBQUFBQUFC/UlkvUUtCcWdXVXhH/SGsvczE2MDAvbGVu/b3ZvLWxhcHRvcC1y/ZXBhaXIuanBn' />
          </div>
        </div>

        <div className='column'>
          <div className='photo'>
          <img src='https://imgs.search.brave.com/eluO0zSFgP9_2YSJ_l_ps3g_HNMm4UgCj4mVYQ--c7M/rs:fit:558:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/clVVdTdVcUVMWG1v/RGFmTTJRMmhRSGFH/UyZwaWQ9QXBp' />
          </div>
          <div className='photo'>
          <img src='https://imgs.search.brave.com/GY-lRR_AERoNq-MCmAWoRFce25hUduZNUmEaSHVpyXs/rs:fit:1200:945:1/g:ce/aHR0cHM6Ly93d3cu/bmFpcmFsYW5kLmNv/bS9hdHRhY2htZW50/cy81MTcyNzk0X2Rl/bGxsYXB0b3BfanBl/Z2M4NjY3NjBiODcz/MTg5NDUzZGFmMjYy/MDNjMTRkODI0' />
          </div>
        </div>

        <div className='column'>
          <div className='photo'>
          <img src='https://imgs.search.brave.com/lqXV-HA9HxnEwIl2qWf5WwF-mxLw7mEg_lianPBrmbE/rs:fit:1200:943:1/g:ce/aHR0cHM6Ly8yLmJw/LmJsb2dzcG90LmNv/bS8tenpua0VDbTBz/cTgvV2sybjl0MFZa/bUkvQUFBQUFBQUFB/dEEvMnlFNjYwSlgw/NWtCVDQtMVVrU1lx/eUZHeGlObVlOamJB/Q0xjQkdBcy9zMTYw/MC80LmpwZw' />
          </div>
          <div className='photo'>
          <img src='https://imgs.search.brave.com/dX5vZe4d7pW6E3ie2los6N3W8yuhqVh6NfuzR2IODxk/rs:fit:1024:918:1/g:ce/aHR0cDovL3ZhbHVl/bm9tYWQuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA2/L21zaS1nZTYyLWFw/YWNoZS1wcm8tZ2Ft/aW5nLWxhcHRvcC5q/cGc' />
          </div>
        </div>

      <div className='column'>
        <div className='brand_container'>
          <h3>Our Products</h3>
          <p>We offer different brand product that you may be intrested or wanted, monitor, keybord, mouce, harddisk, speaker, ram, laptop, computer.</p>
          <button>Learn More</button>
        </div>
      </div>

        </div>

      {/* <div className='column'>
        <h3>Our Products</h3>
        <p>We offer different brand product that you may be intrested or wanted, monitor, keybord, mouce, harddisk, speaker, ram, laptop, computer.</p>
      </div> */}

      {/* <div className='brand-button'>
        <button>Learn More</button>
      </div> */}
    </div>
  )
}

export default Brand