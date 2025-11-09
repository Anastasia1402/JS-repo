// 1.2.3 Створення об’єкта car1 через new Object()
let car1 = new Object();

car1.color = "red";
car1.maxSpeed = 220;
car1.driver = {
    name: "Anastasiia Pidmalivska",
    category: "C",
    "personal limitations": "No driving at night"
};
car1.tuning = true;
car1["number of accidents"] = 0;

// 1.2.4 Створення об’єкта car2 через літерал об’єкта
let car2 = {
    color: "blue",
    maxSpeed: 180,
    driver: {
        name: "Anastasiia Pidmalivska",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2
};

// 1.2.5 Додавання методу drive до car1
car1.drive = function() {
    console.log("I am not driving at night");
};
car1.drive(); // Демонстрація роботи методу

// 1.2.6 Додавання методу drive до car2
car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive(); // Демонстрація роботи методу

// 1.2.7 Конструктор "класу" Truck
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    // 1.2.9 Додаємо метод trip
    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            let message = `Driver ${this.driver.name} `;
            message += this.driver.nightDriving
                ? "drives at night"
                : "does not drive at night";
            message += ` and has ${this.driver.experience} years of experience.`;
            console.log(message);
        }
    };
}

// 1.2.8 "Статичний" метод через prototype
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// 1.2.10 Створення двох об’єктів Truck
let truck1 = new Truck("black", 5000, 90.5, "Aston Martin", "CargoX");
let truck2 = new Truck("white", 5200, 85.2, "Aston Martin", "Transporter");

// Додаємо водіїв
truck1.AssignDriver("Anastasiia Pidmalivska", true, 5);
truck2.AssignDriver("Anastasiia Pidmalivska", false, 2);

// Демонстрація роботи методу trip
truck1.trip(); // Driver Anastasiia Pidmalivska drives at night and has 5 years of experience.
truck2.trip(); // Driver Anastasiia Pidmalivska does not drive at night and has 2 years of experience.

// Для прикладу – Truck без водія
let truck3 = new Truck("green", 4800, 88.1, "Aston Martin", "Speedster");
truck3.trip(); // No driver assigned




