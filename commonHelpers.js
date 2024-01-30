import"./assets/styles-50da57b8.js";import{f as C,i as k}from"./assets/vendor-651d7991.js";const i=document.querySelector("[data-start]"),l=document.querySelector("#datetime-picker"),m=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),c=document.querySelector("[data-seconds]");let r=0;class x{constructor(t){this.tick=t,this.isActive=!1}start(){this.isActive||(this.isActive=!0,this.initTime=Date.now(),console.log(this.initTime),this.intervalId=setInterval(()=>{const t=Date.now(),o=r-t,s=this.convertMs(o);this.tick(s);const u={day:m.textContent,hour:h.textContent,minute:f.textContent,second:c.textContent},d={day:e(0),hour:e(0),minute:e(0),second:e(0)};JSON.stringify(u)===JSON.stringify(d)&&this.stop()},1e3))}stop(){clearInterval(this.intervalId)}convertMs(t){const y=Math.floor(t/864e5),p=Math.floor(t%864e5/36e5),v=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:y,hours:p,minutes:v,seconds:S}}}l.addEventListener("input",()=>{a.stop()});const a=new x(T);i.disabled=!0;i.addEventListener("click",()=>{a.start(),i.disabled=!0});function T({days:n,hours:t,minutes:o,seconds:s}){m.textContent=e(n),h.textContent=e(t),f.textContent=e(o),c.textContent=e(s)}function e(n){return n.toString().padStart(2,"0")}const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(n){r=n[0].getTime(),r<Date.now()?(a.stop(),k.show({title:"Hey",message:"Please choose a date in the future",closeOnClick:!0,closeOnEscape:!0})):i.disabled=!1}};C(l,g);console.log(c.value);
//# sourceMappingURL=commonHelpers.js.map
