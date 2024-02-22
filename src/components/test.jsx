function Message(){
    const name = 'Firaol';
    if(name == 'Firaol'){
        return <h1>Hello {name}</h1>
    }else if(name == ''){
        return <h1>Name is empty</h1>
    }else{
        return <h1>I dont know your name</h1>
    }
    
}

export default Message;