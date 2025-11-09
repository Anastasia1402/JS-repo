// 1.2.3 
var car1 = new Object();

car1.color = "red";
car1.maxSpeed = 220;
car1.driver = {
    name: "Anastasiia Pidmalivska",
    category: "C",
    "personal limitations": "No driving at night"
};
car1.tuning = true;
car1["number of accidents"] = 0;

// 1.2.4 
var car2 = {
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

// 1.2.5 
car1.drive = function() {
    console.log("I am not driving at night");
};
car1.drive(); 

// 1.2.6 
car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive(); 

// 1.2.7 
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    // 1.2.9 
    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            var message = `Driver ${this.driver.name} `;
            message += this.driver.nightDriving
                ? "drives at night"
                : "does not drive at night";
            message += ` and has ${this.driver.experience} years of experience.`;
            console.log(message);
        }
    };
}

// 1.2.8 
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// 1.2.10 
var truck1 = new Truck("black", 5000, 90.5, "Aston Martin", "CargoX");
var truck2 = new Truck("white", 5200, 85.2, "Aston Martin", "Transporter");

truck1.AssignDriver("Anastasiia Pidmalivska", true, 5);
truck2.AssignDriver("Anastasiia Pidmalivska", false, 2);

truck1.trip(); 
truck2.trip(); 

