function customRender(reactElement, root){
    // const domEle = document.createElement(reactElement.type)
    // domEle.innerHTML= reactElement.children
    // domEle.setAttribute('href', reactElement.props.href)
    // domEle.setAttribute('target', reactElement.props.target)
    
    // root.appendChild(domEle)
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML= reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domEle.setAttribute(prop, reactElement.props[prop])
    }
    root.appendChild(domEle)
}

const reactElement = {
    type : 'a',
    props : {
        href : "https://www.google.com",
        target : "_blank"
    },
    children : "Click me to visit google"
}

const root = document.querySelector(".root")

customRender(reactElement, root)
