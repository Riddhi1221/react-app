import './App.css';
import Eventcard from './Components/Eventcard';

function EventsCard() {
    return (
        <div className="w-100">
        <div className="w-1140">
         <div className="flex">
            <Eventcard img="https://www.cdmi.in/events/thumbnail/data_science_course_in_surat.jpeg"  text="CodeWars Coding & Logo Design Competition 2023" title="Creative Design & Multimedia Institute" pera="Creative Design & Multimedia Institute had Organized a CodeWars Coding & Logo Design Competition on 4th Oct 2023."/>
            <Eventcard img="https://www.cdmi.in/events/thumbnail/beyond-post-banner.jpg"  text="Beyond The Boundaries 2023" title="IT Park Fifad Developers" pera=" had organized a Beyond The Bondaries to Fifad Developers (Canal to Airport Road, Opp La Fountain) on 2nd May 2023. "/>
            <Eventcard img="https://www.cdmi.in/events/thumbnail/ADANI-VISIT.jpg"  text="INDUSTRIAL VISIT AT ADANI PORT Pvt. Ltd. (HAZIRA) " title="Hazira port" pera=" had organized an industrial visit to Adani Port Pvt. Ltd. (Hazira) on 6th january 2020. 55 students from Our Institute attended this visit. The students were accompanied by 5 Faculty members. This visit was under the Project UDAAN by Adani Foundation.Under this project, an exposure tour is organized wherein students are given a chance to visit the Adani Port and Adani Power facilities at the Hazira site and to get an insight into the large scale business activities carried out there. "/>
            <Eventcard img="https://www.cdmi.in/events/thumbnail/SPORT-2019.jpg"  text="Sports Mania - 2019" title="shangar Farm" pera=" The much awaited Sports Day was held on Saturday 28th December 2019 with great zeal, excitement and frolicsome atmosphere."/>
            <Eventcard img="https://www.cdmi.in/events/thumbnail/IT-TRAINING.jpg"  text="Best IT Training Institute In Gujarat" title="New Delhi" pera="CDMI-Creative Design & Multimedia Institute, has been conferred with an esteemed award at BRAND ICON OF THE YEAR 2019  held in Delhi. CDMI won the coveted Best IT Training Institute In Gujarat"/>
            <Eventcard img="https://www.cdmi.in/events/thumbnail/BRAND-ICON_(1).jpg"  text="Best Design & Multimedia Institute In Gujarat " title="New Delhi" pera="Creative Design & Multimedia Institute is a reputed multimedia and design institute in surat.because of these it's qualified as a  "/>
         </div>
        </div>
       </div>
    )
  }
  
  export default EventsCard;