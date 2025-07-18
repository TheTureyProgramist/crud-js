const e=()=>fetch("http://localhost:3000/students").then(e=>e.json()),t=e=>e.map(e=>`<tr>
          <th>${e.id}</th>
          <th>${e.name}</th>
          <th>${e.age}</th>
          <th>${e.course}</th>
          <th>${e.skills}</th>
          <th>${e.email}</th>
          <th>${e.isEnrolled}</th>
        </tr>`).join(""),n=document.querySelector(".students-list"),l=document.getElementById("add-student-form");e().then(e=>{n.innerHTML=t(e)}),l.addEventListener("submit",function(n){n.preventDefault();let l=document.querySelector(".students-list"),d=document.getElementById("add-student-form"),s=document.getElementById("name").value.trim(),m=Number(document.getElementById("age").value),o=document.getElementById("course").value.trim(),u=document.getElementById("skills").value.split(",").map(e=>e.trim()),h=document.getElementById("email").value.trim();fetch("http://localhost:3000/students",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,age:m,course:o,skills:u,email:h,isEnrolled:document.getElementById("isEnrolled").checked})}).then(e=>e.json()).then(()=>e()).then(e=>{l.innerHTML=t(e),d.reset()}).catch(()=>alert("Помилка при додаванні студента"))});
//# sourceMappingURL=crud-js.b1260906.js.map
