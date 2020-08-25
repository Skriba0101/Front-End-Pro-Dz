const button = document.querySelector("button")
    if (button !== null) {
        button.onclick = function () {
            const wrapper = document.querySelector("#wrapper").children
            console.log(wrapper)

            const wrapperP = document.querySelectorAll("#wrapper p")
            console.log(wrapperP)
            
            let sumNumber = 0
            let sumString = 0
            for (const key of wrapper) {
                let text = key.innerText
                Number.isNaN(+text) ? sumString++ : sumNumber++
            } console.log(sumNumber, sumString)
        }

    }



