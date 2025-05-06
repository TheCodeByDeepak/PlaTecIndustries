import React, { useState } from 'react';
import '../styles/ProductsPage.css';
import shrinkLabelImg from '../asserts/images/product1.jpg';
import sleevesImg from '../asserts/images/product2.jpg';
import lithiumImg from '../asserts/images/product3.jpg';
import busbar from '../asserts/images/product4.jpg';
import polyolefin from '../asserts/images/product6.jpg';
import siliconeInsulation from '../asserts/images/product5.jpg';
import siliconePress from '../asserts/images/product7.jpg';
import siliconeSelf from '../asserts/images/product8.jpg';
import PolycarbonateCover from '../asserts/images/product11.jpg';
import PolycarbonateGuard from '../asserts/images/product10.jpg';
import HeatTubes from '../asserts/images/product9.jpg';


const ProductsPage = () => {
  const [expanded, setExpanded] = useState({
    shrinkLabel: false,
    sleeves: false,
    lithium: false
  });

  const toggleDescription = (product) => {
    setExpanded((prevState) => ({
      ...prevState,
      [product]: !prevState[product]
    }));
  };

  return (
    <div className="product-sections">
      <h2 className="page-title">Our Product Range</h2>

      <div className="product-block">
        <h2 className="section-title">Bus Bar Insulation</h2>
        <div className="content">
          <img src={busbar} alt="Bus Bar Insulation" />
          <p>
            {expanded.busbar ? (
              <>
                Our PVC Heat Shrinkable Tubing provides reliable insulation for aluminium and copper bus bars in control panels and switchgear. It's a modern alternative to taping and painting.

Available in 15–330 mm widths and 80–400 micron thicknesses, with standard and custom colors.

Made in India, UL-certified, ROHS & REACH compliant, and supports up to 125°C for special needs.
 {/* Properties Table */}
 <table className="properties-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Working Temperature</td><td>90°C</td></tr>
        <tr><td>Dielectric Strength</td><td>20 KV/mm</td></tr>
        <tr><td>Insulation Resistance</td><td>20 × 10⁶ ohms at 500 VDC</td></tr>
        <tr><td>Tensile Strength</td><td>Min 400 Kg/cm</td></tr>
        <tr><td>Ultimate Elongation</td><td>Min 11%</td></tr>
        <tr><td>Chemical Resistance</td><td>Good</td></tr>
        <tr><td>Fire Resistance</td><td>Self Extinguishing with no dripping</td></tr>
        <tr><td>Shrinking Temperature</td><td>150°C–170°C for 4–5 mins</td></tr>
        <tr><td>Mechanical Strength</td><td>Excellent</td></tr>
        <tr><td>Heat Dissipation</td><td>Excellent</td></tr>
      </tbody>
    </table>
              </>
            ) : (
              <>
               Our PVC Heat Shrinkable Tubing provides reliable insulation for aluminium and copper bus bars in control panels and switchgear. It's a modern alternative to taping and painting....
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleDescription('busbar')}>
            {expanded.busbar ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      <div className="product-block">
        <h2 className="section-title">PVC Heat Shrink Label</h2>
        <div className="content">
          <img src={shrinkLabelImg} alt="PVC Heat Shrink Label" />
          <p>
            {expanded.shrinkLabel ? (
              <>
                PVC Heat Shrink Labels are an innovative technique for promoting different types of products or brands. These labels are manufactured from PVC polymers, which shrink when heated and perfectly enclose the container. This highlights the product's shape and ensures optimal graphic presentation. With rotogravure reverse printing, they enhance the design and protect it like a second skin. PVC Heat Shrink Labels are widely used in packaging industries to provide a professional finish to the product, making it visually appealing to customers.
              </>
            ) : (
              <>
                PVC Heat Shrink Labels are an innovative technique for promoting different types of products or brands. These labels are manufactured from PVC polymers, which shrink when heated and perfectly enclose the container...
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleDescription('shrinkLabel')}>
            {expanded.shrinkLabel ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      <div className="product-block">
        <h2 className="section-title">PVC Heat Shrink Sleeves & Capseals</h2>
        <div className="content">
          <img src={sleevesImg} alt="PVC Heat Shrink Sleeves" />
          <p>
            {expanded.sleeves ? (
              <>
                PVC Heat Shrink Sleeves are modern solutions to make products tamper-proof and seal-proof. They come in sleeves, pouches, and pre-formed varieties. Used in combo packaging or as full-body sleeves or cap seals, they ensure pilfer-proof security until use. They are an essential product for industries requiring high-quality, durable packaging solutions, and are also used for branding and marketing purposes.
              </>
            ) : (
              <>
                PVC Heat Shrink Sleeves are modern solutions to make products tamper-proof and seal-proof...
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleDescription('sleeves')}>
            {expanded.sleeves ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      <div className="product-block">
        <h2 className="section-title">For Lithium Battery Packaging</h2>
        <div className="content">
          <img src={lithiumImg} alt="Lithium Battery Packaging" />
          <p>
            {expanded.lithium ? (
              <>
                A wide range of lithium batteries use PVC Heat Shrink Sleeves to protect the battery from external damage. Blue and white are the preferred colors in this segment. These sleeves provide an added layer of safety, helping to avoid short circuits and other hazardous conditions. PVC shrink sleeves for lithium battery packaging are essential for ensuring the durability and reliability of batteries.
              </>
            ) : (
              <>
                A wide range of lithium batteries use PVC Heat Shrink Sleeves to protect the battery from external damage...
              </>
            )}
          </p>
          <button
  className="read-more-btn"
  onClick={() => toggleDescription('lithium')}
>
  {expanded.shrinkLabel ? 'Read Less' : 'Read More'}
</button>


        </div>
      </div>

      <div className="product-block">
        <h2 className="section-title">Polyolefin Insulation Cover / Shrouds</h2>
        <div className="content">
          <img src={polyolefin} alt="polyolefin Insulation Cover / Shrouds" />
          <p>
            {expanded.sleeves ? (
              <>
              The Insulation Covers are Pre-formed cover that helps prevent animal contact outages. The Insulation Covers are made from High quality Polyolefin material. The Insulation Cover is flexible and hydrophobic. The flexibility allows for an easy connection between cables and bus to equipment. The Insulation Cover bends to allow complete insulation. Insulation Covers can be used in any environment. With its superior UV and chemical resistant properties, sustain expected life beyond 25 years. Install and Relax.
              </>
            ) : (
              <>
                The Insulation Covers are Pre-formed cover that helps prevent animal contact outages. The Insulation Covers are made from High quality Polyolefin material...
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleDescription('sleeves')}>
            {expanded.sleeves ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>


      
      <div className="product-block">
        <h2 className="section-title">Silicone Insulation Cover / Shrouds</h2>
        <div className="content">
          <img src={siliconeInsulation} alt="Silicone Insulation Cover / Shrouds" />
          <p>
            {expanded.siliconeInsulation ? (
              <>
              The Insulation Covers are moulded high temperature vulcanized silicone cover that helps prevent animal contact outages. The Insulation Cover is flexible and hydrophobic. The flexibility allows for an easy connection between cables and bus to equipment. The Insulation Cover bends to allow complete insulation. Unlike other hard plastic covers, cutting holes, making slits and field modifications are virtually eliminated. Sustain expected shelf life beyond 25 years. Install and Relax.
              </>
            ) : (
              <>
                The Insulation Covers are moulded high temperature vulcanized silicone cover that helps prevent animal contact outages...
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleDescription('siliconeInsulation')}>
            {expanded.siliconeInsulation ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>


      <div className="product-block">
        <h2 className="section-title">Silicone Overhead Line Cover - Press-locking Type
        </h2>
        <div className="content">
          <img src={siliconePress} alt="Silicone Overhead Line Cover - Press-locking Type" />
          <p>
            {expanded.siliconePress ? (
              <>
              Overhead Line Covers are easy-to-install silicone insulators designed for bare conductors. Featuring a press-lock system, they require no disconnection or special tools except for cutting to length. These covers provide electrical insulation and protection against birds, animals, UV exposure, and tracking. They are durable enough to withstand rough handling and repeated use.
              </>
            ) : (
              <>
                Overhead Line Covers are easy-to-install silicone insulators designed for bare conductors. Featuring a press-lock system, they require no disconnection or special tools except for cutting to length...
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleDescription('siliconePress')}>
            {expanded.siliconePress ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>


      <div className="product-block">
        <h2 className="section-title">Silicone Overhead Line Cover - Self-locking Type
        </h2>
        <div className="content">
          <img src={siliconeSelf} alt="Silicone Overhead Line Cover - Self-locking Type" />
          <p>
            {expanded.siliconeSelf ? (
              <>
              Overhead Line Covers are designed for field installation over bare conductors. The Silicone Line Covers are manufactured with a split seam to allow for an easy application without the need of breaking electrical connections. No tools other than a cutting tool for proper length are needed.
              </>
            ) : (
              <>
                Overhead Line Covers are designed for field installation over bare conductors. The Silicone Line Covers are manufactured with...
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleDescription('siliconeSelf')}>
            {expanded.siliconeSelf ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      <div className="product-block">
        <h2 className="section-title">Polycarbonate High Voltage Cover
        </h2>
        <div className="content">
          <img src={PolycarbonateCover} alt="Polycarbonate High Voltage Cover" />
          <p>
            {expanded.PolycarbonateCover ? (
              <>
              High Voltage Insulator protection Covers protect against bird streamer caused outage. The innovative shield design provides protection from faecal and other soluable contaminates coming from above the insulator string. 
              </>
            ) : (
              <>
                High Voltage Insulator protection Covers protect against bird streamer caused outage. The innovative shield design provides protection...
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleDescription('PolycarbonateCover')}>
            {expanded.PolycarbonateCover ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>


      
      <div className="product-block">
        <h2 className="section-title">Polycarbonate Bird Guard
        </h2>
        <div className="content">
          <img src={PolycarbonateGuard} alt="Polycarbonate Bird Guard" />
          <p>
            {expanded.PolycarbonateGuard ? (
              <>
              Spike Systems are a cost-effective and easy-to-install solution for preventing birds like pigeons and seagulls from perching or roosting on structures. Made from durable polycarbonate, these bird guards can be attached using silicone adhesive, screws, or nails. Available in various sizes, they are suitable for protecting ledges, gutters, beams, pipes, substations, and signs from bird-related issues.
              </>
            ) : (
              <>
                Spike Systems are a cost-effective and easy-to-install solution for preventing birds like pigeons and seagulls from perching or roosting on structures...
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleDescription('PolycarbonateGuard')}>
            {expanded.PolycarbonateGuard ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>


      <div className="product-block">
        <h2 className="section-title">Heat Shrink Tubes
        </h2>
        <div className="content">
          <img src={HeatTubes} alt="Heat Shrink Tubes" />
          <p>
            {expanded.HeatTubes ? (
             <>
             For proper installation, heat shrink tubing must fit snugly around cables, making size selection crucial. Tubing is labeled by shrink ratios (e.g., 2:1 means it shrinks to half its diameter). Choose tubing that shrinks slightly smaller than the cable for optimal protection. This enhances durability, reliability, and performance across various applications. PTW Heat Shrink Thin Wall Tubes (suitable up to 3.3kV) are used for wire harnessing, electrical insulation, strain relief, bus-bar insulation in switchgear, and color coding of wires, cables, terminals, and components in electrical and electronic applications.
           
             <table className="properties-table">
               <thead>
                 <tr>
                   <th>Test Description</th>
                   <th>Test Method</th>
                   <th>Typical Value</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>Tensile Strength</td>
                   <td>ASTM D412</td>
                   <td>15 N/mm (Min.)</td>
                 </tr>
                 <tr>
                   <td>Elongation</td>
                   <td>ASTM D412</td>
                   <td>300% (Min.)</td>
                 </tr>
                 <tr>
                   <td>Density</td>
                   <td>ASTM D792</td>
                   <td>1.4 mm</td>
                 </tr>
                 <tr>
                   <td>Longitudinal Change</td>
                   <td>ASTM D2671</td>
                   <td>-10% (Max.)</td>
                 </tr>
                 <tr>
                   <td>Water Absorption</td>
                   <td>ASTM D570</td>
                   <td>0.15% (Max.)</td>
                 </tr>
                 <tr>
                   <td>Low Temp. Flexibility (-55°C for 4 Hrs.)</td>
                   <td>ASTM D2671</td>
                   <td>No Cracking</td>
                 </tr>
                 <tr>
                   <td>Heat Shock (250°C for 4 Hrs.)</td>
                   <td>ASTM D2671</td>
                   <td>No Cracking</td>
                 </tr>
                 <tr>
                   <td>Continuous Operating Temperature</td>
                   <td>IEC 216</td>
                   <td>-55°C to 125°C</td>
                 </tr>
                 <tr>
                   <td>Flammability</td>
                   <td>UL 224 VW1</td>
                   <td>PASS</td>
                 </tr>
                 <tr>
                   <td>Copper Corrosion Resistance</td>
                   <td>ASTM D2671 216</td>
                   <td>Good</td>
                 </tr>
                 <tr>
                   <td>Chemical Resistance</td>
                   <td>ASTM D2671</td>
                   <td>Good</td>
                 </tr>
                 <tr>
                   <td>Volume Resistance</td>
                   <td>ASTM D257</td>
                   <td>1 × 10¹⁴ Ohm·cm (Min.)</td>
                 </tr>
                 <tr>
                   <td>Dielectric Strength</td>
                   <td>ASTM D149</td>
                   <td>20 kV/mm (Min.)</td>
                 </tr>
               </tbody>
             </table>
           </>
           
            ) : (
              <>
                For proper installation, heat shrink tubing must fit snugly around cables, making size selection crucial. Tubing is labeled by shrink ratios (e.g., 2:1 means it shrinks to half its diameter). ..
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleDescription('HeatTubes')}>
            {expanded.HeatTubes ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>


    </div>
  );
};

export default ProductsPage;
