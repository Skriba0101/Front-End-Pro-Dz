const wrapper = document.querySelector("#wrapper")
if (wrapper !== null){
    for(i=0; i<=5; i++){
        createSquare()
    }
}
// почему при клике он не плюсуется, я же навесила єто событие на кнопку?
function createDiv(props) {
    const div = document.createElement("div");
    const className = props.className ||"";
    const text = props.text||"";
    
    div.innerHTML = className;
    div.innerHTML = text;

    return div;
}

function createSpan(props){
    const span = document.createElement("span");
    const className = props.className||"";
    const text = props.text||"";

    span.innerHTML = className;
    span.innerHTML=text

    return span;
}

function createButton(props){
    const button = document.createElement("button");
    const className = props.className||"";
    const text = props.text||"";

    button.innerHTML = className;
    button.innerHTML=text;
    button.addEventListener ("click",()=>{
        if(typeof props.onClick === "function") {
            props.onClick()
        }
    })

    return button;

}

function createSquare (){
    const mainDiv = createDiv({
        className:"main-div"
    })

    const minusButton = createButton({
        text:"-",
        className:"minus-button",
        onClick:()=>{ numberSpan.text = +numberSpan.text+1 }
        
    })

    const numberSpan = createSpan({
        text:"0",
        className: "main-span"
    })

    const plusButton = createButton({
        text:"+",
        className:"plus-button",
        onClick:()=>{numberSpan.text = +numberSpan.text-1}
    })

    wrapper.appendChild(mainDiv);
    mainDiv.appendChild(minusButton);
    mainDiv.appendChild(numberSpan);
    mainDiv.appendChild(plusButton);

}

