import './App.css';
import Card from './Components/Card';

function Cards() {
  return (

    <div className="w-100">
    <div className="w-1140">
     <div className="flex">
     <Card img="https://www.cdmi.in/gallery_category/thumbnail/Screen.jpg" text="78th Independence Day"/>
     <Card img="https://www.cdmi.in/gallery_category/thumbnail/thum.jpg" alt="" text="Project Fair - 2024"/>
     <Card img="https://www.cdmi.in/gallery_category/thumbnail/Untitled-14.jpg" text="Dindoli Opening Ceremony"/>
     <Card img="https://www.cdmi.in/gallery_category/thumbnail/sport-24.jpg" text="Sport Mania 2024"/>
     <Card img="https://www.cdmi.in/gallery_category/thumbnail/sarthana-thumbnail.jpg" text="Sarthana Opening Ceremony"/>
     <Card img="https://www.cdmi.in/gallery_category/thumbnail/thumb.jpg" text="Parents Meeting 2024"/> 
     <Card img="https://www.cdmi.in/gallery_category/thumbnail/26th-january.jpg" text="26th january 2024"/>
     <Card img="https://www.cdmi.in/gallery_category/thumbnail/guru-purnima-360.jpg" text="Guru Purnima - 2024"/> 
     <Card img="https://www.cdmi.in/gallery_category/thumbnail/new.png" text="BrainBlast Challenge"/>
     </div>
    </div>
   </div>
  
  );
};

export default Cards;