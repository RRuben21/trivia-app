import{o as i,c as o,t as _,n as v,r as c,u as m,a as y,b as r,w,B as b,d,F as C,e as T,f as k,_ as M,g as R,h as L,i as q}from"./index-f305a1f8.js";const B={__name:"DifficultyChip",props:{difficulty:{type:String,required:!0}},setup(f){const a=f;return(t,p)=>(i(),o("p",{class:v(["px-4 py-2 rounded-full border absolute uppercase text-white bottom-5 left-8 text-2xl font-bold",a.difficulty==="easy"?"bg-green-600":a.difficulty==="medium"?"bg-yellow-600":"bg-red-600"])},_(a.difficulty),3))}},E={key:0,class:"flex h-full w-full flex-col items-center gap-8 p-10"},H=["innerHTML"],N={class:"grid w-full flex-grow grid-cols-2 gap-8"},S=["innerHTML","onClick"],O={key:1,class:""},j={__name:"QuestionPage",setup(f){const a=k(),t=c(null),p=m(),s=c([]),{changeScore:g}=q(),u=c("");y(async()=>{t.value=await a.getQuestion(p.params.id),s.value.push({id:s.value.length,correct:!0,answer:t.value.correct_answer,points:quesiton.value.difficulty==="easy"?10:quesiton.value.difficulty==="medium"?20:30}),t.value.incorrect_answers.map(e=>{s.value.push({id:s.value.length,correct:!1,answer:e,points:-5})}),s.value=h(s.value)});const h=e=>{for(let l=e.length-1;l>0;l--){const n=Math.floor(Math.random()*(l+1));[e[l],e[n]]=[e[n],e[l]]}return e},x=e=>{g(e),e>0?u.value="CORRECT":u.value="INCORRECT",setTimeout(()=>{L.push("/trivia-app/")},1e3)};return(e,l)=>t.value?(i(),o("div",E,[r(b,null,{default:w(()=>[r(M),R("   "),d("span",{class:v(["font-bold",u.value==="CORRECT"?"text-green-500":"text-red-500"])},_(u.value),3)]),_:1}),d("div",{innerHTML:t.value.question,class:"text-center text-2xl font-bold"},null,8,H),d("div",N,[(i(!0),o(C,null,T(s.value,n=>(i(),o("div",{innerHTML:n.answer,key:n.id,onClick:V=>x(n.points),class:"bg-green-500 flex items-center justify-center text-4xl rounded-lg text-white py-10 px-2"},null,8,S))),128))]),r(B,{difficulty:t.value.difficulty},null,8,["difficulty"])])):(i(),o("div",O," Loading... "))}};export{j as default};
