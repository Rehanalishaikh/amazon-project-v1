import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
           <div className="home--container">
              <img className="home--image" src="https://m.media-amazon.com/images/I/71rKhX5FN1L._SX3000_.jpg" alt=" "/>
               
              <div className="home--row">
              <Product 
                  id="01"
                  title="See U in C by Ali Karim Sayed (Author) "
                  price={4450}
                  image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                 />
              <Product 
                  id="02"
                  title="OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)
                  "
                  price={22000}
                  image="https://m.media-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg"
              />
              <Product 
                 id="03"
                 title=" Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate "
                 price={21000}
                 image="https://m.media-amazon.com/images/I/71r69Y7BSeL._SL1500_.jpg"
              />
                               
              </div>
             
              <div className="home--row">
              <Product 
                 id="04"
                 title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black)"
                 price={2200}
                 image="https://m.media-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg"
              />
              <Product 
                 id="05"
                 title="
                 boAt Rockerz 385v2 Bluetooth Neckband with Qualcomm® aptx & CVC, Upto 40 Hours Battery, ASAP Charge, IPX6 Rating and Dual Pairing(Active Black)"
                 price={1200}
                 image="https://m.media-amazon.com/images/I/510gnVU7ccL._SL1500_.jpg " 
              />
              </div>
             
              <div className="home--row">
              <Product 
                  id="06"
                  title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish)   "
                  price={10000}
                  image="https://images-eu.ssl-images-amazon.com/images/I/315q4CFDxqL._SY445_SX342_QL70_FMwebp_.jpg"
              />
              </div>

            </div>
        </div>
    )
}

export default Home