import"./assets/styles-50da57b8.js";import{f as p,i as C}from"./assets/vendor-651d7991.js";const i=document.querySelector("[data-start]"),d=document.querySelector("#datetime-picker"),l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),c=document.querySelector("[data-seconds]");let r=0;class k{constructor(t){this.tick=t,this.isActive=!1}start(){this.isActive||(this.isActive=!0,this.initTime=Date.now(),console.log(this.initTime),this.intervalId=setInterval(()=>{const t=Date.now(),n=r-t,s=this.convertMs(n);this.tick(s);const a={day:l.textContent,hour:m.textContent,minute:h.textContent,second:c.textContent},u={day:e(0),hour:e(0),minute:e(0),second:e(0)};JSON.stringify(a)===JSON.stringify(u)&&this.stop()},1e3))}stop(){clearInterval(this.intervalId)}convertMs(t){const f=Math.floor(t/864e5),y=Math.floor(t%864e5/36e5),S=Math.floor(t%864e5%36e5/6e4),v=Math.floor(t%864e5%36e5%6e4/1e3);return{days:f,hours:y,minutes:S,seconds:v}}}const x=new k(T);i.disabled=!0;i.addEventListener("click",()=>{x.start(),i.disabled=!0,d.disabled=!0});function T({days:o,hours:t,minutes:n,seconds:s}){l.textContent=e(o),m.textContent=e(t),h.textContent=e(n),c.textContent=e(s)}function e(o){return o.toString().padStart(2,"0")}const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){r=o[0].getTime(),r<Date.now()?C.show({title:"Hey",message:"Please choose a date in the future",closeOnClick:!0,closeOnEscape:!0}):i.disabled=!1}};p(d,g);console.log(c.value);
//# sourceMappingURL=commonHelpers.js.map
