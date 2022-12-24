// count10(function(){
//     console.log(10);
//     count9(function(){
//         console.log(9);
//         count8(function(){
//             console.log(8);
//         })
//     })
// })



const countDown = ()=>{
    let screen = document.getElementById("screen");
    console.log(10);
    screen.innerHTML = "COUNT DOWN STARTS NOW!!!";
    setTimeout(()=>{
        console.log(10);
        screen.innerHTML = "10";
        setTimeout(()=>{
            console.log(9);
            screen.innerHTML = "9";
            setTimeout(()=>{
                console.log(8);
                screen.innerHTML = "8";
                setTimeout(()=>{
                    console.log(7);
                    screen.innerHTML = "7";
                    setTimeout(()=>{
                        console.log(6);
                        screen.innerHTML = "6";
                        setTimeout(()=>{
                            console.log(5);
                            screen.innerHTML = "5";
                            setTimeout(()=>{
                                console.log(4);
                                screen.innerHTML = "4";
                                setTimeout(()=>{
                                    console.log(3);
                                    screen.innerHTML = "3";
                                    setTimeout(()=>{
                                        console.log(2);
                                        screen.innerHTML = "2";
                                        setTimeout(()=>{
                                            console.log(1);
                                            screen.innerHTML = "1";
                                            setTimeout(()=>{
                                                console.log("Happy Independence Day");
                                                screen.innerHTML = "Happy Independence Day";
                                            },800)
                                        },800)
                                    },800)
                                },800)
                            },800)
                        },800)
                    },800)
                },800)
            },800)
        },800)
    },2000)
}

countDown();
