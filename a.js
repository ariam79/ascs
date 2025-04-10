async function lpage(addr){
    let f = await fetch(addr)
    let t = await f.text()
    let body = document.querySelector(".body")
    let md = t.replaceAll("    ","")
    document.title = "ascs - " + md.split("\n")[0].replaceAll("#","");
    body.innerHTML = new showdown.Converter().makeHtml(md)
}
let addr = location.href.split("?")[1]
if(addr == "home" || addr == "" || addr == undefined){
    await lpage("/home.md")
}else{
    await lpage(`/${addr}.md`)
}