const API='http://localhost:8080/api/tasks';
async function req(path='',opts={}){const res=await fetch(`${API}${path}`,{headers:{'Content-Type':'application/json',...(opts.headers||{})},...opts});if(!res.ok)throw new Error((await res.text())||`Request failed (${res.status})`);if(res.status===204)return null;return res.json()}
export const getTasks=()=>req(); export const createTask=t=>req('',{method:'POST',body:JSON.stringify(t)}); export const updateTask=(id,t)=>req(`/${id}`,{method:'PUT',body:JSON.stringify(t)}); export const deleteTask=id=>req(`/${id}`,{method:'DELETE'});
