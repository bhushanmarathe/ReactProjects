useEffect hook:
generate side effect: eg-> DOM content load-> make DB connection(side effect)

first-> side effect function-> fetch API, DB connection

second -> cleaning code

third -> comma seperated dependency list

useEffect(()=>{
first

    return () => {
        second
    }

},[third])

variation 1: runs on every render

useEffect(()=>{

})

variation 2: runs on only first render

useEffect(()=>{

},[])

variation 3: runs only when count is updated (count update hone ke baad render hone se pehle)

useEffect(()=>{

},[count])

variation 4: multiple dependencies

useEffect(()=>{

},[count,total])

variation 5: iss baar let's add cleanup function

useEffect(()=>{
first

    return () => {
        second
    }

},[third])
