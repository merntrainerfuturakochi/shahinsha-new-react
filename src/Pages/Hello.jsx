
function Hello({abc,value}) {


   console.log("hello page loading..........");

   function change(){
    abc(10000)
    value('brown')
   }
    
  return (
<div>
  <button onClick={change}>Hello page button</button>
</div>
  )
}

export default Hello
