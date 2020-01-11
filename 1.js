biodata("Irfan", 19)

function biodata(name, age){
    let biodata = {
        "name": name,
        "age": age,
        "address": "Jl. Nusaindah no.49 Pare, Kediri, Jawa Timur",
        "hobbies": ["Gaming", "Coding", "Reading"],
        "is_married": false,
        "list_school": [
            {
                "name": "SDN Pare 2",
                "year_in": 2006,
                "year_out": 2012,
                "major": null
            },
            {
                "name": "MTsN Pare",
                "year_in": 2012,
                "year_out": 2016,
                "major": null
            },
            {
                "name": "SMK Canda Bhirawa Pare",
                "year_in": 2016,
                "year_out": 2019,
                "major": "Teknik Komputer dan Jaringan"
            }
        ],
        "skills": [
            {
                "skill_name": "Javascript",
                "level": "beginner"
            },
            {
                "skill_name": "PHP",
                "level": "beginner"
            },
            {
                "skill_name": "HTML",
                "level": "advanced"
            },
            {
                "skill_name": "CSS",
                "level": "beginner"
            }
        ],
        "interest_in_coding": true
    }

    return console.log(JSON.stringify(biodata))
}