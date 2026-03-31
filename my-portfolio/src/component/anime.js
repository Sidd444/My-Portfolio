// Mob-Nav

export const menuSlide = {
    initial: {
        x: "100%"
    },
    enter: {
        x: "-20%",
        transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] }
    },
    exit: {
        x: "80%",
        transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] }
    }
}
export const slide = {
    initial: {
        x: "80px"
    },
    enter: (i) => (
        {
            x: "0",
            transition: { duration: 0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05 * i }

        }
    ),
    exit: (i) => (
        {
            x: "80px",
            transition: { duration: 0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05 * i }

        }
    )
}


// skill section

export const icon = {
    initial: {

        opacity: 0
    },
    whileInView: (i) => (
        {
            opacity: 1,
            transition: { duration: 0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05 * i }

        }
    )
}


// Service

export const card = {
    initial: {
        x: [0, 0],
        opacity: 0
    },
    whileInView: (i) => (
        {
            x: [-150, 0],
            transition: { duration: 0.4, ease: [0.45, 0, 1, 1], delay: 0.05 * i },
            opacity: 1

        }
    ),

}

// Fireflies animation

export function fireflies(selector) {
    const squareBg = `
<div class="glowing" id="bg-wrap">
${Array.from({ length: 8 }).map((_, i) => `<span style="--i:${(i % 6) + 1};"></span>`).join('')}
</div>
<div class="glowing">
${Array.from({ length: 4 }).map((_, i) => `<span style="--i:${(i % 6) + 1};"></span>`).join('')}
</div>
<div class="glowing">
${Array.from({ length: 4 }).map((_, i) => `<span style="--i:${(i % 6) + 1};"></span>`).join('')}
</div>
<div class="glowing">
${Array.from({ length: 4 }).map((_, i) => `<span style="--i:${(i % 6) + 1};"></span>`).join('')}
</div>
`

    const squareStyle = `
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

    const ele = document.querySelector(selector);
    const styleTag = document.createElement('style')
    styleTag.innerText = squareStyle
    document.head.appendChild(styleTag)
    const wrap = document.createElement('div')
    wrap.innerHTML = squareBg
    ele.appendChild(wrap.firstElementChild)
}

//bubble squares background animation

export function bubblesSquares(selector){
    const style = document.createElement('style');
style.textContent = `
@import url('https://fonts.googleapis.com/css?family=Exo:400,700');
.area {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to left, #8f94fb, #4e54c8); overflow: hidden; z-index: -1;
}
.circles { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; }
.circles li {
  position: absolute; display: block; list-style: none; width: 20px; height: 20px;
  background: rgba(255,255,255,0.2); animation: animate 7s linear infinite; bottom: -150px;
}
.circles li:nth-child(1){ left:25%; width:80px; height:80px; animation-delay:0s; }
.circles li:nth-child(2){ left:10%; width:20px; height:20px; animation-delay:2s; animation-duration:8s; }
.circles li:nth-child(3){ left:70%; width:20px; height:20px; animation-delay:4s; animation-duration:11s; }
.circles li:nth-child(4){ left:40%; width:60px; height:60px; animation-delay:0s; animation-duration:9s; }
.circles li:nth-child(5){ left:65%; width:20px; height:20px; animation-delay:0s; animation-duration:7s; }
.circles li:nth-child(6){ left:75%; width:110px; height:110px; animation-delay:3s; animation-duration:12s; }
.circles li:nth-child(7){ left:35%; width:150px; height:150px; animation-delay:7s; animation-duration:14s; }
.circles li:nth-child(8){ left:50%; width:25px; height:25px; animation-delay:15s; animation-duration:18s; }
.circles li:nth-child(9){ left:20%; width:15px; height:15px; animation-delay:2s; animation-duration:13s; }
.circles li:nth-child(10){ left:85%; width:150px; height:150px; animation-delay:0s; animation-duration:15s; }
@keyframes animate {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; border-radius: 0; }
  100% { transform: translateY(-3000px) rotate(720deg); opacity: 0; border-radius: 50%; }
}`;
document.head.appendChild(style);

const area = document.createElement('div');
area.className = 'area';

const circles = document.createElement('ul');
circles.className = 'circles';

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  circles.appendChild(li);
}

area.appendChild(circles);
const layer = document.querySelector(selector);
layer.style.position = 'fixed';
layer.style.zIndex = '0';
area.style.height = layer.scrollHeight + 'px';
layer.insertBefore(area, layer.firstChild);
}