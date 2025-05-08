function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false)
        return input.toLowerCase()
    if (toUpper) {
        return input.toUpperCase()
    }
    else {
        return input.toUpperCase()
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4)
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat()
}

class Vehicle {
    private make: string;
    private year: number

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year
    }

    getInfo() {
        return `Make : ${this.make}, Year : ${this.year}`
    }
}

class Car extends Vehicle {
    private model: string
    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }
    getModel() {
        return `Model : ${this.model}`
    }
}

function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    }
    else {
        return value * 2
    }
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length < 1) {
        return null
    }
    const expensiveProduct = products.reduce((prev, current) => {
        return prev.price > current.price ? prev : current
    })
    return expensiveProduct
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day) {
    if (day === Day.Sunday) {
        return "Weekend"
    }
    else {
        return "Weekday"
    }
}

async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error('Negative number not allowed')
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * n)
        }, 1000);
    })
}
