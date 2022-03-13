import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Paginaton";
import { BASE_URL } from "utils/requests";

function Listing() {

   axios.get(`${BASE_URL}/movies?size=12&page=0`)
   .then(Response => {
      console.log(Response.data); 
   })

   return (
      <>
         <Pagination />

         <div className="conteiner">
            <div className="row">
               <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                  <MovieCard />
               </div>
               
            </div>
         </div>

      </>
   );
}

export default Listing;