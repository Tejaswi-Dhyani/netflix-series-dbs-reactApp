import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Card from "./Card";
import Sdata from "./Sdata";


// export default function App() {
//   return (
//    <>
//    <div className="AppBody">
//     <div className="headingbar  bg-light py-3 mb-5 ">
//       <h2 className="text-center"> Top Netflix Series 2022</h2>
//     </div>
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4 mb-4">
//         <Card imgsrc={Sdata[0].imgsrc}
// sname={Sdata[0].sname} 
// slink={Sdata[0].slink}
//           /> 
//         </div>
//         <div className="col-md-4 mb-4">
//         <Card imgsrc={Sdata[1].imgsrc}
// sname={Sdata[1].sname} 
// slink={Sdata[1].slink}
//           /> 
//         </div>
//         <div className="col-md-4 mb-4">
//         <Card imgsrc={Sdata[2].imgsrc}
// sname={Sdata[2].sname} 
// slink={Sdata[2].slink}
//           /> 
//         </div>
//         <div className="col-md-4 mb-4">
//         <Card imgsrc={Sdata[3].imgsrc}
// sname={Sdata[3].sname} 
// slink={Sdata[3].slink}
//           /> 
//         </div>
//         <div className="col-md-4 mb-4">
//         <Card imgsrc={Sdata[4].imgsrc}
// sname={Sdata[4].sname} 
// slink={Sdata[4].slink}
//           /> 
//         </div>
//         <div className="col-md-4 mb-4">
//         <Card imgsrc={Sdata[5].imgsrc}
// sname={Sdata[5].sname} 
// slink={Sdata[5].slink}
//           /> 
//         </div>
//       </div>
    
   

//     </div>
   
    
   
//    </div>

   
//    </>
//   );
// }

export default function App() {
  return (
   <>
   <div className="AppBody">
    <div className="headingbar  bg-light py-3 mb-5 ">
      <h2 className="text-center"> Top Netflix Series 2022</h2>
    </div>
    <div className="container">
      <div className="row">
        
        
          {
            Sdata.map(function ncard(val){
              return(
                <div className="col-md-4 mb-4">
                  <Card imgsrc={val.imgsrc}
                sname={val.sname} 
                slink={val.slink}
                          /> 
                </div>
                
              );
             
            })
          }
        </div>
      
    </div>
  </div>
</>
  );
}