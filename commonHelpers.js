import"./assets/styles-50da57b8.js";import{f as C,i as x}from"./assets/vendor-651d7991.js";const u=document.querySelector("[data-start]"),d=document.querySelector("#datetime-picker"),l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),r=document.querySelector("[data-seconds]");let i=0;class T{constructor(t){this.tick=t,this.isActive=!1}start(){this.isActive||(this.isActive=!0,this.initTime=Date.now(),console.log(this.initTime),this.intervalId=setInterval(()=>{const t=Date.now(),n=i-t,s=this.convertMs(n);this.tick(s);const c={day:l.textContent,hour:m.textContent,minute:h.textContent,second:r.textContent},a={day:e(0),hour:e(0),minute:e(0),second:e(0)};JSON.stringify(c)===JSON.stringify(a)&&this.stop()},1e3))}stop(){clearInterval(this.intervalId)}convertMs(t){const y=Math.floor(t/864e5),p=Math.floor(t%864e5/36e5),S=Math.floor(t%864e5%36e5/6e4),v=Math.floor(t%864e5%36e5%6e4/1e3);return{days:y,hours:p,minutes:S,seconds:v}}}d.addEventListener("input",()=>{f.stop()});const f=new T(g);u.disabled=!0;function g({days:o,hours:t,minutes:n,seconds:s}){l.textContent=e(o),m.textContent=e(t),h.textContent=e(n),r.textContent=e(s)}function e(o){return o.toString().padStart(2,"0")}const k={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){i=o[0].getTime(),i<Date.now()?(f.stop(),x.show({title:"Hey",message:"Please choose a date in the future",closeOnClick:!0,closeOnEscape:!0})):u.disabled=!1}};C(d,k);console.log(r.value);
//# sourceMappingURL=commonHelpers.js.map
