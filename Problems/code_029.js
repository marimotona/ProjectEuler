function integer(){
    const data = new Set();
    for(let i=2; i<=100; i++) {
        for(let j=2; j<=100; j++) {
            const ele = i**j
            if(!data.has(ele)){
                data.add(ele);
            }
        }
    }
    const size = data.size;
    console.log(size);
    return size;
}
integer();