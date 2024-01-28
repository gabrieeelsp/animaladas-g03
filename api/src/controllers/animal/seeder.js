const { Animal } = require('../../db');
const {
    genderList,
    speciesList,
    statusList,
    sizeList,
} = require('../../utils');

const nombreArray = [
    'Jack Skellington',
    'Oogie Boogie',
    'Sally',
    'Doctor Finklenstein',
    'Alcalde',
    'Lock',
    'Demonio Arlequín',
    'Niño Cadáver',
    'Criatura de la olla',
    'Payaso',
    'Satán',
    'Mama Cadáver',
    'Bruja',
    'Corpse Dad',
    'Barrel',
    'Victor Van Dort',
    'Emily',
    'Victoria Everglot',
    'Lord Barkis',
    'Gusano',
    'Bonejangles',
    'Finis Everglot',
    'Mayhew',
    'Pastor Galswells',
    'Nell Van Dort',
    'Maudeline Everglot',
    'Pregonero',
    'Anciana Gertrudis',
    'Hildegarde',
    'Poul el camarero',
    'Emil',
    'Niño Cadaver',
    'Sweeney Todd',
    'Mrs. Lovett',
    'Judge Turpin',
    'Adolfo Pirelli',
    'Anthony',
];

const weightMin = 1;
const weightMax = 60;

const estimatedBirthYearMin = 2005;
const estimatedBirthYearMax = 2024;

module.exports = async () => {
    await Animal.truncate();

    await Animal.bulkCreate(
        nombreArray.map((item) => {
            return {
                name: item,
                gender: genderList[
                    Math.floor(Math.random() * genderList.length)
                ],
                species:
                    speciesList[Math.floor(Math.random() * speciesList.length)],
                status: statusList[
                    Math.floor(Math.random() * statusList.length)
                ],
                size: sizeList[Math.floor(Math.random() * sizeList.length)],
                weight: Math.floor(
                    Math.random() * (weightMax - weightMin + 1) + weightMin,
                ),
                vaccines: Math.random() < 0.5,
                // color: colorList[0],
                disability_illness: Math.random() < 0.5,
                castrated: Math.random() < 0.5,
                estimatedBirthYear: Math.floor(
                    Math.random() *
                        (estimatedBirthYearMax - estimatedBirthYearMin + 1) +
                        estimatedBirthYearMin,
                ),
            };
        }),
    );

    // await Animal.bulkCreate([
    //     {
    //         name: 'lokito',
    //         gender: 'male',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2011,
    //     },
    //     {
    //         name: 'lokita',
    //         gender: 'female',
    //         species: 'cat',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2005,
    //     },
    //     {
    //         name: 'messi',
    //         gender: 'male',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2022,
    //     },
    //     {
    //         name: 'jack',
    //         gender: 'male',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2010,
    //     },
    //     {
    //         name: 'victor',
    //         gender: 'male',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2020,
    //     },
    //     {
    //         name: 'emily',
    //         gender: 'female',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2022,
    //     },
    //     {
    //         name: 'victoria',
    //         gender: 'female',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2011,
    //     },
    // ]);
};
