'use client'
import { useState } from 'react';
import './SkillComponents.modules.css';
const SkillComponent = () =>{

   const[java, setJava] = useState("emojiJava");
   const[js, setJs] = useState("emojiJs");
   const[react, setReact] = useState("emojiReact");
   const[nextjs, setNextjs] = useState("emojiNextjs");
 

   function showJavaSkill () {
      if(java == "emojiJava"){
         setJava("emojiJavaOn");
      }else{
         setJava("emojiJava");
      }
   }

   function showJsSkill () {
      if(js == "emojiJs"){
         setJs("emojiJsOn");
      }else{
         setJs("emojiJs");
      }
   }

   function showReactSkill(){
      if(react == "emojiReact"){
         setReact("emojiReactOn");
      }else{
         setReact("emojiReact");
      }
   }

   function showNextjsSkill(){
      if(nextjs == "emojiNextjs"){
         setNextjs("emojiNextjsOn");
      }else{
         setNextjs("emojiNextjs");
      }
   }

   return(
      <div className="containerSkills">
   
         <div className="languages">
            
            <h2>Languages</h2>
            <button className="lButtonJava" onClick={showJavaSkill}>
            </button>
            <p className={java}></p>

            <button className="lButtonJs" onClick={showJsSkill}>
            </button>
            <p className={js}></p>
            
         </div>

         <div className='frameworks'>
            
            <h2>Frameworks</h2>
            <button className="lButtonReact" onClick={showReactSkill}>
            </button>
            <p className={react}></p>

            <button className="lButtonNextJs" onClick={showNextjsSkill}>
            </button>
            <p className={nextjs}></p>
            
         </div>

      </div>
   )
}
export default SkillComponent;