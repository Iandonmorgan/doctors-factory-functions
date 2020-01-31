const createDoctor = function (name = "name unspecified", specialty = "specialty unspecified", address = "address unspecified") {
    return {
        "name": name,
        "specialty": specialty,
        "address": address
    }
}

const doctor = createDoctor("Dr. Pepper", "Refresh-ology", "123 Fake St.");
console.log("Doctor", doctor)

const createPet = (name = "name unspecified", breed = "breed unspecified") => {
    return {
        "name": name,
        "breed": breed
    }
}

const BowWowKennels = [
    createPet("scrappy", "mutt"),
    createPet("rory", "mutt"),
    createPet("alpha", "german shepherd")
];

console.log("BowWowKennels", BowWowKennels);