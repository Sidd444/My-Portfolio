// Mob-Nav

export const menuSlide = {
    initial:{
        x:"100%"
    },
    enter:{
        x:"-20%",
        transition:{duration:0.6, ease: [0.45, 0, 0.55, 1]}
    },
    exit:{
        x: "80%",
        transition:{duration:0.6, ease: [0.45, 0, 0.55, 1]}
     }
}
export const slide = {
    initial:{
        x:"80px"
    },
    enter: (i)=>(
        {
            x:"0",
            transition:{duration:0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05*i}
            
        }
    ),
    exit:(i)=>(
        {
        x: "80px",
        transition:{duration:0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05*i}
        
        }
    )
}


// skill section

export const icon = {
    initial:{

        opacity:0
    },
    whileInView: (i)=>(
        {
            opacity:1,
            transition:{duration:0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05*i}
            
        }
    )
}


// Service

export const card ={
    initial:{
        x:[0,0], 
        opacity:0
    },
    whileInView: (i)=>(
        {   
            x:[-150,0],     
            transition:{duration:0.4, ease: [0.45, 0, 1, 1], delay: 0.05*i },
            opacity:1
            
        }
    ),
    
}

// Fireflies animation

export function fireflies(selector){
const squareBg=`
<div class="glowing" id="bg-wrap">
${Array.from({length:8}).map((_,i)=>`<span style="--i:${(i%6)+1};"></span>`).join('')}
</div>
<div class="glowing">
${Array.from({length:4}).map((_,i)=>`<span style="--i:${(i%6)+1};"></span>`).join('')}
</div>
<div class="glowing">
${Array.from({length:4}).map((_,i)=>`<span style="--i:${(i%6)+1};"></span>`).join('')}
</div>
<div class="glowing">
${Array.from({length:4}).map((_,i)=>`<span style="--i:${(i%6)+1};"></span>`).join('')}
</div>
`

const squareStyle=`
.glowing{position:relative;min-width:700px;height:550px;margin:-150px;transform-origin:right;animation:colorChange 8s infinite;}
.glowing:nth-child(even){transform-origin:left;}
@keyframes colorChange{0%{filter:hue-rotate(0deg);transform:rotate(0deg);}100%{filter:hue-rotate(360deg);transform:rotate(360deg);}}
.glowing span{position:absolute;top:calc(80px * var(--i));left:calc(80px * var(--i));bottom:calc(80px * var(--i));right:calc(80px * var(--i));}
.glowing span::before{content:"";position:absolute;top:50%;left:-8px;width:15px;height:15px;background:#f00;border-radius:50%;}
.glowing span:nth-child(3n+1)::before{background:rgba(134,255,0,1);box-shadow:0 0 20px rgba(134,255,0,1),0 0 40px rgba(134,255,0,1),0 0 60px rgba(134,255,0,1),0 0 80px rgba(134,255,0,1),0 0 0 8px rgba(134,255,0,.1);}
.glowing span:nth-child(3n+2)::before{background:rgba(255,214,0,1);box-shadow:0 0 20px rgba(255,214,0,1),0 0 40px rgba(255,214,0,1),0 0 60px rgba(255,214,0,1),0 0 80px rgba(255,214,0,1),0 0 0 8px rgba(255,214,0,.1);}
.glowing span:nth-child(3n+3)::before{background:rgba(0,226,255,1);box-shadow:0 0 20px rgba(0,226,255,1),0 0 40px rgba(0,226,255,1),0 0 60px rgba(0,226,255,1),0 0 80px rgba(0,226,255,1),0 0 0 8px rgba(0,226,255,.1);}
.glowing span:nth-child(3n+1){animation:animate 10s alternate infinite;}
.glowing span:nth-child(3n+2){animation:animate-reverse 3s alternate infinite;}
.glowing span:nth-child(3n+3){animation:animate 8s alternate infinite;}
@keyframes animate{0%{transform:rotate(180deg);}50%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
@keyframes animate-reverse{0%{transform:rotate(360deg);}50%{transform:rotate(180deg);}100%{transform:rotate(0deg);}}
#bg-wrap{position:absolute;inset:0;z-index:0;pointer-events:none;}
layer{background:transparent !important;}
`

const ele=document.querySelector(selector);
const styleTag=document.createElement('style')
styleTag.innerText=squareStyle
document.head.appendChild(styleTag)
const wrap=document.createElement('div')
wrap.innerHTML=squareBg
ele.appendChild(wrap.firstElementChild)
}
