import { signal } from "@preact/signals-react";

export class Car {
    static car = signal(undefined)

    static {
        const storage = localStorage.getItem("Juan")
        if (storage) {
            const data = JSON.parse(storage)
            if (data) {
                this.car.value = data
            } 
        } else {
            this.car.value = [] 
        }
    }

    static add(product) {
        
        if (this.car.value.find((p) => p.id == product.id)) {
            console.log('a')
            this.quantify(product.id, product.quantify)
            return
        }

        this.car.value = [
            ...this.car.value,
            product
        ] 
        this.save()
    }
    
    static remove(id) {
        this.car.value = this.car.value.filter((product) => {
            return product.id !== id
        })
        this.save()
    }

    static quantify(id, quantity) {
        const index = this.car.value.findIndex((product) => {
            return product.id === id    
        })
    
        this.car.value[index].quantify = this.car.value[index].quantify + quantity
        this.car.value = [ ...this.car.value ]
        this.save()
    }

    static save() {
        localStorage.setItem("Juan", JSON.stringify(this.car))
    }
}