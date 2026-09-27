const PRODUCTS=[
{id:1,name:"Paris Saint-Germain 2026/27 Stadium Home",cat:"jersey",type:"Club Jersey",price:2900,icon:"👕",img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/8debf24e-55ea-42f7-9719-5f55e02ad350/PSG%2BM%2BNK%2BDF%2BJSY%2BSS%2BSTAD%2BHM.png"},
{id:2,name:"Football Training Jersey",cat:"jersey",type:"Training",price:990,icon:"👕",img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/8debf24e-55ea-42f7-9719-5f55e02ad350/PSG%2BM%2BNK%2BDF%2BJSY%2BSS%2BSTAD%2BHM.png"},
{id:3,name:"Nike Phantom 6 Low Elite",cat:"boots",type:"FG Football Boots",price:9000,icon:"👟",img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/047f90f5-8a6d-4bba-8bec-40468f37e692/PHANTOM%2B6%2BLOW%2BELITE%2BFG%2BEH.png"},
{id:4,name:"Nike Phantom Football Boots",cat:"boots",type:"Football Boots",price:5400,icon:"👟",img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/047f90f5-8a6d-4bba-8bec-40468f37e692/PHANTOM%2B6%2BLOW%2BELITE%2BFG%2BEH.png"},
{id:5,name:"Nike Pitch",cat:"ball",type:"Football",price:850,icon:"⚽",img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/05f3c772-63f1-42da-bbc8-56ae1b266cd2/NIKE%2BPITCH%2B-%2BFA25.png"},
{id:6,name:"Nike Training Football",cat:"ball",type:"Training Ball",price:1100,icon:"⚽",img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/05f3c772-63f1-42da-bbc8-56ae1b266cd2/NIKE%2BPITCH%2B-%2BFA25.png"},
{id:7,name:"Nike Match",cat:"gear",type:"Goalkeeper Gloves",price:1200,icon:"🧤",img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/576a6870-fb01-4a6e-ac9c-6476c4300c40/NK%2BGK%2BMATCH%2B-%2BHO24.png"},
{id:8,name:"Football Protection Gear",cat:"gear",type:"Protection",price:690,icon:"🛡️",img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/576a6870-fb01-4a6e-ac9c-6476c4300c40/NK%2BGK%2BMATCH%2B-%2BHO24.png"}
];

const GRAPH={
Football:["Jerseys","Boots","Ball"],
Jerseys:["Football","Accessories"],
Boots:["Football","Accessories"],
Ball:["Football","Training"],
Gloves:["Shin Guards","Accessories"],
"Shin Guards":["Gloves"],
Accessories:["Jerseys","Boots","Gloves","Training"],
Training:["Ball","Accessories"]
};

const TREE={name:"Football Store",children:[
{name:"เสื้อฟุตบอล",cat:"jersey",children:[
{name:"สโมสร",type:"Club",children:[{name:"Classic Red Jersey",id:1},{name:"Club Collection",id:1}]},
{name:"Training",type:"Training",children:[{name:"Black Training Jersey",id:2}]}
]},
{name:"รองเท้าฟุตบอล",cat:"boots",children:[
{name:"FG",type:"FG",children:[{name:"Speed Pro FG",id:3}]},
{name:"AG",type:"AG",children:[{name:"Control AG Elite",id:4}]}
]},
{name:"ลูกฟุตบอล",cat:"ball",children:[
{name:"Match",type:"Match Ball",children:[{name:"Match Ball Pro",id:5}]},
{name:"Training",type:"Training Ball",children:[{name:"Street Football",id:6}]}
]},
{name:"อุปกรณ์ฟุตบอล",cat:"gear",children:[
{name:"ผู้รักษาประตู",type:"Goalkeeper",children:[{name:"Keeper Grip Gloves",id:7}]},
{name:"Protection",type:"Protection",children:[{name:"Carbon Shin Guards",id:8}]}
]}]};

function money(n){return "฿"+n.toLocaleString("th-TH")}
function getCart(){return JSON.parse(localStorage.getItem("pondCart")||"[]")}
function saveCart(c){localStorage.setItem("pondCart",JSON.stringify(c));updateCount()}
function updateCount(){document.querySelectorAll("#cartCount").forEach(x=>x.textContent=getCart().reduce((a,b)=>a+b.qty,0))}
function addToCart(id){let c=getCart(),x=c.find(a=>a.id===id);x?x.qty++:c.push({id,qty:1});saveCart(c);alert("เพิ่มสินค้าในตะกร้าแล้ว")}
function card(p){return `<article class="product"><div class="product-img real-product-image"><img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('image-fallback');this.parentElement.innerHTML='${p.icon}'"></div><div class="product-body"><h3>${p.name}</h3><p>${p.type}</p><div class="price">${money(p.price)}</div><button class="small-btn" onclick="addToCart(${p.id})">+ เพิ่มลงตะกร้า</button></div></article>`}
function initExplore(){updateCount();document.getElementById("tree").innerHTML=`<div class="tree-root">● ${TREE.name}</div>${TREE.children.map(x=>renderTree(x)).join("")}`;showAll();let q=new URLSearchParams(location.search).get("cat");if(q)showCategory(q)}
function showAll(){document.getElementById("resultTitle").textContent="สินค้าทั้งหมด";document.getElementById("resultPath").textContent="Root";document.getElementById("products").innerHTML=PRODUCTS.map(card).join("")}
function showCategory(cat,name){let arr=PRODUCTS.filter(p=>p.cat===cat);document.getElementById("resultTitle").textContent=name||cat;document.getElementById("resultPath").textContent=`Football Store → ${name||cat}`;document.getElementById("products").innerHTML=arr.map(card).join("")}
function showProducts(id){let p=PRODUCTS.find(x=>x.id===id);if(p){document.getElementById("resultTitle").textContent=p.name;document.getElementById("resultPath").textContent=`Root → ${p.cat} → ${p.type} → ${p.name}`;document.getElementById("products").innerHTML=card(p)}}

let graphState={positions:{},drag:null,path:[],selected:null};
function initGraph(){
 updateCount();
 let names=Object.keys(GRAPH),from=document.getElementById("from"),to=document.getElementById("to");
 names.forEach(n=>{from.add(new Option(n,n));to.add(new Option(n,n))});
 from.value="Football"; to.value="Training";
 document.getElementById("adjacency").textContent="const graph = "+JSON.stringify(GRAPH,null,2);
 requestAnimationFrame(()=>{setupGraphPositions();drawGraph();});
 window.addEventListener("resize",()=>{setupGraphPositions();drawGraph()});
 let c=document.getElementById("graphCanvas");
 c.addEventListener("pointerdown",graphPointerDown);c.addEventListener("pointermove",graphPointerMove);c.addEventListener("pointerup",graphPointerUp);c.addEventListener("pointercancel",graphPointerUp);
}
function setupGraphPositions(){
 let c=document.getElementById("graphCanvas"),rect=c.getBoundingClientRect(),w=rect.width,h=rect.height;
 if(!w||!h)return;
 let names=Object.keys(GRAPH),center={x:w/2,y:h/2+5},rx=Math.min(w*.35,245),ry=Math.min(h*.36,190);
 graphState.positions={};
 names.forEach((n,i)=>{let a=i/names.length*Math.PI*2-Math.PI/2;graphState.positions[n]={x:center.x+Math.cos(a)*rx,y:center.y+Math.sin(a)*ry}});
}
function graphCanvasPoint(e){
 let r=document.getElementById("graphCanvas").getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};
}
function nodeAt(pt){
 for(let n of Object.keys(graphState.positions)){let p=graphState.positions[n];if(Math.hypot(pt.x-p.x,pt.y-p.y)<30)return n}return null;
}
function graphPointerDown(e){
 let n=nodeAt(graphCanvasPoint(e));if(!n)return;
 graphState.drag=n;graphState.selected=n;
 document.getElementById("from").value=n;
 drawGraph();
}
function graphPointerMove(e){
 if(!graphState.drag)return;
 let p=graphCanvasPoint(e);graphState.positions[graphState.drag]=p;drawGraph();
}
function graphPointerUp(){graphState.drag=null}
function bfs(start,end){
 let q=[[start,[start]]],seen=new Set([start]);
 while(q.length){let [u,path]=q.shift();if(u===end)return path;
  for(let v of (GRAPH[u]||[]))if(!seen.has(v)){seen.add(v);q.push([v,[...path,v]])}}
 return null;
}
function findPath(){
 let a=document.getElementById("from").value,b=document.getElementById("to").value,p=bfs(a,b);
 graphState.path=p||[];graphState.selected=b;drawGraph();
 let box=document.getElementById("pathResult");
 if(!p){box.innerHTML='<span class="muted">ไม่พบเส้นทางระหว่าง Vertex ที่เลือก</span>';return}
 box.innerHTML=`<div style="color:#9ba69f;font-size:12px;margin-bottom:7px">BFS RESULT • ${p.length-1} EDGES</div>`+
 p.map((x,i)=>`<span class="path-chip">${x}</span>${i<p.length-1?'<span class="path-arrow">→</span>':''}`).join("")+
 `<div style="color:#718077;font-size:12px;margin-top:10px">Path = ${p.join(" → ")}</div>`;
}
function drawGraph(){
 let c=document.getElementById("graphCanvas");if(!c)return;
 let r=c.getBoundingClientRect(),dpr=window.devicePixelRatio||1,w=r.width,h=r.height;
 c.width=w*dpr;c.height=h*dpr;let ctx=c.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);
 ctx.clearRect(0,0,w,h);
 let names=Object.keys(GRAPH),pos=graphState.positions;
 // subtle grid
 ctx.strokeStyle="rgba(100,130,110,.07)";ctx.lineWidth=1;
 for(let x=0;x<w;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}
 for(let y=0;y<h;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
 // edges, unique undirected
 let edges=[];
 for(let a of names)for(let b of GRAPH[a]){let k=[a,b].sort().join("|");if(!edges.some(e=>e.k===k))edges.push({a,b,k})}
 for(let e of edges){
  let A=pos[e.a],B=pos[e.b],active=false;
  for(let i=0;i<graphState.path.length-1;i++)if((graphState.path[i]===e.a&&graphState.path[i+1]===e.b)||(graphState.path[i]===e.b&&graphState.path[i+1]===e.a))active=true;
  ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.lineWidth=active?4:1.4;ctx.strokeStyle=active?"#b8ff35":"#3a4a41";ctx.shadowBlur=active?12:0;ctx.shadowColor="#b8ff35";ctx.stroke();ctx.shadowBlur=0;
  // edge weight for weighted graph concept
  let mx=(A.x+B.x)/2,my=(A.y+B.y)/2;ctx.fillStyle=active?"#d9ffa0":"#68766e";ctx.font="10px Space Grotesk";ctx.textAlign="center";ctx.fillText("1",mx,my-5);
 }
 // nodes
 for(let n of names){
  let p=pos[n],active=graphState.path.includes(n),selected=graphState.selected===n;
  ctx.beginPath();ctx.arc(p.x,p.y,active||selected?29:25,0,Math.PI*2);
  ctx.fillStyle=active?"#b8ff35":"#18241d";ctx.shadowBlur=active?22:0;ctx.shadowColor="#b8ff35";ctx.fill();ctx.shadowBlur=0;
  ctx.lineWidth=selected?3:1.5;ctx.strokeStyle=active?"#d8ff9c":"#52705b";ctx.stroke();
  ctx.fillStyle=active?"#081008":"#e7eee9";ctx.font="600 11px Space Grotesk";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(n,p.x,p.y);
 }
}
function initCart(){updateCount();renderCart()}
function renderCart(){let c=getCart(),box=document.getElementById("cartItems");if(!c.length){box.innerHTML='<div class="empty">ยังไม่มีสินค้าในตะกร้า<br><a class="btn" href="explore.html">เลือกสินค้า</a></div>';document.getElementById("sumQty").textContent=0;document.getElementById("sumTotal").textContent="฿0";return}let total=0,qty=0;box.innerHTML=c.map(x=>{let p=PRODUCTS.find(a=>a.id===x.id),sub=p.price*x.qty;total+=sub;qty+=x.qty;return `<div class="cart-row"><div class="cart-icon">${p.icon}</div><div class="cart-info"><h3>${p.name}</h3><p>${money(p.price)} × ${x.qty}</p></div><b>${money(sub)}</b><button class="small-btn" onclick="removeItem(${p.id})">ลบ</button></div>`}).join("");document.getElementById("sumQty").textContent=qty;document.getElementById("sumTotal").textContent=money(total)}
function removeItem(id){saveCart(getCart().filter(x=>x.id!==id));renderCart()}
function clearCart(){saveCart([]);renderCart()}
function checkout(){if(!getCart().length)return alert("กรุณาเลือกสินค้าก่อน");alert("สั่งซื้อสำเร็จ (ระบบจำลองสำหรับโครงงาน)");clearCart()}
document.addEventListener("DOMContentLoaded",()=>{if(document.getElementById("featured"))initHome()});
updateCount();
