const inicio = () => {
    const arrayFotos1 = [
        'angular',
        'csharp',
        'css',
        'html',
        'java',
        'javascript',
        'jquery',
        'python',
        'react',
        'vuejs'
    ]

    const arrayFotos2 = [
        'angular',
        'csharp',
        'css',
        'html',
        'java',
        'javascript',
        'jquery',
        'python',
        'react',
        'vuejs'
    ]
    function randomizar1(array) {
        let arrayFotosStep = array
        this.array1 = []
        for (let i = 0; i < 5; i++) {
            const j = Math.floor(Math.random() * (i + 1))
            this.array1[i] = arrayFotosStep[j]
            arrayFotosStep.splice(j, 1)
        }
        for (let i = 0; i < 3; i++) {
            const j = Math.floor(Math.random() * (i + 1))
            this.array1[i + 5] = arrayFotosStep[j]
            arrayFotosStep.splice(j, 1)
        }
        for (let i = 0; i < 1; i++) {
            const j = Math.floor(Math.random() * (i + 1))
            this.array1[i + 8] = arrayFotosStep[j]
            arrayFotosStep.splice(j, 1)
        }

        for (let i = 0; i < 1; i++) {
            const j = Math.floor(Math.random() * (i + 1))
            this.array1[i + 9] = arrayFotosStep[j]
            arrayFotosStep.splice(j, 1)
        }
        return array1
    }



    function randomizar2(array) {
        let arrayFotosStep = array
        this.array2 = []
        for (let i = 0; i < 5; i++) {
            const j = Math.floor(Math.random() * (i + 1))
            this.array2[i] = arrayFotosStep[j]
            arrayFotosStep.splice(j, 1)
        }
        for (let i = 0; i < 3; i++) {
            const j = Math.floor(Math.random() * (i + 1))
            this.array2[i + 5] = arrayFotosStep[j]
            arrayFotosStep.splice(j, 1)
        }
        for (let i = 0; i < 1; i++) {
            const j = Math.floor(Math.random() * (i + 1))
            this.array2[i + 8] = arrayFotosStep[j]
            arrayFotosStep.splice(j, 1)
        }

        for (let i = 0; i < 1; i++) {
            const j = Math.floor(Math.random() * (i + 1))
            this.array2[i + 9] = arrayFotosStep[j]
            arrayFotosStep.splice(j, 1)
        }
        return array2
    }

    randomizar1(arrayFotos1)
    console.log(array1)
    randomizar2(arrayFotos2)
    console.log(array2)

}

inicio()